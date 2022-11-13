import styles from './CreatePost.modules.css'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContent';


const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
  }



  return (
    <div>
      <h2>Criar Post</h2>
      <p>Escreva sobre o que deseja e compartilhe seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label >
          <span>Título:</span>
          <input
            type="text"
            name='title'
            required
            placeholder='Insira o título do post...'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label >
          <span>URL da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder='Insira uma imagem que representa seu post...'
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label >
          <span>Conteúdo</span>
          <textarea
            name="body"
            required
            placeholder="Insira conteúdo do post..."
          >

          </textarea>
        </label>
      </form>
    </div>
  )
}

export default CreatePost