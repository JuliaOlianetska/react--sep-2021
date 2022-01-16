import {useEffect, useState} from "react";

import '../../style.css'
import User from "../user/User";
import UserDetailedInfo from "../userDetailedInfo/UserDetailedInfo";
import {getUserById, getUserPosts, getUsers} from "../../services/services";
import Post from "../post/Post";

export default function Users() {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);


    useEffect(() => {
        getUsers().then(users => setUsers(users))
    }, [])

    const getUserId = (id) => {
        getUserById(id).then(user => setUser(user))
    }

    const getPosts = () => {
        getUserPosts(user.id).then(posts=>setPosts(posts));
    }

    return (
        <div>
            <div className={'allUsers'}>

                <div className={'userName'}>{
                    users.map(user => <User key={user.id} user={user} getUserId={getUserId}/>)
                }</div>

                {user && <UserDetailedInfo user={user} getPosts={getPosts}/>}


            </div>
            <div>
                {
                    posts && posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
        </div>
    );
}