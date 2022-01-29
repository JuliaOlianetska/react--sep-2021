import {Link} from "react-router-dom";

import "../../App.css";


export default function User({user}) {
  return (
    <div className={'oneUser'}>
        <Link to={user.id.toString()} state={user}>
            <h4>User id: {user.id}     User name: {user.name}</h4>
        </Link>
        <Link to={user.id.toString() + '/albums'}>
            <button>Albums</button>
        </Link>

    </div>
  );
}