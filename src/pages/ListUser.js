import { useEffect, useState, useContext } from "react"
import { deletes, get } from "../services/usuariosService";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./ContextCarrito";

export const ListUser = () => {
    
    const { cartItems, addToCart } = useContext(CartContext);

    const navigate = useNavigate();
    const [users, handleUsers] = useState([]);

    const getUsers = async() => {
        const getusers = await get('users');
        handleUsers(getusers);
    }

    useEffect(() => {        
        addToCart({name: "papas", precio: "2500", cantidad: "3"})
    }, [])

    const handleDelete = async (id, name) => {
        await deletes(`users/${id}`);
        alert(`El usuario ${name} se ha eliminado`);
        getUsers();
    }

    const handleEdit = (user) => {
        navigate(`/updateUser/${user.id}`)
    }

    return <>
        <h1>Este es la página list user</h1>
        <ul>
        {
            cartItems.map(user => <li key={user.name}>{user.name} - {user.precio} - {user.cantidad} <button onClick={() => handleDelete(user.id, user.username)} >Eliminar</button> <button onClick={() => handleEdit(user)}>Editar</button> </li>)
        }
        </ul>
    </>
}