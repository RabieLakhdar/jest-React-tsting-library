import React from 'react';
import {toHaveAttribute,toHaveTextContent } "@testing-library/jest-dom";
import ReactDOM from "react-dom";
import Native from "./Native";

expect.expect({toHaveAttribute,toHaveTextContent })
test(" render without crashing native compoenets ", () => {
  const div = document.createElement('div')
  ReactDOM.render(<Native />, div)

  expect(div.querySelector("input")).toHaveAttribute("type", "number");
  expect(div.querySelector("label")).toHaveTextContent("enter number");
});
