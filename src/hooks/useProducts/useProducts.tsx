import { useState, useEffect } from "react";
import { PageProduct, Product } from "@jirihamberg/shop-product-service";
import { ProductControllerApiAxiosParamCreator } from "@jirihamberg/shop-product-service";
import { useReactOidc } from '@axa-fr/react-oidc-context';
import axios from "axios";

export interface AxiosException {
  rejectReason: any;
}

export interface ProductResponse {
  exception: AxiosException;
  products: Product[];
}

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_PRODUCT_SERVICE_URL
});

const productApi = ProductControllerApiAxiosParamCreator();

export function useProducts(): ProductResponse {
  const { oidcUser: { access_token } } = useReactOidc();
  const [products, setProducts] = useState<Product[]>([]);
  const [exception, setException] = useState<any>(null);

  useEffect(() => {
    // set user's access token as bearer token
    axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;

    const products: Promise<Product[]> = axiosInstance
      .request<PageProduct>(productApi.list())
      .then((page) => page.data.content ?? []);

    products.then(setProducts).catch(setException);
  }, [access_token]);

  return {
    exception: { rejectReason: exception },
    products: products,
  };
}
