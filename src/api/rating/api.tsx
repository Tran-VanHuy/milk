import axios from "axios";
import { BodyRatingType } from "./type";
import { RATING } from "../api";

export const createRating = async (body: BodyRatingType) => {

    const res = await axios.post(RATING.CREATE, body)
    return res.data;
}

export const getAllRating = async (skip: number, limit: number, productId: string) => {

    const res = await axios.get(`${RATING.GET_ALL}?skip=${skip}&limit=${limit}&productId=${productId}`)
    return res.data;
}