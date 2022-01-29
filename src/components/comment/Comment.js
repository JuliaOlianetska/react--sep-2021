export default function Comment({comment}) {
  return (
    <div className={'commentDetails'}>
      <h5>Comment id: {comment.id}</h5>
      <h5>Comment name: {comment.name}</h5>
      <h5>Comment body: {comment.body}</h5>

    </div>
  );
}