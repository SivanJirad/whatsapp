
import './App.css';
import Register from './Register';
import Signin from './Signin';
import Chat from './Chat';

import {BrowserRouter, Routes, Route, Router, Link} from 'react-router-dom';



function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>}></Route>    
          <Route path="/register" element={<Register/>}></Route>
          <Route path='/chats' element={<Chat/>}></Route>
        </Routes>
        </BrowserRouter>  
      </div>
    );
}

export default App;


