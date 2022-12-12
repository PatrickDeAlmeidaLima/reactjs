import logo from './logo.svg';
import './App.css';
import Forms from './components/Forms';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <Forms user={{
        name: "Patrick Lima",
        email: "patrick@gmail.com",
        bio: "I am programer",
        role: "admin"
      }} />
    </div>
  );
}

export default App;
