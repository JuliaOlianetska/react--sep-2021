import {urls} from "./Urls";

const getUsers = () => {
    return fetch(urls.users).then(users=>users.json())
}

export {getUsers};