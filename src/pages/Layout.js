import { NavLink, Outlet } from "react-router-dom"


export const Layout = () => {


    const style = ({isActive}) => ({color: isActive ? 'red' : 'blue'})
    

    return <main style={{backgroundColor: "pink"}}>
        <nav>
          <ul>
            <li><NavLink to="/products">Pagina 1 - Productos</NavLink></li>
            <li><NavLink to="/page2">Pagina 2</NavLink></li>
            <li><NavLink to="/page3">Pagina 3</NavLink></li>
            <li><NavLink to="/formulario">Form</NavLink></li>
          </ul>
        </nav>
        <Outlet/>
    </main>
}