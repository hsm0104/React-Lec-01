// // create function to call vdom in real Dom
// const createDOM =(node) =>{
  
//   if(typeof node === 'string'){
//     return document.createTextNode(node);
//   }
  
//   // define element by tag
//   const element = document.createElement(node.tag);

//   // show all children by using map and forEach
//  node.children
//     .map(createDOM)
//     .forEach(element.appendChild.bind(element))


//   return element;
// }


// create vdom : simple obj 
// const vdom = {
//   tag : "p",
//   props: {},
//   children: [
//     {
//       tag: "h1",
//       props: {},
//       children: ["Hello This is Vdom"]
//     },
//     {
//       tag: "ul",
//       props: {},
//       children: [
//         {
//           tag : "li",
//           props: {
//             style: "color: red"
//           },
//           children: ["1 item"]
//         },
//         {
//           tag : "li",
//           props: {
//             style: "color: orange"
//           },
//           children: ["2 item"]
//         },
//         {
//           tag : "li",
//           props: {
//             style: "color: coral"
//           },
//           children: ["3 item"]
//         }
//       ]
//     }
//   ]
// }

// test createElement. copying vdom using createElement
// const vdom = createElement('p', {}, 
// createElement('h1', {}, "Hello This is Vdom"),
// createElement('ul', {}, 
//   createElement("li", {style: "color: red"}, "1st item"),
//   createElement("li", {style: "color: purple"}, "2nd item"),
//   createElement("li", {style: "color: pink"}, "3rd item"),
//   )
// );

// add to make React
/* @jsx createElement */
import { createDOM, createElement, render } from "./react"; //createElement should be there for dist file
const vdom =  // vdom 3 : more like JSX. But not React yet
<p>
  <h1>Making Simple React</h1>
  <ul>
    <li style= "color: red">item 1</li>
    <li style= "color: orange">item 2</li>
    <li style= "color: purple">item 3</li>
  </ul>
</p>

// // show vdom contained in realDOM
// document.querySelector("#root")
// .appendChild(createDOM(vdom));

render(vdom, document.querySelector("#root"));