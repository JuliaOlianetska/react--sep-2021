import {useEffect, useState} from "react";
import {Outlet, useSearchParams} from "react-router-dom";

import Post from "../../components/post/Post";
import {postService} from "../../services/Services";

export default function PostsPage() {

    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useSearchParams();
    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])


    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
            <div><Outlet/></div>
        </div>
    );
}