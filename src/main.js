import React from "react";
import ReactDOM from "react-dom";

function Hello() {
  return <div><h1>Hello React</h1></div>
}

ReactDOM.render(
  <Hello/>,
  document.getElementById('app')
);
