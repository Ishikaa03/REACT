function customRender(reactElement, container) {

      // by setting attribute for one element at a time
      // const domElement= document.createElement(reactElement.type);
      // domElement.innerHTML = reactElement.children;
      // domElement.setAttribute('href', reactElement.props.href);
      //   domElement.setAttribute('target', reactElement.props.target);

      //   container.appendChild(domElement);

      // Using loop
      const domElement = document.createElement(reactElement.type);
      domElement.innerHTML = reactElement.children;
      for(const prop in reactElement.props){
         if(prop === 'children') continue;
         domElement.setAttribute(prop, reactElement.props[prop]);
      }
      container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props : {
        href: 'https://react.dev',
          target: '_blank',

    },
   children:'Click me to visit React website'
}

const mainContainer = document.querySelector('#root') 

customRender(reactElement, mainContainer)