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
}

export type BodyListInfoOrderType = {
    _id?: string
    products: BodyInfo[],
    userId: string
}

export type ListInfoOrderType = {

    subtotal: number
    priceDiscount: number
    orders: InfoOrder[]
}