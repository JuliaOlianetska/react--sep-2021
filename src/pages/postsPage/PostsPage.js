import {useEffect, useState} from "react";
import {Outlet, useSearchParams} from "react-router-dom";

import Post from "../../components/post/Post";
import '../../AppStyle.css';
import {postService} from "../../services/Services";

export default function PostsPage() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])


    return (
        <div className={'postsAll'}>
            <div className={'postsList'}>{posts.map(post => <Post key={post.id} post={post}/>)}</div>
            <div className={'postDetails'}><Outlet/></div>
        </div>
    );
}