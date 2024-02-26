import { addressVN } from "./type";

export const transformDataUser = (data: addressVN[]) => {

    return data.map((item) => ({

        ...item,
    }))
}