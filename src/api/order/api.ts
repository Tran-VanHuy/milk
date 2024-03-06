import axios from "axios"
import { ORDER } from "../api"

export const getInfoOrder = async (productId: string, type: number, quantity: number) => {

    const res = await axios.post(ORDER.INFO, { productId, type, quantity })
    return res.data
}