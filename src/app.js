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
const vdom = {
  tag : "p",
  props: {},
  children: [
    {
      tag: "h1",
      props: {},
      children: ["Hello This is Vdom"]
    },
    {
      tag: "ul",
      props: {},
      children: [
        {
          tag : "li",
          props: {},
          children: ["1 item"]
        },
        {
          tag : "li",
          props: {},
          children: ["2 item"]
        },
        {
          tag : "li",
          props: {},
          children: ["3 item"]
        }
      ]
    }
  ]
}

// show vdom contained in realDOM
document.querySelector("#root")
.appendChild(createDOM(vdom));
