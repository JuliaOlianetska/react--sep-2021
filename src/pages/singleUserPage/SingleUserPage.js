import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../../services/Services";

export default function SingleUserPage() {
   const {id} = useParams();
   const {state} = useLocation();

    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);

    useEffect(()=> {
        if (state) {
            setUser(state)
            return
        }
        userService.getById(id).then(value => setUser({...value}))
    }, [id])

const getPostsOfUser = () => {
        userService.getPosts(id).then(value => setPosts([...value]))
}
    return (
    <div>
        {user && (<div>
            <div>User id: {user.id}</div>
            <div>User name: {user.name}</div>
            <div>Username: {user.username}</div>
            <div>User email: {user.email}</div>
            <div>User address: {user.address.city}, {user.address.street}, {user.address.suite}</div>
        </div>)}

        <div>
            <Link to={'posts'}>
                <button onClick={getPostsOfUser}>Posts</button>
            </Link>
        </div>
        <div><Outlet/></div>
    </div>
  );
}