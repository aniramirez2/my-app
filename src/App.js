
import { Link, Route, Routes } from 'react-router-dom';
import { Page1 } from './pages/page1';
import { Page2 } from './pages/page2';
import { Page3 } from './pages/page3';
import { Layout } from './pages/Layout';
import { NotFound } from './components/NotFound';
import { Producto } from './components/Producto';
import { useEffect, useState } from 'react';
import { Formulario } from './components/Formulario';


function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos([{id:1, nombre: "papaya"}, {id:2, nombre: "mango"}]);
    console.log("productos", productos);
  }, [])
 
  return (    
    <Routes>      
      <Route element={<Layout/>}>
        <Route path='products' element={<Page1 prods={productos} />}>
          <Route path=':id' Component={Producto} />
        </Route>
        <Route index Component={Page3}></Route>
        <Route path='page2' Component={Page2}></Route>
        <Route path='page3' Component={Page3}></Route>
        <Route path='formulario' Component={Formulario}></Route>
        <Route path='*' Component={NotFound}></Route>
      </Route>
    </Routes>
  );
}

export default App;
