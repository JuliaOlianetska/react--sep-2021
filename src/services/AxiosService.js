import axios from "axios";

import baseURL from "../configs/Urls";


export const axiosService = axios.create({baseURL});