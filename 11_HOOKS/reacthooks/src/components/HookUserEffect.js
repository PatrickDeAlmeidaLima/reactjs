import { useEffect, useState } from 'react'

const HookUserEffect = () => {
    // 1 - useEffect, sem dependência
    useEffect(() => {
        console.log("Estou sendo executado!");
    })
    const [number, setNumber] = useState(1);

    const changeNumber = () => {
        setNumber(number + 1);
    };

    // 2 - array de dependência . vazio
    useEffect(() => {

        console.log("Serei executado apenas uma vez!")

    }, [])
    return (
        <div>
            <h2>useEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeNumber}>Executar</button>
        </div>
    )
}

export default HookUserEffect