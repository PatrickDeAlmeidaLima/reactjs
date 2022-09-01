import './App.css';
import MyComponent from "./Components/MyComponent";
import { useState } from "react";
import Title from './Components/Title';
function App() {
  const n = 15;
  const [name] = useState("Patrick");

  const redTitle = true;

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", border: "2px solid red" }}>Esse elemento foi estilizado de forma inline</p>
      <p style={{ color: "magenta", padding: "25px", border: "2px solid red" }}>Esse elemento foi estilizado de forma inline</p>
      {/* Inline Style dinâmico */}
      <h2 style={n < 5 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS Dinâmico</h2>
      <h2 style={n > 10 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS Dinâmico</h2>
      <h2 style={
        name === "Patrick" ? { color: "green", backgroundColor: "black" } : null}
      >Nome é: {name}, esperamos pelo Patrick! </h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título terá classe dinâmica</h2>
      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
