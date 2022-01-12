import './Users.css';
import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users() {

    const [users, setUsers] = useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users').
        then(value => value.json()).
        then(value => setUsers(value))
    },[])



    return (
        <div  className={'usersinfo'}>
            {
                users.map(user=><User key={user.id} user={user}/>)
            }
        </div>
    );
}

