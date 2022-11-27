import styles from "./Post.module.css";

//Hooks
import { useParams } from 'react-router-dom'
import { useFetchPost } from "../../hooks/useFetchPost";

import React from 'react'

const Post = () => {
    const { id } = useParams();
    const { document: post, loading } = useFetchPost("posts", id)

    return (
        <div>
            {loading && <p>Carregando post...</p>}
            {post && (
                <>
                    <h1>{post.title}</h1>
                </>
            )}
        </div>
    )
}

export default Post