import React, { FC } from 'react';
import { Product } from '@jirihamberg/shop-product-service';
import { Modal } from 'antd';
import ProductForm from './ProductForm/ProductForm';

interface Props {
  product: Product,
  visible: boolean,
  close: () => void,
  editSuccessCallback: (product: Product) => void
};


const ProductEditModal: FC<Props> = ({ product, visible, close, editSuccessCallback }) => {

  const handleOk = () => {
    editSuccessCallback(product);
  };

  const handleCancel = () => {
    close();
  };


  return (
    <Modal
      title="Edit Product"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >

      <ProductForm product={product} />

    </Modal >
  );
};

export default ProductEditModal;
