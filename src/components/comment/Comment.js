export default function Comment({comment}) {
    return (
        <div>
            <p>{comment.id} comment title: {comment.name}</p>
            <p>comment body: {comment.body}</p>
        </div>
    );
}