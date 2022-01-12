
export default function User({user}) {
    return (
        <div>
            <h4>id: {user.id} - name: {user.name}</h4>
            <h4>username: {user.username}</h4>
            <p>{user.email}</p>
            <p>address: {user.address.street}, {user.address.suite}, {user.address.city}</p>
            <p>{user.address.geo.lat}, {user.address.geo.lng}</p>
            _____________________
        </div>
    );
}