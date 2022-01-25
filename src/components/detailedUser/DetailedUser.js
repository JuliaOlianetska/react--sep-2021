export default function DetailedUser({user}) {
  return (
    <div>
        {user.id} -- {user.name} -- {user.email}

    </div>
  );
}