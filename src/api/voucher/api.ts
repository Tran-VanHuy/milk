import axios from "axios"
import { VOUCHER } from "../api"
import { VoucherType } from "./type";

export const getAllVoucher = async (idProduct?: string, status?: string) => {

    const products = idProduct ? `?product=${idProduct}` : "";
    const checkStatus = idProduct && status ? `&status=${status}` : ""

    const res = await axios.get(`${VOUCHER.GET_ALL}${products}${checkStatus}`);

    return res.data;
}

export const createVoucher = async (body: VoucherType) => {

    const res = await axios.post(VOUCHER.CREATE, body);
    return res.data;
}