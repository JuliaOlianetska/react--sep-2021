import {useEffect, useState} from "react";
import {postService} from "../../services/Services";
import Post from "../../components/post/Post";

export default function PostsPage() {

  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    postService.getAll().then(posts=> setPosts([...posts]))
  },[])


  return (
    <div>
      {posts.map(post=> <Post key={post.id} post={post}/>)}

    </div>
  );
}