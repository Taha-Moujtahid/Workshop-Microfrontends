import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import SongList from "./SongList";

const App = () => (
  <SongList></SongList>
);
ReactDOM.render(<App />, document.getElementById("app"));
