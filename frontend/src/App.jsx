import React from 'react'
import LoginPage from './Pages/LoginPage';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './Pages/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App