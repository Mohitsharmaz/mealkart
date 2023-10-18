// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { key: "1st" }, "I'm H1 tag"),
//     React.createElement("h1", { key: "2nd" }, "I'm H1 tag"),
//   ])
// );
// let heading = React.createElement(
//   "h1",
//   { id: "heading", key: "mohit" },
//   "Hello React"
// );
// console.log("heading", parent);
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
let element = React.createElement("h1", {
    id: "heading"
}, "Hello mohit mohit");
let rootDiv = document.getElementById("root");
let root = ReactDOM.createRoot(rootDiv);
root.render(element);
root.render(element);

//# sourceMappingURL=index.7c0ccee6.js.map
