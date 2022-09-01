import "./GameOver.css";

const GamOver = ({retry}) => {
    return (
        <div >
            <h1>GameOver</h1>
            <p>Clique no botão abaixo para resetar o jogo</p>
            <button onClick={retry}>Reiniciar Jogo</button>
        </div>
    )
}

export default GamOver