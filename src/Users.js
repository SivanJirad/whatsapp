import { Link } from "react-router-dom";

// we can't change the array users points on by we can change the elements in the array
export const users = [];

function AddUser(props){
    users.push({name : props.name, nickName : props.nickName, image : props.image,  password : props.password })
}

export default AddUser;