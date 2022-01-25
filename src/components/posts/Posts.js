import {useEffect, useState} from "react";
import {userService} from "../../services/Services";
import {useParams} from "react-router-dom";
import Post from "../post/Post";

export default function Posts() {
    const {id} = useParams();
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        userService.getPosts(id).then(value => setPosts([...value]))
    },[id])

  return (
    <div>

        <div>{
            (posts.map(post=> <Post key={post.id} post={post}/>))
        }</div>

    </div>
  );
}