import {Link} from "react-router-dom";

export default function Post({post}) {
    const {id, title} = post;

  return (
    <div>
        <Link to={id.toString()} state={post}>{id}) Title: {title}</Link>

    </div>
  );
}