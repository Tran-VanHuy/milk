import axios from "axios"
import { getStorage } from "zmp-sdk";

const getAccessToken: any = async () => {
    const { accessToken } = await getStorage({
        keys: ["accessToken"]
    });
    return accessToken;
}

export const requestGet = async (url: string) => {

    const accessToken = await getAccessToken()

    const res = await axios.get(url, { headers: { Authorization: `Bearer ${accessToken}` } })

    return res.data;
}

export const requestDelete = async (url: string) => {

    const accessToken = await getAccessToken()

    const res = await axios.delete(url, { headers: { Authorization: `Bearer ${accessToken}` } })

    return res.data;
}

export const requestEdit = async (url: string, body: object) => {

    const accessToken = await getAccessToken()

    const res = await axios.put(url, body, { headers: { Authorization: `Bearer ${accessToken}` } })

    return res.data;
}

export const requestPost = async (url: string, body: object) => {

    const accessToken = await getAccessToken()

    const res = await axios.post(url, body, { headers: { Authorization: `Bearer ${accessToken}` } })

    return res.data;
}
