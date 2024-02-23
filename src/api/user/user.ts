import { USER } from "../api";
import { UserDto } from "./type";
import axios from "axios";

export const createApiUser = async (data: UserDto) => {

    const res = await axios.post(`${USER.CREATE}`, data)
    return res;
}