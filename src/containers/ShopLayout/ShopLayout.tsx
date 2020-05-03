import React from "react";
import { Button } from "antd";
// import { Layout } from "antd";

// const { Header, Content, Sider, Footer } = Layout;

export interface ShopLayoutProps {}

const ShopLayout: React.FunctionComponent<ShopLayoutProps> = () => {
  return (
    <div>
      ShopLayout <Button type="primary">Paina tästä</Button>
    </div>
  );
  /* return (
    <Layout>
      <Header>header</Header>
      <Layout>
        <Sider>left sidebar</Sider>
        <Content>main content</Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  ); */
};

export default ShopLayout;
