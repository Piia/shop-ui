import React from "react";
import { Layout } from "antd";

const { Header, Content, Sider, Footer } = Layout;

export interface ShopLayoutProps {}

const ShopLayout: React.FunctionComponent<ShopLayoutProps> = () => {
  return (
    <Layout>
      <Header>header</Header>
      <Layout>
        <Sider>left sidebar</Sider>
        <Content>main content</Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
};

export default ShopLayout;
