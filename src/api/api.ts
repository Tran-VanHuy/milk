const API_URI = "http://192.168.1.10:3001/v1";

export const USER = {
    CREATE: API_URI + "/user",
    FIND_ONE: API_URI + "/user/findOne"
}

export const ADDRESS =  {

    CREATE: API_URI + "/address",
    DELETE: API_URI + "/delete/address",
    DETAIL: API_URI + "/detail/address",
    UPDATE: API_URI + "/update/address"
}