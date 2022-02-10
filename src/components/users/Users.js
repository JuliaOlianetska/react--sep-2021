import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import User from "../user/User";
import "../../App.css";
import {getAllUsers} from "../../store/UserSlice";

export default function Users() {

  const {users, status, error} = useSelector(state => state['userReducer'])
const dispatch = useDispatch();

    useEffect(()=> {
    dispatch(getAllUsers())
  }, [])

  return (
    <div>
      {users.map(user=> <User key={user.id} user={user}/>)}
      <div className={'userLinks'}>
        <Link to={'/posts'}>Posts</Link>
        <Link to={'/comments'}>Comments</Link>
      </div>
    </div>
  );
}