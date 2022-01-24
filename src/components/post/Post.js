export default function Post({post}) {
  return (
    <div>
        <div>{post.id} - {post.title}</div>
        <div>{post.body}</div>

    </div>
  );
}