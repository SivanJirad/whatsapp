import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { users } from './Users';
import "./CSS/register.css";



function Register() {

    const [userName, setUserName] = useState("");
    const [nickName, setNickName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    
    const chekUserName = function() {
        let UserNameExsist = false
        var user = document.getElementById('username').value;

        var messageUser = document.getElementById('userNameValid');

        for (let i = 0; i < users.length; i++) {
            if (users[i].name === user) {
                return true;
            }}

        if (UserNameExsist || user === ''){
            messageUser.innerHTML = '<p>user is not valid</p>';
        }
        else {
            messageUser.innerHTML = '';

        }
    }
    
    const checkPass2 = function () {
        var pass = document.getElementById('Password').value
        var message = document.getElementById('StrongPass')
        if (pass.length < 8 || !(/\d/.test(pass)) || !(/[a-zA-Z]/.test(pass))) {
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
        else{
            users.push({name : userName, nickName : nickName, image : image,  password : password })
            navigate('/chats')
            }
        }
    
/*
    const alertPass =function(message){
        var pass = document.getElementById('alertMessage');
        pass.innerHTML = '<span className="alert alert-primary" role="alert">' + message + '</span>'
    }

    const shoutDownAlert= function(){
        var pass = document.getElementById('alertMessage');
        pass.innerHTML = ''
    }

    //סימן הקריאה - לא הצלחתי עדיין לטפל בו 
    <i class="bi bi-info-circle"  onMouseOver={alertPass('password must be at least 8 charecters, contain at least one number and  letter')} onMouseOut={shoutDownAlert}></i>

*/
return (
    <div className='center shadow-lg p-3 mb-5 bg-white rounded'>

        <h1> Registration:</h1>
        <br></br>
        <form method='post'>

        <div className="form-floating">
            <input type="text" className="form-control" id="username" name="username"  placeholder="User Name" onInput={chekUserName} onChange={event => setUserName(event.target.value) } ></input>
            <label htmlFor="username">User Name</label>
        </div>
        <span id="userNameValid"></span> <br></br>

        <div className="form-floating">
            <input type="text" className="form-control" id="lname" name="lname" placeholder="Nick Name" onChange={event => setNickName(event.target.value)}></input>
            <label htmlFor='lname'>Nick Name</label>
        </div>

    
        <div className="mb-3">
            {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
            <label></label>
            <input type="file" className="form-control" id="fname" name="fname" accept="image/png, image/jpeg" onChange={event => setImage(event.target.value)}></input> <br></br>
        </div>

        <div className="form-floating">
            <input type="password" className="form-control" id="Password" name="pass" placeholder="Password" onInput={checkPass2} onChange={event => setPassword(event.target.value)}>    
            </input>
            <i className="bi-info-circle" data-bs-toggle="tooltip" data-bs-placement="right"
            title="password must be at least 8 charecters, you must have at least one number and letter"></i>
            <label htmlFor="Password">Password</label>
            <span id="StrongPass"></span> <br></br>

        </div>


        <div className="form-floating">
            <input type="password" className="form-control" id="checkPass" nume="pass" placeholder="Check Password"></input>
            <label htmlFor="checkPass">Check Password</label>
        </div>

        <br></br>
        <button type="submit" className="btn btn-secondary" id="submitButten" onClick={shoot}>Submit</button>

        <Link to='/'>Sign in</Link>
        </form>

  </div>    );
}

export default Register;