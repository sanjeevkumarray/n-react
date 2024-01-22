// const heading=React.createElement("h1",{},"Hello World From React Js!!");
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyx: "abc" },
//   "Hello World From React Js!!"
// );
// console.log(heading); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**
 * 
 * <div id="parent">
 * <div id="child">
 * <h1> I'm  h1 tag</h1>
 * <h2> I'm h1 tag</h2>
 * </div>
 * <div  id="child2">
 *    <h1>I'm h1 tag</h1>
 *    <h2> I'm h1 tag</h2>
 * </div>
 * </div>
 * 
 * ReactElement(Object) =>HTML (Browser Understands)

 */


const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
      React.createElement("h1",{}, "I'm an h1 tag"),
      React.createElement("h2",{},"I'm an h2 tag"),
    ]),

    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{}, "I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag"),
      ]),
    ]);

//Jsx
console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);