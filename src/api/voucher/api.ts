import axios from "axios"
import { VOUCHER } from "../api"
import { BodyVoucherType, VoucherType } from "./type";
import { requestDelete, requestEdit, requestGet, requestPost } from "../apiRequest";

export const getAllVoucher = async (idProduct?: string, status?: string) => {

    const products = idProduct ? `?product=${idProduct}` : "";
    const checkStatus = idProduct && status ? `&status=${status}` : ""

    const res = await axios.get(`${VOUCHER.GET_ALL}${products}${checkStatus}`);

    return res.data;
}

export const createVoucher = async (body: VoucherType) => {

    const res = await requestPost(VOUCHER.CREATE, body)
    return res;
}

export const deleteVoucher = async (id: string) => {

    const res = await requestDelete(`${VOUCHER.DELETE}/${id}`)
    return res;
}

export const updateVoucher = async (id: string, body: BodyVoucherType) => {

    const res = await requestEdit(`${VOUCHER.UPDATE}/${id}`, body);
    return res;
}

export const detailVoucher = async (id: string) => {

    const res = await requestGet(`${VOUCHER.DETAIL}/${id}`)
    return res;
}