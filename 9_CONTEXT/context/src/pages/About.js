import { useContext } from "react";
import ChangeCounter from '../components/ChangeCounter'
import { CounterContext } from "../context/CounterContext";

const About = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>About</h1>
      <p>Valor do contador:{counter}</p>
      {/* 3 - alterando valor context */}
      {/* <ChangeCounter /> */}
    </div>
  )
}

export default About