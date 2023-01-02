import { useState } from 'react'

const HookUseState = () => {
    // 1 - useState
    let userName = "João";

    const [name, setName] = useState("Patrick")
    const changeNames = () => {
        userName = "João Silva"
        setName("Patrick Lima")
        console.log("userName", userName);
        console.log("setName", name);
    }
    return (
        <div>
            {/* 1 - useState */}
            <h2>useState</h2>
            <p>Variável: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar Nomes</button>
            <hr />
        </div >
    )
}

export default HookUseState