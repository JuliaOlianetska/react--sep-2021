import axios from "axios";
import url from "../configs/Urls";

const axiosService = axios.create({url});

export {axiosService};
