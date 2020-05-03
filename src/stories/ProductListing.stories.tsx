import React from "react";
import { ProductListing } from "../containers/ProductListing/ProductListing";
import { ProductResponse } from "../hooks/useProducts/useProducts";
import { ProductCurrencyEnum } from "@jirihamberg/shop-product-service";

const productResponse: ProductResponse = {
  exception: {
    rejectReason: null
  },
  products: [
    {
      uuid: "56ec271f-d136-4996-a48a-467c7eb1d398",
      currency: ProductCurrencyEnum.EUR,
      cost: 5.2,
      name: "Product A",
      description: "Great product with cheap price."
    },
    {
      uuid: "d8ec8f48-4edb-45ef-8de0-09359e47e20b",
      currency: ProductCurrencyEnum.EUR,
      cost: 12.99,
      name: "Product B",
      description: "Even better product with medium price."
    }
  ]
};

export default {
  title: "ProductListing",
  component: ProductListing,
};

export const layout1 = () => <ProductListing productResponse={productResponse} />;

layout1.story = {
  name: "layout1",
};
