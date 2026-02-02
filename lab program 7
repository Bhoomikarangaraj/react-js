import React,{useState,useEffect}from 'react'

function App() {
   const[user,setuser]=useState([])
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>setuser(data))

   },[])
  return (
    <div className='container'>
      <h2 className='title'>UserDetails</h2>
      <div className='user-list'>
        {user.map((Details)=>(
          <div key={user.id}>
            <p>Name:{Details.name}</p>
            <p>user email:{Details.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
