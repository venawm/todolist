import React,{useState,useEffect} from 'react';
import Data from './data';

const Input= ({setInput,input,arr,setArr}) => {
   
    const[i,setI]= useState("")
    const[value,setValue]= useState("")
    // setArr(input)

    const searchHandler = (e)=>{
       let searchKey=  e.target.value
       setI(searchKey)
        const arr = input.filter((items)=>{
            return items.includes(searchKey)
        })
        
        setArr(arr)
        console.log(arr)
       
        

    }

    const valueHandler = (e)=>{
        setValue(e.target.value)
    }

    const inputHandler =(e)=>{
        e.preventDefault()
        
        setInput(input.concat(e.target.a.value))
        setValue("")

    }
    return (
        <div>
                <input type="text" onChange={searchHandler} />

            <form action=""  onSubmit={inputHandler}>
                <input name='a' value = {value} onChange={valueHandler} placeholder="input" type="text" />
                
            </form>
            <Data  i = {i} arr={arr} input={input} setInput={setInput}/>
            
        </div>
    );
};

export default Input