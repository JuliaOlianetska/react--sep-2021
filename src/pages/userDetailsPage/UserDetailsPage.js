import {useEffect, useState} from "react";
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../services/Services";
import PostsOfUserPage from "../postsOfUserName/PostsOfUserPage";

export default function UserDetailsPage() {
    const {id} = useParams();
    const {state} = useLocation();


    const [user, setUser] = useState(null);

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }
        userService.getById(id).then(user => setUser({...user}))
    }, [id])


    return (
        <div>
            {user && (<div>
                <div>User id: {user.id}</div>
                <div>User name: {user.name}</div>
                <div>Username: {user.username}</div>
                <div>User email: {user.email}</div>
                <div>User address: {user.address.city}, {user.address.street}, {user.address.suite}</div>
            </div>)}
            <Link to={'posts'}>
                <button>Posts</button>
            </Link>

            <div><Outlet/></div>
        </div>
    );
}