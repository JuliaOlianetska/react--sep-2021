import axiosService from "./AxiosService";
import {urls} from "../configs/Urls";

export const postService ={
    getAll: () => axiosService.get(urls.posts)
        .then(value => value.data),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`)
        .then(value => value.data),
    getComments: (id) => axiosService.get(`${urls.posts}/${id}` + '/comments').then(value => value.data)
}

export const userService = {
    getAll: ()=> axiosService.get(urls.users)
        .then(value=> value.data),
    getById: (id)=> axiosService.get(`${urls.users}/${id}`)
        .then(value => value.data),
    getPosts: (id)=>axiosService.get(`${urls.users}/${id}`+ '/posts')
        .then(value => value.data)
}

