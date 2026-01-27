import React,{useState} from 'react'

function Calculator() {
    const [num1,setNum1]=useState("");
    const [num2,setnum2]=useState("");
    const a=Number(num1)
    const b=Number(num2)
  return (
    <div>
        <h1>Calculator</h1>
        <input
         placeholder='Enter the First value'onchange={(e)=>setNum1(e.target.value)}></input>
         <input 
         placeholder='Enter the Second value'onchange={(e)=>setnUM2(e.target.value)}></input>
        <div style={{height:"100px",
             width:"200px",
             border:"2px xolid",
             backgroundColor:"lightgrey",
             marginLeft:"400px",
             marginTop:"20px"}}>
               <p>Addition:{a+b}</p>
               <p>Subtraction:{a-b}</p>
               <p>Multiplication:{a*b}</p>
               <p>Division:{b==0 ? "can't divided by zero":a/b}</p>

             
             </div>
      
    </div>
  )
}

export default Calculator
