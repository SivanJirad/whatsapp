import { Redirect, Link, useNavigate } from 'react-router-dom'
import {React , useEffect , useState} from 'react';



function Signin() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    // const check = function(name, pass){
    //     for(int i=0; )
    //     if(name === userName && pass === password)
    //         navigate('/chats')
    // }

    const users = [ {name: "Zan" ,nickName:"Ofri" , password: "ofri4516"},
        {name: "Ofri" ,nickName:"Ofri" , password: "ofri4516"}]
    
    const navigate = useNavigate();
    const goToLoginPage = () =>{
        let transfer = false 
        for(let i=0;i<users.length;i++){
            if(users[i].name == userName && users[i].password == password){
                navigate('/chats') 
                transfer = true
            }
        }
        if(!transfer)
            alert('user or password are incorrect')
        
    }
    //
//user.name === userName && user.password === password ? navigate('/chats') : alert('y')

  //  useEffect(navigate("chats"), [onclick]);



    // const routeChange = ()=> {
        
    // }

    const checkIfUserExits = function(){
       
        //navigate("chats");
        
        alert("password or usernane ar incorrect");
    }

    //document.getElementById("btn").addEventListener("click", checkIfUserExits());




    return (

    <div className="row">                

        <div className="col order-1">
            <div className="form-floating">

            <form>

            <div className="form-floating">
                <input type="text" className="form-control" id="lname" name="lname" placeholder="User Name" onChange={event => setUserName(event.target.value)}></input>
                <label htmlFor='lname'>User Name</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="pass" name="pass" placeholder="Password" onChange={event => setPassword(event.target.value)}></input>
                <label htmlFor='lname'>Password</label>
            </div>

            <bottun type="submit" to="/chats" id="btn" className="btn btn-primary" onClick={goToLoginPage} > Submit</bottun>
            </form>
            <Link to='/register'>Register</Link>
            </div>
        </div>
        </div>
    );
}
export default Signin;