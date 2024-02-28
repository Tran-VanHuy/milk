import axios from "axios"
import { PRODUCT } from "../api"

export const getAllProducts = async (skip: number, limit: number, status) => {

    const checkStatus = status ? `&status=${status}` : "";
    const res = await axios.get(`${PRODUCT.GET_ALL}?limit=${limit}&skip=${skip}${checkStatus}`)
    return res.data
}