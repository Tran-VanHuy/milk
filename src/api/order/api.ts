import axios from "axios"
import { ORDER } from "../api"
import { OrderType } from "./type"

export const getInfoOrder = async (productId: string, type: number, quantity: number) => {

    const res = await axios.post(ORDER.INFO, { productId, type, quantity })
    return res.data
}

export const createDataOrder = async (body: OrderType) => {

    const res = await axios.post(ORDER.CREATE, body)
    return res.data;
}