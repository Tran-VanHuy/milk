import axios from "axios"
import { CART } from "../api"

export const checkTotalCart = async (userId: string) => {

    const res = await axios.get(`${CART.TOTAL}?userId=${userId}`)
    return res.data;
}