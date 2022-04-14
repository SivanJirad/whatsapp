import { Redirect, Link, useNavigate } from 'react-router-dom'
import { React, useEffect, useState } from 'react';
import { contacts, users } from './Users';
import logo from './wenLogo.jpg'
import './CSS/sign.css'
import './CSS/project.css'

function Signin() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    


    const goToChatPage = (event) => {
        // console.log(users)
        // event.preventDefault();
        let transfer = false;
        for (let i = 0; i < users.length; i++) {
            if (users[i].userName === userName && users[i].password === password) {
                navigate('/chats', { state: i });
                transfer = true
            }
        }
        if (!transfer)
            alert('user name or password are incorrect')
    }


    return (
        <div>
            <img id="logo" src={logo}></img>
            <div id="sign" className='center shadow-lg p-3 mb-5 bg-white rounded'>

                    <h1> Sign in</h1>
                    <form method="post">
                        <div className="form-floating sign">
                            <input type="text" className="form-control" id="lname" name="lname" placeholder="User Name"
                             onChange={event => setUserName(event.target.value)}></input>
                            <label htmlFor='lname'><i className="bi bi-person-fill"></i> User Name</label>
                        </div>
                        <br></br>
                        <div className="form-floating sign">
                            <input type="password" className="form-control" id="pass" name="pass" placeholder="Password"
                             onChange={event => setPassword(event.target.value)}></input>
                            <label htmlFor='lname'><i className="bi bi-lock-fill"></i>Password</label>
                        </div>
            
                        <button type="submit" id="btn" className="btn btn_start btn-primary" onClick={goToChatPage} > Login</button>

                        <div className="link">
                            Don't have an account? Click here to&nbsp;
                            <Link to='/register'>register</Link>
                        </div>
                    </form>
                </div>
                
        </div>

    );
}
export default Signin;