import { useState } from "react";
const ManageData = () => {
    let someData = 10;

    // console.log(number1);

    const [number1 , setNumber] = useState(15);

    return (
        <div>
            <div>
                <p>Valor = {someData}</p>
                <button onClick={() => someData => 15}>Mudar variável</button>
            </div>
            <div>
                <p>Valor : {number1}</p>
                <button onClick={()=>setNumber(30)}>Mudar valor do Number</button>
            </div>
        </div>
    )
}

export default ManageData