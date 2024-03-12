import axios from "axios"
import { NOTIFICATION } from "../api"

export const getAllNotification = async () => {

    const res = await axios.get(NOTIFICATION.CREATE)
    return res.data
}