import { useState } from 'react';
import './App.css';
import Img2 from "./assets/2.jpg"
import CarDetails from './assets/components/CarDetails';
import CondicionalRender from './assets/components/CondicionalRender';
import ListRender from './assets/components/ListRender';
import ManageData from './assets/components/ManageData';
import ShowUserName from './assets/components/ShowUserName';
import Fragment from './assets/components/Fragment';
import Container from './assets/components/Container';
import ExecuteFunction from './assets/components/ExecuteFunction';
import Message from './assets/components/Message';
import ChangeMessageState from './assets/components/ChangeMessageState';
import UserDetails from './assets/components/UserDetails';

function App() {
  const nome = "Patrick";
  const [userName] = useState("Jessica");
  const cars = [
    { id: 10, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 11, brand: "Kia", color: "Azul", newCar: false, km: 250505 },
    { id: 12, brand: "Renault", color: "Prata", newCar: true, km: 165106 },
  ];
  function showMenssage(){
    console.log("Evento componente pai");
  }
  const [message, setMessage] = useState("");
  const handleMessage = (msg) =>{
    setMessage(msg);
  };
  const cadastros = [
    {id: 21, nome: "Patrick", idade: 15, profissao:"Programador Jr."},
    {id: 22, nome: "Luciano", idade: 28, profissao:"Programador Pleno"},
    {id: 23, nome: "Mateus", idade: 38, profissao:"Programador Sênior"},
  ];
  return (
    <>
      <div className="App">
        <h1>Avançando em React JS</h1>

      </div>
      {/* Imagem em Public */}
      <div>
        <img className="center" src="/1.jpg" alt="Imagem numero 1" />
      </div>
      {/* Imagem em SRC */}
      <div>
        <img src={Img2} alt="Imagem numero 2" />
      </div>
      {/* Usando Hook */}
      <ManageData />
      {/* Renderização de listas */}
      <ListRender />
      {/* Renderização condicional */}
      <CondicionalRender />
      {/* Props */}
      <ShowUserName name={[nome, userName]} />
      {/* Destruturando props */}
      <CarDetails brand="BMW" km={100000} color="Azul" newCar={true} />
      {/* Reaproveitamento de props */}
      <CarDetails brand="Ford" km={0} color="Prata" newCar={false} />
      <CarDetails brand="Fiat" km={4500} color="Vermelho" newCar={true} />
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
      ))}
      {/* Fragment */}
      <Fragment propFragment="Teste" />
      {/* Children */}
      <Container myValue="Testing">
        <p>Esse é o conteúdo do Container</p>
      </Container>
      <Container myValue="Testing 2">
        <h5>Esse é o conteúdo do Container</h5>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMenssage} />
      {/* State lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/* Desafio 4 */}
      {cadastros.map((cadastro) => (
        <UserDetails key={cadastro.id} nome={cadastro.nome} idade={cadastro.idade} profissao={cadastro.profissao} />
      ))}
    </>
  );
}

export default App;
