import { useEffect, useState } from "react";
import { Formulario } from "../components/common/Formulario"
import { useParams } from "react-router-dom";
import { getById } from "../services/usuariosService";

export const UpdateUser = () => {
    const[user, handleUser] = useState({});
    const {id} = useParams();

    const getUser = async () => {
        const response = await getById(`users/${id}`);
        handleUser(response);
        console.log("user from update user", user);
    }

    useEffect(() => {
        getUser();
    }, [])

    const handleNewUser = (newUser) => {
        console.log("usuario actualizado", newUser);
    }
    return <>
    
        <h1>Este es la página update user</h1>
        <Formulario user={user} handleUser={() => handleNewUser()} />
    </> 
}