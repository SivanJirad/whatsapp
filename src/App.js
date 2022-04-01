
import './App.css';
import Register from './register/Register';
import Signin from './sign/Signin';
import Chats from './chats/Chats';

import {BrowserRouter, Routes, Route, Router, Link} from 'react-router-dom';



function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>}></Route>    
          <Route path="/register" element={<Register/>}></Route>
          <Route path='/chats' element={<Chats/>}></Route>
        </Routes>
        </BrowserRouter>  
      </div>
    );
}

export default App;


