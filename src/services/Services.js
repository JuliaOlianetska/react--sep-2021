import axiosService from "./AxiosService";
import {urls} from "../configs/Urls";

export const postService ={
    getAll: () => axiosService.get(urls.posts)
        .then(value => value.data),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`)
        .then(value => value.data)
}
