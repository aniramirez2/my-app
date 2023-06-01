import { useEffect, useState, useContext } from "react"
import { deletes, get } from "../services/usuariosService";
import { useNavigate } from "react-router-dom";
import {CartContext} from '../contexts/ContextCarrito'

export const ListUser = () => {
    
    const { cartItems, addToCart } = useContext(CartContext);
     
    const navigate = useNavigate();

    const [users, handleUsers] = useState([]);

    const getUsers = async() => {
        const getusers = await get('users');
        handleUsers(getusers);
    }

    useEffect(() => {
        console.log('cartItems', cartItems);
    }, [cartItems])

    const handleDelete = async (id, name) => {
        await deletes(`users/${id}`);
        alert(`El usuario ${name} se ha eliminado`);
        getUsers();
    }

    const handleEdit = (user) => {
        navigate(`/updateUser/${user.id}`)
    }

    const handleCreate = () => {
        
        addToCart({name: "papas", precio: "2500", cantidad: "3"})
        console.log('cartItems', cartItems);
    }

    return <>
        <h1>Este es la página list user</h1>
        <button onClick={() => handleCreate()}>Agregar producto</button>
        <ul>
        {
            users.map(user => <li key={user.name}>{user.name} <button onClick={() => handleDelete(user.id, user.username)} >Eliminar</button> <button onClick={() => handleEdit(user)}>Editar</button> </li>)
        }
        </ul>
    </>
}