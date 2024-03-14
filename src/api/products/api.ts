import axios from "axios"
import { PRODUCT } from "../api"

export const getAllProducts = async (skip: number, limit: number, status: string, category: string) => {

    const checkStatus = status ? `&status=${status}` : "";
    const res = await axios.get(`${PRODUCT.GET_ALL}?limit=${limit}&skip=${skip}${checkStatus}&category=${category}`)
    return res.data
}

export const findByIdProduct = async (_id: string) => {

    const res = await axios.get(`${PRODUCT.FIND_BY_ID}/${_id}`);
    return res.data.data
}

export const searchProducts = async (search: string) => {

    const res = await axios.get(`${PRODUCT.SEARCH}?search=${search}`)
    return res.data
}