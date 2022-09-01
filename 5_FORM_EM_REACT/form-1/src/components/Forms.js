import styles from './Form.modules.css'
import { useState } from 'react';
const Forms = ({ user }) => {
  // 6-Controled input
  // 3-Gerenciamento de Dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState(user ? user.bio : '');
  const handleName = (e) => {
    setName(e.target.value);

  }
  const [role, setRole] = useState(user ? user.role : "");
  // console.log(name);
  // console.log(email);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário!");
    console.log(name, email, bio, role);
    // 7 - Limpar formulário
    setName('');
    setEmail('');
    setBio('');
  }

  return (
    // 5-Envio de form
    <div>
      {/* 1-Criação de forms */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Write your name"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2-Label envolvendo input */}
        <label>
          <span>E-mail:</span>
          {/* Simplificação de manipulação de state */}
          <input
            type="email"
            placeholder="Write your e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8 - Text área */}
        <label>
          <span>Biography</span>
          <textarea name="bio"
            placeholder='User Description'
            onChange={(e) => setBio(e.target.value)}
            value={bio}>
          </textarea>
        </label>
        {/* 9 - Select */}
        <label >
          <span>
            Function on the sistem
          </span>
          <select name="role" id="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="user">User</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Send" />
      </form>
    </div >
  )
}

export default Forms