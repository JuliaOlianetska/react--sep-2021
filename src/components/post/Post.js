export default function Post({post}) {
  return (
    <div>
      {post.id} - {post.userId} - {post.body}
    </div>
  );
}