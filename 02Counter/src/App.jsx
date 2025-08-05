import {useState} from 'react'
import './App.css'

function App() {
 
const [count, setCount]  = useState(0);

const addValue = () => {
  if(count<20){
     setCount(count + 1);
  }
  
}
const removeValue = () => {
  if(count >0){
     setCount(count - 1);
  }

}
  return (
    <>
      <h1>Counter_Making</h1>
      <h2>Counter Value:{count}</h2>

      <button onClick={addValue}>Add Value{count}</button>
      <br/>
      <button onClick={removeValue}>Remove Value{count}</button>
      
    </>
  )
}

export default App
