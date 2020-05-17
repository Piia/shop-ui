import React, { FC } from "react";
import { Product } from "@jirihamberg/shop-product-service";
import { Card } from "antd";

import ProductEditIcon from './EditIcon';

interface Props {
  product: Product;
}


const cardStyle = {
  width: '50em'
};

const ProductCard: FC<Props> = ({ product }) => {

  return (
    <Card
      key={product.uuid}
      style={cardStyle}
      title={`${product.name}: ${product.cost} ${product.currency}`}
      extra={<ProductEditIcon product={product} />}
    >
      <p>{product.description}</p>
    </Card>
  );
};

export default ProductCard;
