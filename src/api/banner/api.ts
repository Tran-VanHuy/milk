import axios from "axios"
import { BANNER } from "../api"

export const getAllBanner = async (skip: number, limit: number, status: string) => {

    const checkStatus = status ? `&status=${status}` : ""
    const res = await axios.get(`${BANNER.GET_ALL}?skip=${skip}&limit=${limit}${checkStatus}`)
    return res.data;
}