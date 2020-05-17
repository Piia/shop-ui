import React, { FC, useState } from 'react';

import { EditOutlined } from '@ant-design/icons';
import { Product } from '@jirihamberg/shop-product-service';
import ProductEditModal from '../ProductEditModal';

interface Props {
  product: Product
}

const ProductEditIcon: FC<Props> = ({ product }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <div>
      <EditOutlined onClick={openModal} />
      <ProductEditModal
        product={product}
        close={() => { setModalVisible(false) }}
        visible={modalVisible}
        editSuccessCallback={console.log}
      />
    </div>
  );

};

export default ProductEditIcon;

