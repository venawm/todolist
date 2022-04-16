import React from 'react';

const Data = ({input,setInput,arr,i}) => {
    console.log(arr)
    const del = (e)=>{
        const item =e.target.innerText
       
        const newArr = input.filter((parameter)=>{
            return parameter !== item;
        })
        setInput(newArr)
        
        
       
        console.log(newArr)


    }
    return (
        <div>
            {input.map((e)=>{
                if(i===""){
                return <h1 onClick={del}>{e}</h1>
                }
                else if(e.includes(i)){
                    return <h1>{e}</h1>
                }
               
            })}
        </div>
    );
};

export default Data;