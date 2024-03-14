import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { id: "child-1" }, "Child-1");
const heading2 = React.createElement("h1", { id: "child-2" }, "Child -2");

const subParent = React.createElement("div", { id: "sub-parent" }, [
  heading1,
  heading2,
]);

const parent = React.createElement("div", { id: "sub-parent" }, subParent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
