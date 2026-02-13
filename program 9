import React,{useState} from 'react';

function App() {
  const [theme,setTheme]=useState("light");
  const toogleTheme=()=>{
    setTheme(theme ==="light" ? "Dark" :"light")
  }
  const containerStyle={
    minHeight:"100vh",
    padding:"20px",
    backgroundColor:theme ==="light" ? "black" :"white",
    color:theme === "light" ? "white" :"black"
  }
  return (
    <div style={containerStyle}>
      
      <h1>theme toogle example</h1>
      <p>click button to switch mode</p>
      <button onClick={toogleTheme}>switch to {theme === "light" ? "light" :"Dark"} Mode
      </button>
      <div style={{marginTop:"20px"}}></div>
      <p>text theme change according to the selected theme.</p>
    </div>
  )
}

export default App
