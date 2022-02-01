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
  