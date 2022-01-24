import {axiosService} from "./AxiosService";
import {urls} from "../configs/Urls";

export const postService ={
    getAll: () => axiosService.get(urls.posts)
        .then(value => value.data),
}


/*
const getAll = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(value=>value.json())
}

export {getAll}

 */