import React from "react";
import reactDom from "react-dom";
import Home from "./Home";

test("render Home compenents", () => {
  const div = document.createElement("div");
  reactDom.render(<Home />, div);
  console.log(div.innerHtml);
});
