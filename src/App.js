
import {  Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { CreateUser } from './pages/CreateUser';
import { ListUser } from './pages/ListUser';


function App() {
 
  return (    
    <Routes>      
      <Route element={<Layout/>}>
        <Route path='listUser' Component={ListUser}></Route>
        <Route path='createUser' Component={CreateUser}></Route>
        <Route path="/" element={<Navigate to="/createUser"/>} />
      </Route>
    </Routes>
  );
}

export default App;
