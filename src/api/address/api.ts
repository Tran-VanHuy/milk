import axios from "axios";
import { AddressDto } from "./type";
import { ADDRESS } from "../api";

export const createAddress = async (body: AddressDto) => {

    const res = await axios.post(`${ADDRESS.CREATE}`, body)
    return res;
}

export const deleteAddress = async (userId: string, _id: string) => {

    const res = await axios.post(ADDRESS.DELETE, { userId, _id })
    return res;
}

export const getAddressDefault = async (userId: string) => {

    const res = await axios.get(`${ADDRESS.ADDRESS_DEFAULT}?userId=${userId}`)

    return res.data;
}