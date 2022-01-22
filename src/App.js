import './App.css';
import Users from "./components/users/Users";
import Form from "./components/form/Form";
import {useEffect, useState} from "react";
import {getUsers} from "./services/Services";

export default function App() {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        getUsers().then(users => {
            setUsers([...users])
            setFilteredUsers([...users])
        })
    }, [])

    const getFilteredUsers = (data) => {
        let filteredUsers = [...users];
        if (data.name) {
            filteredUsers = filteredUsers.filter(user => user.name.includes(data.name))
        }
        if (data.username) {
            filteredUsers = filteredUsers.filter(user => user.username.includes(data.username))
        }
        if (data.email) {
            filteredUsers = filteredUsers.filter(user => user.email.includes(data.email))
        }
        setFilteredUsers(filteredUsers)
    }

    return (
        <div>
            <Form getFilteredUsers={getFilteredUsers}/>
            <Users filteredUsers={filteredUsers}/>

        </div>
    );
}