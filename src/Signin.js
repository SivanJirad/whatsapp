import { Redirect, Link, useNavigate } from 'react-router-dom'
import {React , useEffect , useState} from 'react';
import { users } from './Users';


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

            <bottun type="submit" id="btn" className="btn btn-primary" onClick={goToChatPage} > Sign in</bottun>
            </form>
            <Link to='/register'>Register</Link>
            </div>
        </div>
        </div>
    );
}
export default Signin;