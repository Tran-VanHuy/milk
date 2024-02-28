import axios from "axios"
import { CATEGORY_PRODUCT } from "../api"

export const getAllCategoryProduct = async () => {

    const res = await axios.get(CATEGORY_PRODUCT.GET_ALL);
    return res;
} 