import React, { FC } from "react";
import { useProducts, ProductResponse } from "../../hooks/useProducts/useProducts";

export interface ProductResponseAware {
  productResponse: ProductResponse
}

export default function withProducts<P>(Component: FC<P & ProductResponseAware>): FC<P> {

  return (props: P) => {
    const productResponse = useProducts();

    return (
      <Component productResponse={productResponse} {...props} />
    );
  };

}
