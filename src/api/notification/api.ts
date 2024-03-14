import axios from "axios"
import { NOTIFICATION } from "../api"

export const getAllNotification = async (userId: string) => {

    const res = await axios.get(`${NOTIFICATION.CREATE}?userId=${userId}`)
    return res.data
}