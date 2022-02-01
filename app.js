
// // create function to render actual DOM : passing vdom as node
// function createDOM(node) {
//   // 1 element of vdom =  considered as node

//   // if node type is consists of string
//   if (typeof node === 'string') {
//     // return as text
//     return document.createTextNode(node);
//   }

//   // define node tag to create element in DOM 
//   const element = document.createElement(node.tag);

//   // about children of node
//   node.children
//     .map(createDOM) //mapping all children no matter how many
//     .forEach(element.appendChild.bind(element)); //bind elements to call children after children

//   return element;
// }

// // create virtual Dom : consist of 3 elements
// const vdom = {
//   tag: 'p',
//   props: {},
//   children: [
//     {
//       tag: 'h1',
//       props: {},
//       children: ["React 만들기"],
//     },
//     {
//       tag: 'ul',
//       props: {},
//       children: [
//         {
//           tag: 'li',
//           props: {},
//           children: ["첫 번째 아이템"]
//         },
//         {
//           tag: 'li',
//           props: {},
//           children: ["두 번째 아이템"]
//         },
//         {
//           tag: 'li',
//           props: {},
//           children: ["세 번째 아이템"]
//         },
//       ]
//     }
//   ],
// };

// // render in the document. DOM 
// document
//   .querySelector('#root')
//   .appendChild(createDOM(vdom));  





// create function to call vdom in real Dom
const createDOM =(node) =>{
  
  if(typeof node === 'string'){
    return document.createTextNode(node);
  }
  
  // define element by tag
  const element = document.createElement(node.tag);

  // show all children by using map and forEach
 node.children
    .map(createDOM)
    .forEach(element.appendChild.bind(element))


  return element;
}

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
