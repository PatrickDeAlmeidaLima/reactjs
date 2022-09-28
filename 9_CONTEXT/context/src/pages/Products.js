import { useContext } from "react";
import ChangeCounter from '../components/ChangeCounter'
import { CounterContext } from "../context/CounterContext";

const Products = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
    <h1>Products</h1>
    <p>Valor do contador:{counter}</p>
    {/* 3 - alterando valor context */}
    {/* <ChangeCounter /> */}
  </div>
  )
}

export default Products