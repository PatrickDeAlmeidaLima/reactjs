import { useEffect, useState, useRef } from 'react'

const HookUseRef = () => {
    // 1 - useRef
    const numberRef = useRef(0);
    const [counter, setCounter] = useState(0);
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1;
    })

    return (
        <div>
            <h2>UseRef</h2>
            <hr />
            <p>O component renderizou: {numberRef.current} vezes.</p>
            <p>Counter : 1 {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Contador A</button>
            <p>Counter : 2 {counterB}</p>
            <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
        </div>
    )
}

export default HookUseRef