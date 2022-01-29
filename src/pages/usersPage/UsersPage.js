import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {userService} from "../../services/Services";
import User from "../../components/user/User";
import "../../App.css";

export default function UsersPage() {


  const [users, setUsers] = useState([]);
  useEffect(()=> {
    userService.getAll().then(users=>setUsers([...users]))
  },[])

  return (
    <div className={'usersAll'}>
      <div>{users.map(user => <User key={user.id} user={user}/>)}</div>
<div><Outlet/></div>

    </div>
  );
}