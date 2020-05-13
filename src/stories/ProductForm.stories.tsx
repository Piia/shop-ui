import React from "react";
import ProductForm from "../components/ProductForm/ProductForm";
import { Product, ProductCurrencyEnum } from "@jirihamberg/shop-product-service";


export default {
  title: "ProductForm",
  component: ProductForm,
};

export const emptyLayout = () => <ProductForm />;

export const prefilledLayout = () => {
  var product: Product = {
    name: "Test Product",
    cost: 12.5,
    currency: ProductCurrencyEnum.EUR
  };

  return (
    <ProductForm product={product} />
  );
}

emptyLayout.story = {
  name: "empty form",
};

prefilledLayout.story = {
  name: "prefilled form",
}
