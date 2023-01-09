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

    }, []);

    // 3 - item no array de deps.
    const [anotherNumber, setAnotherNumber] = useState(0)
    useEffect(() => {
        // sempre que tiver mudança no anotherNumber esse userEffect vai ser executado
        if (anotherNumber > 0) {
            console.log("Sou executado apenas quando anotherNumber for manipulado.")
        }
    }, [anotherNumber])

    // 4 - cleanup do userEffect
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         console.log("Hello world!");
    //     }, 2000);

    //     setAnotherNumber(anotherNumber + 1); // essa linha fica rodando infinitamente até mudar de página ou ser desabilitada
    //     return () => clearTimeout(timer);
    // }, [anotherNumber])

    return (
        <div>
            <h2>useEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeNumber}>Executar</button>
            <p>AnotherNumber: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar o anotherNumber e executar userEffect</button>
        </div>
    )
}

export default HookUserEffect