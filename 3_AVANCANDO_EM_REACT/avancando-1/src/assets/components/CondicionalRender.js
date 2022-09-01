import { useState } from "react"

const CondicionalRender = () => {

    const [x] = useState(false);

    const [name, setName] = useState("Patrick");

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Aqui é quando ele é verdadeiro!</p>}
        {!x && <p>Aqui é quando ele é falso!</p>}
        <h1>If ternario</h1>
       {name === "João"? (
        <p>Nome é João!</p>
       ):(
        <p>Nome não é João!</p>
       )}
       <button onClick={()=>setName("João")}>Clica aqui!</button>
    </div>
  );
};

export default CondicionalRender;