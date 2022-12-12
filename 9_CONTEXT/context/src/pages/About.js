// import { useContext } from "react";
// import ChangeCounter from '../components/ChangeCounter'
// import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from "../hooks/UseCounterContext";
import { useTitleColorContext } from "../hooks/TitleColorContext";
const About = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  // 5 - contexto mais complexo
  const { color } = useTitleColorContext();
  return (
    <div>
      <h1 style={{color:color}}>About</h1>
      <p>Valor do contador:{counter}</p>
      {/* 3 - alterando valor context */ }
  {/* <ChangeCounter /> */ }
    </div >
  )
}

export default About