import React, { FC } from "react";
import { Product } from "@jirihamberg/shop-product-service";
import { Card } from "antd";

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {

  return (
    <Card key={product.uuid} title={`${product.name}: ${product.cost} ${product.currency}`}>
      <p>{product.description}</p>
    </Card>
  );
};

export default ProductCard;
