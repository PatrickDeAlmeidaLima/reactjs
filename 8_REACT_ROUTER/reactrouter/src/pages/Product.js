import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    const { id } = useParams();

    // 5 - carregamento dado individual
    const url = "http://localhost:3000/products/" + id
    const { data: product, loading, error } = useFetch(url)
    // console.log(product);
    return <>
        <p>ID do Produto: {id}</p>
        {error && <p>Ocorreu um error</p>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div>
                <h1>{product.name}</h1>
                <p>R$: {product.price}</p>

            </div>
        )}

    </>

}

export default Product