import { USER } from "../api";
import { BodySignInType, UserDto } from "./type";
import axios from "axios";

export const createApiUser = async (data: UserDto) => {

    const res = await axios.post(`${USER.CREATE}`, data)
    return res;
}

export const findOneUser = async (userId: string) => {

    const res = await axios.get(`${USER.FIND_ONE}?userId=${userId}`)
    return res;
}

export const getAllProvince = async (title: string, id?: string) => {
    let data = [];
    if (title === "Tỉnh/ TP") {
        const res = await axios.get("https://vapi.vnappmob.com/api/province/");
        data = res.data.results.map((item) => ({

            id: item.province_id,
            name: item.province_name
        }));
    }

    if (title === "Quận/ Huyện") {
        const res = await axios.get(`https://vapi.vnappmob.com/api/province/district/${id}`);
        data = res.data.results.map((item) => ({

            id: item.district_id,
            name: item.district_name
        }));
    }

    if (title === "Xã/ Phường") {
        const res = await axios.get(`https://vapi.vnappmob.com/api/province/ward/${id}`);
        data = res.data.results.map((item) => ({

            id: item.ward_id,
            name: item.ward_name
        }));
    }

    return data;
}

export const SignIn = async (body: BodySignInType) => {

    const res = await axios.post(USER.SIGN_IN, body)
    return res.data;
}
