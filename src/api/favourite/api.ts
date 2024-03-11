import axios from "axios"
import { FAVOURITE } from "../api"

export const getAllFavourite = async (skip: number, limit: number, userId: string) => {

    const res = await axios.get(`${FAVOURITE.GET_ALL}?skip=${skip}&limit=${limit}&userId=${userId}`)
    return res.data;
}