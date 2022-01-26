import axiosService from "./axios";
import {urls} from "../configs/Urls";

export const userService = {
    getAll: ()=> axiosService.get(urls.users).then(value => value.data),
    getById: (id)=> axiosService.get(`${urls.users}/${id}`).then(value => value.data)
}

export const postService ={
    getAll: () => axiosService.get(urls.posts)
        .then(value => value.data),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`)
        .then(value => value.data)
}
