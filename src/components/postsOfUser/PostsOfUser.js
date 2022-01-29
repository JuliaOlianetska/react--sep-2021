export default function PostsOfUser({post}) {
  return (
    <div>
        <div>
            <div>Post id: {post.id}</div>
            <div>User id: {post.userId}</div>
            <div>Post title: {post.title}</div>
            <div>Post body: {post.body}</div>
            <hr/>
        </div>

    </div>
  );
}