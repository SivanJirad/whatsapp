import { Link } from 'react-router-dom'
import Users from '../Users/Users';
import Submit from './Submit';

function Signin() {

        const users = [{ userName: 'SivanJhirad', password: 'sivan1234'},
        { userName: 'OfriZangi', password: 'ofri1234' }]

    
    const submit = function () {
        var userName = document.getElementById('userName').value;

        var password = document.getElementById('password').value;
        var findser = false;

        for (let i = 0; i < users.length; i++) {
            if (users[i].userName === userName) {
                if (users[i].password === password) {

                    <Link to='/chats'>Register</Link>
                    findser = true;
                }
                else {
                    alert('password is error')
                    findser = true;
                }
            }
        }
        if (findser == false) {
                    alert('user Name is error')
        }


    }
            
    

    return(
        <div className='center'>
            <div className="form-floating">
                <input type="text" className="form-control" id="userName" name="userName" placeholder="User Name"></input>
                <label htmlFor='userName'>User Name</label>
            </div>

            <div className="form-floating">
                <input type="password" className="form-control" id="password" nume="password" placeholder="Password"></input>
                <label htmlFor="password">Password</label>
            </div>

            <bottun type="button" className="btn btn-primary" onClick={submit}> Submit</bottun>

            <Link to='/register'>Register</Link>



        </div>
    );
}
export default Signin;