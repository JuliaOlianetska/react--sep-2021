import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../../services/Services";
import DetailedUser from "../../components/detailedUser/DetailedUser";

export default function SingleUserPage() {
   const {id} = useParams();
   const {state} = useLocation();

    const [user, setUser] = useState(null);
    useEffect(()=> {
        if (state) {
            setUser(state)
            return
        }
        userService.getById(id).then(value => setUser({...value}))
    }, [])



    return (
    <div>
        {user && (<div>{user.id} {user.name}</div>)}

    </div>
  );
}