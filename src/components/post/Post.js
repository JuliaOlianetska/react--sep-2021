import {Link} from "react-router-dom";

export default function Post({post}) {
  return (
    <div>
        <Link to={post.id.toString()} state={post}>{post.title} </Link>

    </div>
  );
}