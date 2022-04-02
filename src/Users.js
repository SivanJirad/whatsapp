import { Link } from "react-router-dom";

// we can't chang the array users points on by we can change the elements in the array
export const users = [];

function AddUser(props){
    users.push({name : props.name, nickName : props.nickName, image : props.image,  password : props.password })
    
    // console.log(users(0).nickName);
}


// function CheckIfUserExits(props){
//     users.map((user) =>
//     user.name == props.name && user.password == props.password && 
    
    
        
    
// }


// only 1 default export
export default AddUser;