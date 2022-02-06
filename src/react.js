
let hooks = [];
// need index to order hookArray
let currentComponent = 0;

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

// define useState function
function useState(initiValue){
  // define position to have previous state
  // replace position with currentComponent in this hook
  let position = currentComponent -1;
  // check if there is already initial hooks
  // should not make changes inside => will reset
  if(!hooks[position]){
    hooks[position] = initiValue;
  }
  // defin modifier to make changes on value
  const modifier = nextValue =>{
    hooks[position] = nextValue;
  }
  return [hooks[position], modifier]
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

        // define initial hook where return Function
        hooks[currentComponent] = null;
        currentComponent ++;

      // check if there is children && children is Array?
      if(children.length > 0){
        return tag(makeProp(props, children))
      }else{
        return tag(props);
      }
    }
    }else{
      return{  //Virtual Dom's Input Data
        tag,
        props,
        children
    }
  }
}


// export function render(vdom, container){
//     container.appendChild(createDOM(vdom));
//   };
  
  // create render to compare
export const render = (function () {
  // to compare, define prev State
  let prevDom = null;

 return function (vdom, container){
   // initial state. 
  if (prevDom === null){
    prevDom = vdom;
  }

// diff
    container.appendChild(createDOM(vdom));
  }
})();