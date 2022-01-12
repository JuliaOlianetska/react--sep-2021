import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts').
        then(value => value.json()).
        then(value => setPosts(value))
    }, [])


    return (
        <div>
            <h6>Posts:</h6>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
}