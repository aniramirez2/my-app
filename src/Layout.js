import { NavLink, Outlet } from "react-router-dom"


export const Layout = () => {


    const style = ({isActive}) => ({color: isActive ? 'red' : 'blue'})
    

    return <main style={{backgroundColor: "pink"}}>
        <nav>
          <ul style={{display: "flex"}}>
            <li><NavLink to="/createUser">Crear usuários</NavLink></li>
            <li><NavLink to="/listUser">Lista de usuários</NavLink></li>
          </ul>
        </nav>
        <Outlet/>
    </main>
}