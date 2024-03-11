{
  /* <div id="parent">
  <div id="child-1">
    <h1>child 1 heading 1</h1>
    <h2>child 1 heading 2</h2>
  </div>
  <div id="child-2">
    <h1>child 2 heading 1</h1>
    <h2>child 2 heading 2</h2>
  </div>
</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", {}, "child 1 heading 1"),
    React.createElement("h2", {}, "child 1 heading 2"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "child 2 heading 1"),
    React.createElement("h2", {}, "child 2 heading 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root-container"));

root.render(parent);
