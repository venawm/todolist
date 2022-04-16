import Input from "./components/input";
import React,{useState} from "react";

function App() {
  const [input,setInput] = useState([])
  const [arr,setArr] = useState([])
  console.log(input)

  return (
    <div>
      <Input arr={arr} setArr={setArr} setInput={setInput} input={input}/>
      
      

    </div>
  );
}

export default App;
