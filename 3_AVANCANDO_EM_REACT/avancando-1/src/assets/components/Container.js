import React from 'react'

const Container = ({ children, myValue }) => {
    return (
        <div>

            <h2>Esse é o Título do Container</h2>
            {children}
            <p>O meu valor é: {myValue}</p>
        </div>
    )
}

export default Container