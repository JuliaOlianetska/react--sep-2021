import axios from "axios";
import baseURL from "../configs/userUrl";

export const userAxiosService = axios.create({baseURL});