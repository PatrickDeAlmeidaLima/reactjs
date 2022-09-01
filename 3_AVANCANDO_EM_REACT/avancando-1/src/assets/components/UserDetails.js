import React from 'react'

const UserDetails = ({nome, idade, profissao}) => {
    return (
        <div>
            <h2>DETRAN</h2>
            <ul>
                <li>Nome: {nome}</li>
                <li>Idade: {idade}</li>
                <li>Profissão: {profissao}</li>
                {idade >= 18 ? (<p>Pode tirar carteira!</p>) : (<p>Não pode tirar carteira!</p>)}
            </ul>
          
        </div>
    )
}

export default UserDetails