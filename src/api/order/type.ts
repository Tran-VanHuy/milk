export type InfoOrder = {
    _id?: string
    transportFee: number
    deliveryDate: number
    images: string,
    name: string
    price: number
    discount: number
    quantity: number
    point: number
    subtotal: number
    quantityProduct: number
    priceDiscount: number
    priceDiscount1: number
    nameItem?: string
    msId: string
    szId: string
}

export type BodyInfo = {

    productId: string
    type?: number
    quantity: number
    msId?: string
    szId?: string
}

export type OrderType = {
    _id?: string
    orderCode?: string
    order: ItemOrderType[]
    orders?: ItemOrderType[]
    userId: string
    deliveryAddress: string
    type?: string
    price?: number
    images?: string
    msId?: string
    szId?: string
    address?: {
        name: string,
        phone: string,
        city: string,
        district: string,
        commune: string,
        specificAddress: string,
        default: boolean,
    }
}

export type ItemOrderType = {
    _id?: string
    productId: string
    name: string
    quantity: number
    price: number
    address: string
    userId: string
    nameItem?: string
    images: string
    msId?: string
    szId?: string
}

export type BodyListInfoOrderType = {
    _id?: string
    products: BodyInfo[],
    userId: string
}

export type ListInfoOrderType = {
    _id?: string
    subtotal: number
    priceDiscount: number
    orders: InfoOrder[]
}

export type BodyChangeStatusOrderType = {

    userId: string,
    type: string,
    orderId: string
}