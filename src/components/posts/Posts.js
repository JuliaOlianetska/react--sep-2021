import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getPosts} from "../../store/PostSlice";
import Post from "../post/Post";

export default function Posts() {

  const dispatch = useDispatch();
  const {posts} = useSelector(state => state['postReducer']);

  useEffect(()=> {
    dispatch(getPosts())
  },[])


  return (
    <div>
      {posts.map(post => <Post key={post.id} post={post}/>)}
    </div>
  );
}