import axios from "axios"
import { BANNER } from "../api"
import { requestDelete } from "../apiRequest"

export const getAllBanner = async (skip: number, limit: number, status: string) => {

    const checkStatus = status ? `&status=${status}` : ""
    const res = await axios.get(`${BANNER.GET_ALL}?skip=${skip}&limit=${limit}${checkStatus}`)
    return res.data;
}

export const deleteBanner = async (id: string) => {

    const res = await requestDelete(`${BANNER.DELETE}/${id}`);
    return res;
}