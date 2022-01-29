import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {postService} from "../../services/Services";
import Comment from "../comment/Comment";
import "../../App.css";


export default function Comments() {
    const {id} = useParams();
    const [comments, setComments] = useState(null);
    useEffect(()=>{
        postService.getComments(id).then(comments=> setComments([...comments]))
    },[id])



  return (
    <div>
        {
        comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)
        }
    </div>
  );
}