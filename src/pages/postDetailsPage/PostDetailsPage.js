import {useEffect, useState} from "react";
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../services/Services";
import Comments from "../../components/comments/Comments";

export default function PostDetailsPage() {
    const {id} = useParams();
    const {state} = useLocation();

    const [post, setPost] = useState({});
    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postService.getById(id).then(post => setPost({...post}))
    }, [id])


    return (
        <div>
            {post && <div><p>Post id:{post.id}</p>
                <h4>Post title:{post.title}</h4>
                <h4>Post body:{post.body}</h4>
            </div>}
            <Link to={'comments'}>
                <button>Comments</button>
            </Link>
            <div><Outlet/></div>
        </div>
    );
}