import {userAxiosService} from "./userAxiosService";
import {userUrls} from "../configs/userUrl";

export const userService = {
    getUsers: () => userAxiosService.get(userUrls.users).then(value => value.data),
    getPosts: () => userAxiosService.get(userUrls.posts).then(value=> value.data),
    getComments: () => userAxiosService.get(userUrls.comments).then(value => value.data)
}
