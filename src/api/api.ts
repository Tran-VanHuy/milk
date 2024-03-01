const API_URI = "http://192.168.1.12:3001/v1";

export const USER = {
    CREATE: API_URI + "/user",
    FIND_ONE: API_URI + "/user/findOne"
}

export const ADDRESS = {

    CREATE: API_URI + "/address",
    DELETE: API_URI + "/delete/address",
    DETAIL: API_URI + "/detail/address",
    UPDATE: API_URI + "/update/address"
}

export const CATEGORY_PRODUCT = {

    GET_ALL: API_URI + "/category-products"
}

export const PRODUCT = {
    GET_ALL: API_URI + "/products",
    CREATE: API_URI + "/products",
    FIND_BY_ID: API_URI + "/products"
}

export const UPLOAD = {
    CREATE: API_URI + "/upload-photo"
}

export const VOUCHER = {

    GET_ALL: API_URI + "/voucher",
    CREATE: API_URI + "/voucher"
}