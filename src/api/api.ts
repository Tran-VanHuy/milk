export const API_URI = "http://192.168.1.11:3001/v1";

export const USER = {
    CREATE: API_URI + "/user",
    FIND_ONE: API_URI + "/user/findOne",
    GET_ALL: API_URI + "/user"
}

export const ADDRESS = {

    CREATE: API_URI + "/address",
    DELETE: API_URI + "/delete/address",
    DETAIL: API_URI + "/detail/address",
    UPDATE: API_URI + "/update/address",
    ADDRESS_DEFAULT: API_URI + "/address/default"
}

export const CATEGORY_PRODUCT = {

    GET_ALL: API_URI + "/category-products",
    CREATE: API_URI + "/category-products",
    DETAIL: API_URI + "/category-products",
    UPDATE: API_URI + "/category-products",
    DELETE: API_URI + "/category-products"

}

export const PRODUCT = {
    GET_ALL: API_URI + "/products",
    CREATE: API_URI + "/products",
    FIND_BY_ID: API_URI + "/products",
    SEARCH: API_URI + "/products/search/name"
}

export const UPLOAD = {
    CREATE: API_URI + "/upload-photo"
}

export const VOUCHER = {

    GET_ALL: API_URI + "/voucher",
    CREATE: API_URI + "/voucher"
}

export const BANNER = {

    GET_ALL: API_URI + "/banner",
    CREATE: API_URI + "/banner",
    DELETE: API_URI + "/banner",
    DETAIL: API_URI + "/banner",
    UPDATE: API_URI + "/banner"
}

export const ADS = {

    GET_ALL: API_URI + "/ads",
    CREATE: API_URI + "/ads",
    DETAIL: API_URI + "/ads",
    UPDATE: API_URI + "/ads",
    DELETE: API_URI + "/ads"
}

export const ORDER = {

    INFO: API_URI + "/order/info",
    CREATE: API_URI + "/order",
    LIST_INFO: API_URI + "/order/list-info",
    GET_ALL: API_URI + "/order",
    DELETE: API_URI + "/order/delete",
    CHANGE_TYPE: API_URI + "/order/change-type",
    DETAIL: API_URI + "/order/detail",
    QUANTITY_TYPE: API_URI + "/order/quantity-status-order"
}

export const CART = {

    CREATE: API_URI + "/cart",
    GET_ALL: API_URI + "/cart",
    TOTAL: API_URI + "/cart/check/total",
    DELETE: API_URI + "/cart/delete"
}

export const FAVOURITE = {

    CHECK: API_URI + "/favourite/check",
    CREATE: API_URI + "/favourite",
    GET_ALL: API_URI + "/favourite",
    DELETE: API_URI + "/favourite/delete"
}

export const NOTIFICATION = {

    CREATE: API_URI + "/notification",
    GET_ALL: API_URI + "/notification",
    DELETE: API_URI + "/notification"
}