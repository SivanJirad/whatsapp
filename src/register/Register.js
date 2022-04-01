import React from 'react';

function Register() {
    var valid = false;

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
        <>
            <div className="container">
                <div className="row">
                    
                <div className="col">
                    </div>
                    <div className="col order-5">
                    </div>
                    
                    <div className="col order-1">
                    <div className="form-floating">
                <input type="text" className="form-control" id="username" name="username" placeholder="User Name"></input>
                <label htmlFor="username">User Name</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="lname" name="lname" placeholder="Nick Name"></input>
                <label htmlFor='lname'>Nick Name</label>
            </div>

            <input type="file" className="form-control" id="fname" name="fname" accept="image/png, image/jpeg"></input> <br></br>

            <div className="form-floating">
                <input type="password" className="form-control" id="Password" name="pass" placeholder="Password" onInput={checkPass2}></input>
                <label htmlFor="Password">Password</label>
            </div>


         
=


            <span id="alertMessage"></span>
            <span id="StrongPass"></span> <br></br>

            <div className="form-floating">
                <input type="password" className="form-control" id="checkPass" nume="pass" placeholder="Check Password"></input>
                <label htmlFor="checkPass">Check Password</label>
            </div>


            <button type="button" className="btn btn-primary" id="submitButten" onClick={shoot}>Submit</button> </div>
                </div>
            </div>


        </>
    );
}

export default Register;