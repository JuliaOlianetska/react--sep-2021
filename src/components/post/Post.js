import {Link} from "react-router-dom";

export default function Post({post}) {
  return (
    <div>
      <Link to={post.id.toString()} state={post}>
        <div>id: {post.id} -- title: {post.title}</div>
      </Link>

    </div>
  );
}