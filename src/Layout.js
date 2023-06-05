import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from './components/redux/slicers/slicer'

export const Layout = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()


    return <main style={{backgroundColor: "pink"}}>
        <nav>
          <ul style={{display: "flex"}}>
            <li><NavLink to="/createUser">Crear usuários</NavLink></li>
            <li><NavLink to="/listUser">Lista de usuários</NavLink></li>
          </ul>
        </nav>
        
        <div>
          <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <span>{count}</span>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
        </div>
        <Outlet/>
    </main>
}