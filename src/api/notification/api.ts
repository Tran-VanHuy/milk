import axios from "axios"
import { NOTIFICATION } from "../api"

export const getAllNotification = async (userId: string) => {

    const res = await axios.get(`${NOTIFICATION.CREATE}?userId=${userId}`)
    return res.data
}

export const getAllNotificationOrder = async (userId: string) => {

    const res = await axios.get(`${NOTIFICATION.ORDER}/${userId}`)
    return res.data;
}

export const checkReadNotiOrder = async (id: string) => {

    const res = await axios.get(`${NOTIFICATION.CHECK_READ}/${id}`)
    return res.data;
}