import {Link} from 'react-router-dom'

function Signin(){
    return(
        <form action="/action_page.php">
        <label for="fname">User name:</label>
       <input type="text" id="fname" name="fname"></input> <br></br>
        <label for="lname">Password:</label> 
      <input type="text" id="lname" name="lname"></input> <br></br>
       <bottun type="button" className="btn btn-primary"> Submit</bottun>


       <Link to='/register'>Register</Link>  

        </form>



    );




}

export default Signin;