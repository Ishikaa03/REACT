import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function Myapp (){
//   return(
//     <div>
//       <h1>custom App!</h1>
//     </div>
//   )
// }


// this will not work as we are not using JSX

// const reactElement = {
//     type: 'a',
//     props : {
//         href: 'https://react.dev',
//           target: '_blank',

//     },
//    children:'Click me to visit React website'
// }

// one mwthod to render

// const anotherElement=(
//   <a href="https://react.dev" target="_blank">
//     Click me to visit React website
//   </a>
// )

// second method to render

const reactElement = React.createElement(
  'a',
  {href: 'https://react.dev', target: '_blank'},
  'Click me to visit react website'
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  reactElement
    
);
