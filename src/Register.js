import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { users, contacts } from './Users';
import "./CSS/register.css";
import logo from './wenLogo.jpg'
import Chat from './chat/Chat';
import "./CSS/project.css";



function Register() {

    const [userName, setUserName] = useState("");
    const [nickName, setNickName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const chekUserName = function () {
        let UserNameExsist = false
        var user = document.getElementById('username').value;

        var messageUser = document.getElementById('userNameValid');

        for (let i = 0; i < users.length; i++) {
            if (users[i].name === user) {
                return true;
            }
        }
        if (UserNameExsist || user === '') {
            messageUser.innerHTML = '<p>user is not valid</p>';
        }
        else {
            messageUser.innerHTML = '';
        }
    }

    const checkPass2 = function () {
        var pass = document.getElementById('Password').value
        var message = document.getElementById('StrongPass')
        if (pass.length < 2 || !(/\d/.test(pass)) || !(/[a-zA-Z]/.test(pass))) {
            message.innerHTML = '<span id="notValid" >not valid</span>'
            return false;
        }
        else if (pass.match(/\d/g)?.length <= 2 || pass.match(/[a-zA-Z]/g)?.length <= 2) {
            message.innerHTML = '<span id="weak">weak</span>'
            return true;
        }
        else {
            message.innerHTML = '<span id="strong">strong</span>'
            return true;
        }
    }


    const shoot = function (event) {
        event.preventDefault();
        var checkPass = document.getElementById('checkPass').value;

        if (!checkPass2()) {
            alert('Password is not valid');
        }
        else if (password !== checkPass) {
            alert('Password is not matching');
        }
        else {
            users.push({ name: userName, nickName: nickName, image: image, password: password, contacts: contacts });
            navigate('/chats', { state: { name: userName, nickName: nickName, image: image, password: password, contacts: contacts } });
        }
    }

    return (
        <div>

            <img id="logo" src={logo}></img>
            <div className='center shadow-lg p-3 mb-5 bg-white rounded'>

                <h1> Registration</h1>
                <form method='post'>

                    <table className="table table-borderless">

                        <tbody>
                            <tr>
                                <td>
                                    <div className="form-floating form-floating-register">
                                        <input type="text" className="form-control form-control-register" id="username" name="username"
                                            placeholder="User Name" onInput={chekUserName} onChange={event => setUserName(event.target.value)} ></input>
                                        <label className='string' htmlFor="username"><i className="bi bi-person-fill"></i>
                                            User Name</label>
                                        <span id="userNameValid"></span> <br></br>
                                    </div>
                                </td>
                                <td>             
                                    <div className="form-floating">
                                    <input type="password" className="form-control form-control-register" id="Password" name="pass" placeholder="Password" onInput={checkPass2} onChange={event => setPassword(event.target.value)}></input>
                                    <label htmlFor="Password"><i className="bi bi-lock-fill"></i>Password</label>
                                        <i className="bi-info-circle" data-bs-toggle="tooltip" data-bs-placement="right"
                                            title="password must be at least 8 charecters,< you must have at least one number and letter"></i>

                                    <span id="StrongPass"></span>

                                    </div></td>
                            </tr>
                            <tr>
                                <td><div className="form-floating">
                                    <input type="text" className="form-control form-control-register" id="NickName" name="username"
                                        placeholder="NickName" onInput={chekUserName} onChange={event => setUserName(event.target.value)} ></input>
                                    <label className='string' htmlFor="username"><i className="bi bi-person-fill"></i>
                                    Nick Name</label>
                                    <span id="userNameValid"></span>
                                </div></td>
                                <td>    <div className="form-floating">
                                    <input type="password" className="form-control form-control-register" id="checkPass" nume="pass" placeholder="checkPass"></input>
                                    <label htmlFor="checkPass"><i className="bi bi-lock-fill"></i>
                                        Confirm Password</label>
                                </div></td>
                            </tr>
                            
                     

                        </tbody>
                    </table>
                    <input type="file" className="form-control form-control-imag " id="image" name="image" accept="image/png, image/jpeg" onChange={event => setImage(event.target.value)}></input>

                    <button type="submit" id="btn" className="btn btn_start btn-primary" onClick={shoot} > Submit</button>
                    <div className="link">
                        Already have an account?&nbsp;
                        <Link to='/'>Log in</Link>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Register;