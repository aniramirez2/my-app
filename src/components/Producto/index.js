import { useParams } from "react-router-dom"


export const Producto = () => {
    const {id} = useParams();
    return <h1>Esta es la pagina de detalle del producto con id {id}</h1>
}