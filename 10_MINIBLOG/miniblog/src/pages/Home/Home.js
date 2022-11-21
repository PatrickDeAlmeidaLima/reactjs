// CSS
import styles from './Home.module.css';

// hooks
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useFetchDocument } from '../../hooks/useFetchDocument';

// components




const Home = () => {

  const [query, setQuery] = useState("");
  const { documentos: posts, loading } = useFetchDocument("posts");
  const handleSubmit = (e) => {
    e.preventDefault()
  };

  return (
    <div className={styles.home}>
      <h1>Veja nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input type="text" placeholder='Ou busque por tags...' onChange={(e) => setQuery(e.target.value)} />
        <button className='btn btn-dark'>Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
        {posts &&
          posts.map((posts) => (
            <h3>
              {posts.title}
            </h3>
          ))}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados Posts</p>
            <Link to="/posts/create" className='btn'>Criar primeiro post</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home