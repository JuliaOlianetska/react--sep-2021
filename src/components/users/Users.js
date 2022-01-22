import User from "../user/User";

export default function Users({filteredUsers}) {


    return (
        <div>
            <div>
                {
                    filteredUsers.map(user => <User key={user.id} user={user}/>)
                }
            </div>

        </div>
    );
}