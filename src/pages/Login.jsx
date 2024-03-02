import '../styles/Login.css';
import { IoMdPersonAdd } from "react-icons/io";
import { FcTodoList } from "react-icons/fc";

import { useState} from 'react';
import { useNavigate } from 'react-router-dom';



function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const HandleLogin = () => {
    if(username === 'admin' && password === '1234'){
        navigate('/to-do')
    } else {alert('Invalid credentials')}
  }


    return (
        <div id='login'>
            <span className='icon'>
                <FcTodoList/>
            </span>
            <div >
                <h1 id='header1'>To Do List</h1>
            </div>
            <div className='input-container'>
                <div>
                  <input type='text' id='username' placeholder='Username' value={username} onChange={ (e)=> setUsername(e.target.value)} />
                </div>

                <br />
                <div>
                  <input type='password' id='password' placeholder='Password' value={password} onChange={ (e)=> setPassword(e.target.value)} />
                  <br />
                  <a id='forgotPassword' href='#'>Forgot Password?</a>
                </div>
                <button id='signIn' onClick={HandleLogin}>Sign In</button>
                
                
            </div>
            <div id='createAccount'>
                <p>Don't have an account? </p>
                <a id='create' href='#'>Create Account</a>
                <IoMdPersonAdd id='createAccountIcon'/>
            </div>
        </div>
    )
}

export default LoginPage
