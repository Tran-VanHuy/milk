import axios from "axios"
import { ADS } from "../api"

export const getAllAds = async (skip: number, limit: number, status: string) => {

    const checkStatus = status ? `&status=${status}` : "";

    const res = await axios.get(`${ADS.GET_ALL}?skip=${skip}&limit=${limit}${checkStatus}`);

    return res.data;
}