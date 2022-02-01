// create function to call vdom in real Dom
export const createDOM =(node) =>{
  
    if(typeof node === 'string'){
      return document.createTextNode(node);
    }
    
    // define element by tag
    const element = document.createElement(node.tag);

    // get props key-value
    Object.entries(node.props)
            .forEach(([key, value]) => element.setAttribute(key, value)) 
  
    // show all children by using map and forEach
   node.children
      .map(createDOM)
      .forEach(element.appendChild.bind(element))
  
  
    return element;
  }

  export const render = (vdom, container) =>{
    container.appendChild(createDOM(vdom));
  }
  