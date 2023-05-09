import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Page1 = ({prods}) => {
    return <>
        <h1>Pagina 1 - Productos</h1>
        <ul>
        {
            prods.map(item => <li><Link to={`/products/${item.id}`}>{item.id} - {item.nombre}</Link></li>)
        }
        </ul>
        <Outlet/>
    </>
}