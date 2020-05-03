import React, { FunctionComponent } from "react";
import { ProductResponse } from "../../hooks/useProducts/useProducts";
import withProducts from "../../decorators/withProducts/withProducts";


interface Props {
  productResponse: ProductResponse
};

export const ProductListing: FunctionComponent<Props> = function (props) {

  if (props.productResponse.exception?.rejectReason) {
    return (
      <div>{`Failed to fetch products: ${props.productResponse.exception.rejectReason}`}</div>
    );
  }

  return (
    <div>
      {props.productResponse.products.map(product => (
        <div key={product.uuid}>{`Name ${product.name}`}</div>
      ))}
    </div>
  );
};

export default withProducts<{}>(ProductListing);
