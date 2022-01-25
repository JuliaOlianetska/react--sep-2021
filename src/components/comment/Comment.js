
export default function Comment({comment}) {
  return (
    <div>
      <div>Comment id: {comment.id}</div>
      <div>Post id: {comment.postId}</div>
      <div>Comment body: {comment.body}</div>
<hr/>
    </div>
  );
}