import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { users,contacts } from './Users';
import "./CSS/register.css";
import logo from './wenLogo.jpg' 
import SentToChat from './SentToChat';
import Chat from './chat/Chat';





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
            message.innerHTML = '<div id="notValid" >not valid</div>'
            return false;
        }
        else if (pass.match(/\d/g)?.length <= 2 || pass.match(/[a-zA-Z]/g)?.length <= 2) {
            message.innerHTML = '<div id="weak">weak</div>'
            return true;
        }
        else {
            message.innerHTML = '<div id="strong">strong</div>'
            return true;
        }
    }


    const shoot = function () {
        var checkPass = document.getElementById('checkPass').value;

        if (!checkPass2()) {
            alert('Password is not valid');
        }
        else if (password !== checkPass) {
            alert('Password is not matching');
        }
        else {
            users.push({ name: userName, nickName: nickName, image: image, password: password, contacts:contacts});
            navigate('/chats' ,{state: { name: userName, nickName: nickName, image: image, password: password, contacts:contacts}});


        }
    }

    return (
<div>

<img id="reg_logo" src={logo}></img>

       <div className='center_register shadow-lg p-3 mb-5 bg-white rounded'>

            <h1> Registration</h1>
            <br></br>
            <form method='post'>

                <div class="container">
                    <div class="row">
                        <div class="col-md-5 form-floating">
                            <input type="text" className="form-control form-control-register" id="username" name="username"
                                placeholder="User Name" onInput={chekUserName} onChange={event => setUserName(event.target.value)} ></input>
                            <label className='string' htmlFor="username">User Name</label>
                            <span id="userNameValid"></span> <br></br>
                        </div>
                        <div class="col-md-5 form-floating">
                            <input type="password" className="form-control form-control-register" id="Password" name="pass" placeholder="Password" onInput={checkPass2} onChange={event => setPassword(event.target.value)}>
                            </input>
                            <label htmlFor="Password">Password</label>
                            <span id="StrongPass"></span> <br></br>
                        </div>
                        <div class="col-md-2 form-floating icon">
                            <i className="bi-info-circle" data-bs-toggle="tooltip" data-bs-placement="right"
                                title="password must be at least 8 charecters,< you must have at least one number and letter"></i>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-md-5 form-floating">
                            <input type="text" className="form-control form-control-register " id="lname" name="lname" placeholder="Nick Name" onChange={event => setNickName(event.target.value)}></input>
                            <label htmlFor='lname'>Nick Name</label>
                        </div>
                        <div class="col-md-5 form-floating">
                            <input type="password" className="form-control form-control-register" id="checkPass" nume="pass" placeholder="Check Password"></input>
                            <label htmlFor="checkPass">Check Password</label>
                        </div>
                    </div>

                    <div class="row">


                        <div className="mb-3 col-md-6 offset-md-3">
                            {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                            <label></label>
                            <input type="file" className="form-control form-control-imag " id="image" name="image" accept="image/png, image/jpeg" onChange={event => setImage(event.target.value)}></input> <br></br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                            <bottun type="submit" id="btn" className="btn btn-primary" onClick={shoot} > Submit</bottun>
                            {/* <br  className="break_link"></br> */}
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div class="row">
                        <div class="link">
                        Already have an account?&nbsp;
                        <Link to='/'>Log in</Link>
                        </div>
                    </div>

                </div>

            </form>



        </div>
        </div>

    );
}

export default Register;