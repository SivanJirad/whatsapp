



function Register(){
    var valid = false;

    const checkPass2 = function() {
        var pass = document.getElementById('Password').value;
        var message = document.getElementById('StrongPass')
        //var wrapper = document.createElement('p')
        if(pass.length < 8 || !(/\d/.test(pass)) || !(/[a-zA-Z]/.test(pass))){
            message.innerHTML = '<p>not valid</p>'
            valid = false;
        }
        else if(pass.match(/\d/g)?.length <=2 || pass.match(/[a-zA-Z]/g)?.length <=2){
                message.innerHTML = '<p>weak</p>'
                valid = true;
        }      
        else{
            message.innerHTML = '<p>strong</p>'   
            valid = true;
        }
    }

    const checkIfPasswordMatch = function() {
    var pass = document.getElementById('Password').value;
    var checkPass = document.getElementById('checkPass').value;
    if(!valid){
        alert('Password is not valid');
    }
    else if(pass !== checkPass){
        alert('Password is not matching');
    }
    }

    const alertPass =function(message){
        var pass = document.getElementById('alertMessage');
        pass.innerHTML = '<span class="alert alert-primary" role="alert">' + message + '</span>'
    }

    const shoutDownAlert= function(){
        var pass = document.getElementById('alertMessage');
        pass.innerHTML = ''
    }

    return (        
    <div>   
        
   
    <form action="/action_page.php">

        <div class="form-floating">
            <input type="text" className="form-control" id="username" name="username"  placeholder="User Name"></input>
            <label for="username">User Name</label>
        </div>

        <div class="form-floating">
            <input type="text" className="form-control" id="lname" name="lname"  placeholder="Nick Name"></input>
            <label for="lname">Nick Name</label>
        </div>


        <input type="file" className="form-control" id="fname" name="fname" accept="image/png, image/jpeg"></input> <br></br>


        <div class="form-floating">
        <input type="password" className="form-control" id="pass" name="pass"  placeholder="Password" oninput="checkPass2"></input>
        <label for="pass">Password</label>
        </div>
        <i class="bi bi-info-circle" onmouseover="alertPass('password must be at least 8 charecters, contain at least one number and  letter')" onmouseout="shoutDownAlert"></i>
        <span id="alertMessage"></span>
        <span id="StrongPass"></span> <br></br>

        <div class="form-floating">
        <input type="password" class="form-control" id="checkPass" nume="pass" placeholder="Check Password"></input>
        <label for="checkPass">Check Password</label>
        </div>


        <bottun type="button" class="btn btn-primary" id="submitButten" onclick="checkIfPasswordMatch"> Submit</bottun>
        
        
    </form>
        

             
     </div>   


    );
}

export default Register;