import React, {useState} from 'react'

function App() {
  const [activeTab,setactiveTab]=useState('Home')
  return (
    <div style={Style.Container}>
      <h1>Tab Component</h1>
      <div style={Style.tabContainer}>
      <button 
      style={activeTab === "Home" ? Style.activeBtn :Style.Btn}
      onClick={()=>setactiveTab('Home')}>Home</button>

      <button
      style={activeTab === "About" ? Style.activeBtn :Style.Btn}
       onClick={()=>setactiveTab('About')}>About</button>

      <button
      style={activeTab === "Contact" ? Style.activeBtn :Style.Btn}
       onClick={()=>setactiveTab('Contact')}>Contact</button>
      </div>
      <div style={Style.contentBox}>
       {activeTab === "Home" && (<p>this is home page</p>)}
       {activeTab === "About" && (<p>this is About page</p>)}
       {activeTab === "Contact" && (<p>Contact us:xxxxx</p>)}
 </div>
    </div>
    
  )
}
const Style={
  Container:{
    minHeight:"100vh",
    padding:"20px",
    background:"lightgrey"
  },
  tabContainer:{
    padding:"20px",
    border:"none",
    margin:"20px"
  },
  contentBox:{
    height:"100px",
    width:"300px",
    border:"1px solid",
    marginLeft:"300px",
    background:"Lightgreen",
    padding:"10px"

  },
  activeBtn:{
    background:"green",
  },
  Btn:{
    background:"white"
  }

};
export default App