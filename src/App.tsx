import React from "react";
import "./App.scss";
import { Button } from "antd";
import ProductListing from "./containers/ProductListing/ProductListing";

function App() {
  return (
    <div className="App">
      <ProductListing />
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
