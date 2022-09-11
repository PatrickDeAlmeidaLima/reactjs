
import './App.css';
import { useState, useEffect } from "react";
// 4 - custom hook
import { useFetch } from './hooks/useFetch';
const url = "http://localhost:3000/products";
function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  // 4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // console.log(data);
  // 1 - resgatando dados
  // 4 - colocando custom hook
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);
  // 4 - colocando custom hook

  // 2 - adicionando produtos
  const handleSubmit = async (e) => {
    e.preventDefault()
    const products = {
      name,
      price,
    };
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(products),
    // });
    // // 3 - carregamento dinâmico
    // const addedProducts = await res.json()
    // setProducts((prevProducts) => [...prevProducts, addedProducts])

    // 5 - refatorando post
    httpConfig(products, "POST")
    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados, aguarde.</p>}
      {error && <p>{error}</p>}
      {!loading &&
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>{product.name} - R$:{product.price}</li>
          ))}
        </ul>}
      <div className="add-products">
        <form onSubmit={handleSubmit}>
          <label >
            Nome:
            <input type="text" value={name} name={name} required onChange={(e) => setName(e.target.value)} />
          </label>
          <label >
            Preço:
            <input type="number" value={price} name={price} required onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* 7 - state de loading no post */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;


//npm run server
// npm start