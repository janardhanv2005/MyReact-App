{
  /* <div id="parent">
    <div id="child">
        <h1>My H1 from React Component</h1>
    </div>
 </div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
 [React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "My H1 from React Component"),React.createElement("h2", {}, "My H2 from React Component")]
  ),React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "My H1 from React Component2"),React.createElement("h2", {}, "My H2 from React Component2")]
  )]
);

const header = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// setTimeout(()=>{
//     root.render(parent);
// }, 5000);

