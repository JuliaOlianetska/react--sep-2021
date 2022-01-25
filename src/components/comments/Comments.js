import {useEffect, useState} from "react";
import {postService} from "../../services/Services";
import Comment from "../comment/Comment";
import {useParams} from "react-router-dom";

export default function Comments() {
const {id} = useParams();

    const [comments, setComments] = useState([]);
    useEffect(()=>{
        postService.getComments(id).then(value => setComments([...value]))
    },[])


  return (
    <div>
      {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
    </div>
  );
}