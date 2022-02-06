
// create Component for class 
export class Component {
  constructor(props){
    this.props = props
  }
}


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

  function makeProp (props, children){
    return {
      ...props,
      children: children.length === 1 ? children[0] : children
    }
  }

//   add function createElement getting tag, props, children as params
// make children as Array
export const createElement = (tag, props, ...children) => {
    // defulat param props ={} : can't be used : undefined = ok. null = obj(not ok)
    props = props || {} //if null = can't render

    // check if it is function or string (JSX ? function : string tag)
    if(typeof tag === 'function'){
      // typeof can't distinguish function & class -> use 'prototype'
      // instanceof Component = class component
      if(tag.prototype instanceof Component){
        const instance = new tag(makeProp(props, children));
        return instance.render();
      }else{
      // check if there is children && children is Array?
      if(children.length > 0){
        return tag(makeProp(props, children))
      }else{
        return tag(props);
      }
    }
    }else{
      return{
        tag,
        props,
        children
    }
  }
}


  export const render = (vdom, container) =>{
    container.appendChild(createDOM(vdom));
  }
  