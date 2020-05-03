import React, { FunctionComponent } from "react";

import { useProducts } from "../../hooks/useProducts/useProducts";

export const ProductListing: FunctionComponent<{}> = function () {
  const maybeProducts = useProducts();

  if (maybeProducts.exception?.rejectReason) {
    return (
      <div>{`Failed to fetch products: ${maybeProducts.exception.rejectReason}`}</div>
    );
  }

  return (
    <div>
      {maybeProducts.products.map((product) => (
        <div>{`Name ${product.name}`}</div>
      ))}
    </div>
  );
};

export default ProductListing;
