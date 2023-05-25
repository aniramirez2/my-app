import { NavLink, Outlet } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "./pages/ContextCarrito";

export const Layout = () => {
    const { cartItems } = useContext(CartContext);

    return <main style={{backgroundColor: "pink"}}>
        <nav>
          <ul style={{display: "flex"}}>
            <li><NavLink to="/createUser">Crear usuários</NavLink></li>
            <li><NavLink to="/listUser">Lista de usuários</NavLink></li>
          </ul>
        </nav>
        <ul>
          {cartItems.map(item => 
            <li>{item.name} - Precio: {item.precio} - cantidad: {item.cantidad}</li>
          )}
        </ul>
        <Outlet/>
    </main>
}