 import React from 'react' ;

function App() {
  const [color, setColor ] = React.useState("white");
  return (
    <div className="container">
      <h1 className="title">color picker</h1>
      <div className="btn-group">
        <button className="btn1" onClick={()=>setColor("red")}>Red</button>
        <button className="btn2" onClick={()=>setColor("green")}>Green</button>
        <button className="btn3" onClick={()=>setColor("blue")}>Blue</button>
      </div>
      <div className="color-box" style={{ backgroundColor: color, height: "200px", width: "200px" }}></div>
    </div>
  );
}

export default App