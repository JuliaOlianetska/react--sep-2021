import {axiosService} from "./AxiosService";
import {urls} from "../configs/Urls";


export const carService = {
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    create: (car) => axiosService.post(urls.cars, car).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)

}