import { useState, useEffect, useMemo } from 'react'

const HookUseMemo = () => {
    const [number, setNumber] = useState(0);

    // const premiumNumbers = ['0', '100', '200'];
    // a situação de cima é errado poís se tiver muitos valores caso o input seja alterado precisa ser carregado todas as vezes.
    const premiumNumbers = useMemo(() => {
        return ['0', '100', '200']
    }, []);

    useEffect(() => {
        console.log("Premium numbers foi alterado!");
    }, [premiumNumbers])

    return (
        <div>
            <h2>HookUseMemo</h2>
            <input type="text" onChange={(e) => setNumber(e.target.value)} />
            {premiumNumbers.includes(number) ? <p>Acertou o número!</p> : <p>Não acertou o número!</p>}
        </div>
    )
}

export default HookUseMemo