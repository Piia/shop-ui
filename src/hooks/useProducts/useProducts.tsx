import { useState, useEffect } from "react";
import { PageProduct, Product } from "@jirihamberg/shop-product-service";
import { ProductControllerApiAxiosParamCreator } from "@jirihamberg/shop-product-service";
import axios from "axios";

export interface AxiosException {
  rejectReason: any;
}

export interface ProductResponse {
  exception: AxiosException;
  products: Product[];
}

const productApi = ProductControllerApiAxiosParamCreator();

export function useProducts(): ProductResponse {
  const [products, setProducts] = useState<Product[]>([]);
  const [exception, setException] = useState<any>(null);

  useEffect(() => {
    const products: Promise<Product[]> = axios
      .request<PageProduct>(productApi.list())
      .then((page) => page.data.content ?? []);

    products.then(setProducts).catch(setException);
  }, []);

  return {
    exception: { rejectReason: exception },
    products: products,
  };
}
