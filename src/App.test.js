import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { getQueriesForElement } from "@testing-library/dom";
import ReactDom from "react-dom";
import App from "./App";
import {  render } from '@testing-library/react'
import { shallow } from "enzyme";

// function render(ui) {
//   const container = document.createElement("div");
//   ReactDom.render(ui, container);
//   const queries = getQueriesForElement(content);
//   return { container, ...queries };
// }

test(" render without crashing ", () => {
  const { getByLabelText } = render(<App />);
  const input = getByLabelText('enter number');
  expect(input).toHaveAttribute('type','umber');
//   expect(div.querySelector("input")).toHaveAttribute("type", "number");
//   expect(div.querySelector("label")).toHaveTextContent("enter number");
});
