import styles from './CreatePost.module.css'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContent';
import { useInsertDocument } from '../../hooks/useInsertDocuments';


const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument();


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validar a url da imagem

    //criar o array de tags

    //checar todos os valores

    useInsertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createdBy: user.displayName
    })

    //redirect to home page

  }



  return (
    <div className={styles.create_post}>
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
            onChange={(e) => setBody(e.target.value)}
            value={body}
          >
          </textarea>
        </label>
        <label >
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder='Insira as tags separadas por vírgula...'
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        {!response.loading && <button className="btn">Cadastrar</button>}
        {response.loading && <button className="btn" disabled>Aguarde...</button>}
        {response.error && <p className="error">{response.error}</p>}
      </form>
    </div>
  )
}

export default CreatePost