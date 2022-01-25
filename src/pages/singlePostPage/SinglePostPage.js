import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/Services";

export default function SinglePostPage() {
    const {id} = useParams();

    const [post, setPost] = useState(null);
    const {state} = useLocation();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost({...value}))
    }, [id])

const goToComments = () => {
        postService.getComments(id).then(value => setComments([...value]))
}
    return (
        <div>
            {post && (
                <div>
                    <div>Post Id:{post.id}</div>
                    <div>User Id:{post.userId}</div>
                    <div>Title: {post.title}</div>
                    <div>Post body: {post.body}</div>
                </div>)}
            <Link to={'comments'}>
                <button onClick={goToComments}>Comments</button>
            </Link>
            <div><Outlet/></div>

        </div>
    );
}