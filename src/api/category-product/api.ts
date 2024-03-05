import axios from "axios"
import { CATEGORY_PRODUCT } from "../api"

export const getAllCategoryProduct = async (skip: number, limit: number, status: string) => {

    const checkStatus = status ? `&status=${status}` : ""
    const res = await axios.get(`${CATEGORY_PRODUCT.GET_ALL}?skip=${skip || 0}&limit=${limit || 6}${checkStatus}`);
    return res;
} 