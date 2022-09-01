import { useState } from 'react';
const ListRender = () => {
    const [list] = useState(["Patrick", "Yuri", "Mateus", "Luciano"]);
    const [users, setUsers] = useState([
        { id: 1, name: "Patrick", age: 29, profissão: "Programador" },
        { id: 2, name: "Yuri", age: 30, profissão: "Programador Pleno" },
        { id: 3, name: "Mateus", age: 31, profissão: "Programador Senior" },
        { id: 4, name: "Patrick", age: 29, profissão: "Programador" },
        { id: 5, name: "Yuri", age: 30, profissão: "Programador Pleno" },
        { id: 6, name: "Mateus", age: 31, profissão: "Programador Senior" },
    ]);
    const DeleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers)=>{
            
            return prevUsers.filter((user)=> randomNumber !== user.id)

        })
        console.log(setUsers);
    };
    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>
                        {item}
                    </li>
                ))}
            </ul>
            <ul>
                {users.map((user, i) => (
                    <li key={user.id}>
                        {user.name} - {user.age} - {user.profissão}
                    </li>
                )
                )}
            </ul>
            <ul>
                <button onClick={DeleteRandom}>
                    Deletar usuario de forma randômica
                </button>
            </ul>
        </div>
    )
}

export default ListRender;