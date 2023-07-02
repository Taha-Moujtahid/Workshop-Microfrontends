import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Footer from "./Footer";
import Content from "./Content";
import Header from "./Header";

const App = () => (
  <>
    <Header />
    <Content />
    <Footer />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
