import {urls} from "../configs/urls";

const getUsers = () => {
    return fetch(urls.users)
        .then(users => users.json())
}

const getUserById = (id) => {
    return fetch(`${urls.users}/${id}`)
        .then(user => user.json())
}

const getUserPosts = (id) => {
    return fetch(`${urls.users}/${id}` + '/posts')
        .then(posts => posts.json())

}

export {getUsers, getUserById, getUserPosts};