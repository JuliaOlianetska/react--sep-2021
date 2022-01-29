import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {userService} from "../../services/Services";
import PostsOfUser from "../../components/postsOfUser/PostsOfUser";

export default function PostsOfUserPage() {
const {id} = useParams();

  const [posts, setPosts] = useState([]);
useEffect(()=>{
  userService.getPosts(id).then(posts=> setPosts([...posts]))

},[])

  return (
    <div>
      {posts.map(post=><PostsOfUser key={post.id} post={post}/>)}
    </div>
  );
}