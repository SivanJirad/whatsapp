import {users} from './Users'


function Chat(){

    function Item(props) {
        return <li>I am a { props.name }</li>;
      }


    return(
        <div>
            {users.map((user) => <Item name={user.name} />)}
        </div>


    )



}

export default Chat;