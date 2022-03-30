import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <form action="/action_page.php">
       <label for="fname">User name:</label>
      <input type="text" id="fname" name="fname"></input> <br></br>
       <label for="lname">Password:</label> 
     <input type="text" id="lname" name="lname"></input> <br></br>
      <bottun type="button" className="btn btn-primary"> Submit</bottun>
</form>

    <a href='register.html'>Register</a>

    </div>
  );
}

export default App;
