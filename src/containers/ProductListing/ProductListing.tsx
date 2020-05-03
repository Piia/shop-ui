import React, { FunctionComponent } from "react";

import { useProducts } from "../../hooks/useProducts/useProducts";

export const ProductListing: FunctionComponent<{}> = function () {
  const productResponse = useProducts();

  if (productResponse.exception?.rejectReason) {
    return (
      <div>{`Failed to fetch products: ${productResponse.exception.rejectReason}`}</div>
    );
  }

  return (
    <div>
      {productResponse.products.map(product => (
        <div key={product.uuid}>{`Name ${product.name}`}</div>
      ))}
    </div>
  );
};

export default ProductListing;
