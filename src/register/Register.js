import React from 'react';
import "./Register.css";
import Users from '../Users/Users';


const users = [{ userName: 'SivanJhirad', password: 'sivan1234'},
{ userName: 'OfriZangi', password: 'ofri1234' }]

function Register() {
    var valid = false;

    
const chekUserName = function() {
    let UserNameExsist = false
    var user = document.getElementById('username').value;

    var messageUser = document.getElementById('userNameValid');

    for (let i = 0; i < users.length; i++) {
        if (users[i].userName === user) {
            UserNameExsist = true;
        }}

    if (UserNameExsist || user == ''){
        messageUser.innerHTML = '<p>user is not valid</p>';
    }
    else {
        messageUser.innerHTML = '';

    }
}
    
    const checkPass2 = function () {
        var pass = document.getElementById('Password').value;
        var message = document.getElementById('StrongPass')
        if (pass.length < 8 || !(/\d/.test(pass)) || !(/[a-zA-Z]/.test(pass))) {
            message.innerHTML = '<p>not valid</p>'
            valid = false;
        }
        else if (pass.match(/\d/g)?.length <= 2 || pass.match(/[a-zA-Z]/g)?.length <= 2) {
            message.innerHTML = '<p>weak</p>'
            valid = true;
        }
        else {
            message.innerHTML = '<p>strong</p>'
            valid = true;
        }
    }

    const shoot = function () {
        var pass = document.getElementById('Password').value;
        console.log(pass)
        var checkPass = document.getElementById('checkPass').value;
        console.log(checkPass)

        if (!valid) {
            alert('Password is not valid');
        }
        else if (pass !== checkPass) {
            alert('Password is not matching');
        }
        else {
            var user = document.getElementById('username').value;
            users.push({userName: user, password:pass});
    }
}

    return (
        <div className='center'>
        
            <div className="form-floating">
                <input type="text" className="form-control" id="username" name="username" placeholder="User Name" onInput={chekUserName}></input>
                <label htmlFor="username">User Name</label>
            </div>
            <span id="userNameValid"></span> <br></br>

            <div className="form-floating">
                <input type="text" className="form-control" id="lname" name="lname" placeholder="Nick Name"></input>
                <label htmlFor='lname'>Nick Name</label>
            </div>

        
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>

                <input type="file" className="form-control" id="fname" name="fname" accept="image/png, image/jpeg"></input> <br></br>
            </div>

            <div className="form-floating">
                <input type="password" className="form-control" id="Password" name="pass" placeholder="Password" onInput={checkPass2}>
    
                    
                     </input>
                     <i className="bi-info-circle" data-bs-toggle="tooltip" data-bs-placement="right"
                title="password must be at least 8 charecters, contain at least one number and  letter"></i>
                <label htmlFor="Password">Password</label>
        
          
</div>

            <span id="StrongPass"></span> <br></br>

            <div className="form-floating">
                <input type="password" className="form-control" id="checkPass" nume="pass" placeholder="Check Password"></input>
                <label htmlFor="checkPass">Check Password</label>
            </div>


            <button type="button" className="btn btn-primary" id="submitButten" onClick={shoot}>Submit</button>








      </div>    );
}

export default Register;