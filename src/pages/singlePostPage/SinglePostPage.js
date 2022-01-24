import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/Services";

export default function SinglePostPage() {
    const {id} = useParams();

    const [post, setPost] = useState({});
    const {state} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost({...value}))
    }, [])

const returnHome =() => {
navigate('/')
}

const returnBack = () => {
        navigate(-1)
}
    return (
        <div>
            <button onClick={returnHome}>Home</button>
            <button onClick={returnBack}>Back</button>
            {post && (
                <div>{post.id}, {post.title}, {post.body}</div>
            )
            }

        </div>
    );
}