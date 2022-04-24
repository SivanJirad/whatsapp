import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { users, contacts } from '../Users';
import "./register.css";
import logo from '../wenLogo.jpg'
import "../project.css";
import avatar from './avatar.png' 


function Register() {

    const [userName, setUserName] = useState("");
    const [nickName, setNickName] = useState("");
    const [image, setImage] = useState(avatar);
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    console.log()
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



    const UserNameExist = function(){
        for (let i = 0; i < users.length; i++) {
            if (users[i].userName === userName) {
                return true;
            }
        }
        return false;
    }


    const checkIfValidAndSubmit = function (event) {
        event.preventDefault();
        var checkPass = document.getElementById('checkPass').value;

        if (!checkPass2()) {
            alert('Password is not valid');
        }
        else if (password !== checkPass) {
            alert('Password is not matching');
        }
        else if(UserNameExist() || userName === ''){
            alert('This user name already exist, chose a different one');
        }
        else {
            const arr = []
            contacts.map((item)=> arr.push({userName:item.userName, nickName:item.nickName , image:item.image, messages:item.messages}))
            if (nickName === '')
                users.push({ userName: userName, nickName: userName, image: image, password: password, contacts: arr });
            else
                users.push({ userName: userName, nickName: nickName, image: image, password: password, contacts: arr });
            navigate('/chats',  { state:{index:users.length - 1}});
        }
    }


    const uploadImage = (event) => {
            let value = URL.createObjectURL(event.target.files[0]);
            setImage(value);
        };



    return (
        <div>
            <img id="logoR" src={logo}></img>
            <div className='centerR shadow-lg p-3 mb-5 bg-white rounded'>

                <h1> Registration</h1>
                <form method='post'>

                    <table className="table table-borderless">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="form-floating form-floating-register">
                                        <input type="text" className="form-control form-control-register" id="username" name="username"
                                            placeholder="User Name" onChange={event => setUserName(event.target.value)} ></input>
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
                                            title="password must be at least 8 charecters, you must have at least one number and letter"></i>

                                        <span id="StrongPass"></span>

                                    </div></td>
                            </tr>
                            <tr>
                                <td><div className="form-floating">
                                    <input type="text" className="form-control form-control-register" id="NickName" name="username"
                                        placeholder="NickName"  onChange={event => setNickName(event.target.value)} ></input>
                                    <label className='string' htmlFor="username"><i className="bi bi-person-fill"></i> Nick Name</label>
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
                    <input type="file" className="form-control form-control-imag " id="image" name="image" accept="image/png, image/jpeg" onChange={uploadImage}></input>

                    <button type="submit" id="btn" className="btn btn_start btn-primary" onClick={checkIfValidAndSubmit} > Submit</button>
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
