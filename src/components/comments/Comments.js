import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllComments} from "../../store/CommentSlice";
import Comment from "../comment/Comment";

export default function Comments() {

  const {comments, status, error} = useSelector(state => state['commentReducer'])
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getAllComments())
  }, [])
  return (
    <div>
      {comments.map(comment=> <Comment key={comment.id} comment={comment}/>)}

    </div>
  );
}