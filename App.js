import React from 'react';
import ReactDOM from 'react-dom/client';
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

const Title = () => <h1 tabindex="5">I am Title</h1>;
const HeadingComponent = () => (
<div id="container">
  <Title />
<h1> Hellow World from React Component </h1>
</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
// setTimeout(()=>{
//     root.render(parent);
// }, 5000);

