import { Formulario } from "../components/common/Formulario"
import { post } from "../services/usuariosService";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { reducer } from "../reducers/reducer";

export const CreateUser = () => {
    const [user, dispatch] = useReducer(reducer, []);

    const navigateTo = useNavigate();

    const addUser = (user) => {
        dispatch({ type: "ADD_USER", payload: user });
      };

    const recieveCreateUser = async (newUser) => {
        console.log("new user", newUser)
        addUser(newUser);
        console.log("usuario agregado", user);
        await post('/users', newUser);
        alert('Usuário creado con éxito');
        navigateTo('/listUser');
    }

    return <>
        <h1>Este es la página create user</h1>
        <Formulario handleUser={recieveCreateUser}></Formulario>
    </>
}