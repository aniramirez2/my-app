
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { CreateUser } from './pages/CreateUser';
import { ListUser } from './pages/ListUser';
import { UpdateUser } from './pages/UpdateUser';
import { ContextCarritoProvider } from './contexts/ContextCarrito';



function App() {


  return (
    <>
      <Routes>
          <Route element={<ContextCarritoProvider><Layout /></ContextCarritoProvider>}>
            <Route path='listUser' element={<ListUser/>}></Route>
            <Route path='createUser' Component={CreateUser}></Route>
          </Route>
          <Route path='updateUser' >
            <Route path=':id' Component={UpdateUser}></Route>
          </Route>
          <Route path="/" element={<Navigate to="/createUser" />} />
          
      </Routes>
    </>
  );
}

export default App;
