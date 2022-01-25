import {useEffect, useState} from "react";
import {userService} from "../../services/Services";
import User from "../../components/user/User";
import {Outlet} from "react-router-dom";

export default function UsersPage() {

  const [users, setUsers] = useState([]);
  useEffect(()=> {
    userService.getAll().then(value => setUsers([...value]))
  }, [])


  return (
    <div>
      <h4>Users:</h4>
      {
        users.map(user => <User key={user.id} user={user}/>)
      }
      <div><Outlet/></div>

    </div>
  );
}