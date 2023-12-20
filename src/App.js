import React from "react";
import { Routes ,Route } from 'react-router-dom';
import './assets/typography.css';
import './assets/colors.css';
import SignUp from "./pages/singUp/SingUp";
import LogIn from "./pages/logIn/LogIn";
import Home from "./pages/home/Home";
import Account from "./pages/account/Account";
function App() {
  return (
      <div className="App" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#1D2225'
      }}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/account' element={<Account/>}/>
        </Routes>
    </div>
  );
}
export default App;