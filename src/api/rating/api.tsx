import axios from "axios";
import { BodyRatingType } from "./type";
import { RATING } from "../api";

export const createRating = async (body: BodyRatingType) => {

    const res = await axios.post(RATING.CREATE, body)
    return res.data;
}