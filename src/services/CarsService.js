import {axiosServiceCar} from "./AxiosService";
import {carUrls} from "../configs/carUrl";


export const carService = {
    getAll: () => axiosServiceCar.get(carUrls.cars).then(value => value.data),
    create: (car) => axiosServiceCar.post(carUrls.cars, car).then(value => value.data),
    deleteById: (id) => axiosServiceCar.delete(`${carUrls.cars}/${id}`),
    updateById: (id, car) => axiosServiceCar.patch(`${carUrls.cars}/${id}`, car).then(value => value.data)

}