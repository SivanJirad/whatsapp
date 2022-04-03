import { Redirect, Link, useNavigate } from 'react-router-dom'
import {React , useEffect , useState} from 'react';
import { users } from './Users';
import './CSS/register.css'
import logo from './wenLogo.jpg' 


function Signin() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    
    const navigate = useNavigate();

    const goToChatPage = () =>{
        let transfer = false; 
        for(let i=0;i<users.length;i++){
            if(users[i].name == userName && users[i].password == password){
                navigate('/chats') 
                transfer = true
            }
        }
        if(!transfer)
            alert('user or password are incorrect')
    }


    return (

     <div>

         <img id="logo" src={logo}></img>
  

    <div id="sign" className='center shadow-lg p-3 mb-5 bg-white rounded'>                

        <div className="col order-1">

            <h1> Sign in</h1>

            <form method="post">

            <div className="form-floating">
                <input type="text" className="form-control" id="lname" name="lname" placeholder="User Name" onChange={event => setUserName(event.target.value)}></input>
                <label htmlFor='lname'>User Name</label>
            </div>
            <br></br>
            <div className="form-floating">
                <input type="password" className="form-control" id="pass" name="pass" placeholder="Password" onChange={event => setPassword(event.target.value)}></input>
                <label htmlFor='lname'>Password</label>
            </div>
            <br className="break_bottun"></br>
            <bottun type="submit" id="btn" className="btn btn-primary" onClick={goToChatPage} > Login</bottun>



           <br  className="break_link"></br>

            <div className="link">
                Don't have an account? Click here to&nbsp;
            <Link to='/register'>register</Link>

            </div>
            <br></br>

            </form>
            </div>
        </div>
        </div> 
        
    );
}
export default Signin;