import {useParams} from "react-router-dom";

export default function SinglePostPage() {
    useParams()
  return (
    <div>
        {post.id} - {post.body}

    </div>
  );
}