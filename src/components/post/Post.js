import {Link} from "react-router-dom";

export default function Post({post:{id, title}}) {
  return (
    <div>
        <Link to={id.toString()} state={post}>{id}) Title: {post.title}</Link>

    </div>
  );
}