export default function User({user}) {


  return (
    <div>
        {user.id} - {user.name} - {user.username} - {user.email}

    </div>
  );
}
