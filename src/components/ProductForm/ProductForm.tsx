import React, { FC, useState } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { Product, ProductCurrencyEnum } from "@jirihamberg/shop-product-service";

interface Props {
  product?: Product
};

const ProductForm: FC<Props> = ({ product }) => {

  const [name, setName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.cost);
  const [currency, setCurrency] = useState(product?.currency || ProductCurrencyEnum.EUR);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onChangeDispatch =
    (dispatch: React.Dispatch<React.SetStateAction<string>>) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatch(value);
      };

  const onChangeDispatchNumber =
    (dispatch: React.Dispatch<React.SetStateAction<number | undefined>>) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        dispatch(value);
      };

  return (
    <Form {...layout}>
      <Form.Item label="Name" name="name">
        <Input type="text" defaultValue={name} onChange={onChangeDispatch(setName)} />
      </Form.Item>
      <Form.Item label="Price" name="price">
        <Input defaultValue={price} onChange={onChangeDispatchNumber(setPrice)} />
      </Form.Item>
      <Form.Item label="Currency" name="currency">
        <Input defaultValue={currency} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

    </Form>
  );
}

export default ProductForm;
