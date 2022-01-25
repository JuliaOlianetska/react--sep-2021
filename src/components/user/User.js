import {Link} from "react-router-dom";

export default function User({user}) {
  return (
    <div>
        <Link to={user.id.toString()} state={user}><h6>{user.id}) {user.name}</h6></Link>

    </div>
  );
}