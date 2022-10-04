// import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
// import { CounterContext } from "../context/CounterContext";
// 4 - refatorando com hook
import { useCounterContext } from "../hooks/UseCounterContext";
// 5 -  context complexo
import { useTitleColorContext } from "../hooks/TitleColorContext";
const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  // 5 - contexto mais complexo
  const { color, dispatch } = useTitleColorContext();
  console.log(color);
  // 6 - alterando state complexo
  const setTitleColor = (color) => {
    dispatch({ type: color })
  }
  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador:{counter}</p>
      {/* 3 - alterando valor context */}
      <ChangeCounter />
      {/* 6 - alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home