import React from "react";
import ShopLayout from "../containers/ShopLayout/ShopLayout";

export default {
  title: "ShopLayout",
  component: ShopLayout,
};

export const layout1 = () => <ShopLayout />;

layout1.story = {
  name: "layout1",
};
