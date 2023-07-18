import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
function Header() {
    return <h1>hello from the Header!</h1>;
  }
  function Article() {
    return <div>please pass this test</div>;
  }