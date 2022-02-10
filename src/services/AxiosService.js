import axios from "axios";

import baseURL from "../configs/carUrl";


export const axiosServiceCar = axios.create({baseURL});
