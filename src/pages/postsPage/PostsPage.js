import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {postService} from "../../services/Services";
import Post from "../../components/post/Post";
import PostDetailsPage from "../postDetailsPage/PostDetailsPage";

export default function PostsPage() {

  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    postService.getAll().then(posts=> setPosts([...posts]))
  },[])


  return (
    <div className={'postsAll'}>
      <div>{posts.map(post => <Post key={post.id} post={post}/>)}</div>
<div><Outlet/></div>

    </div>
  );
}