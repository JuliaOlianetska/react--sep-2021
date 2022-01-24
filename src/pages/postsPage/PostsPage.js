import {useEffect, useState} from "react";

import Post from "../../components/post/Post";
import {getAll, postService} from "../../services/Services";
export default function PostsPage() {

  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    postService.getAll().then(value => setPosts([...value]))
  },[])


  return (
    <div>
      {posts.map(post => <Post key={post.id} post={post}/>)}

    </div>
  );
}