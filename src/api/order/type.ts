export type InfoOrder = {

    transportFee: number
    deliveryDate: number
    images: [
        {
            uid: string
            name: string
        }
    ],
    name: string
    price: number
    discount: number
    quantity: number
    point: number
    subtotal: number
    quantityProduct: number
    priceDiscount: number
    priceDiscount1: number,
    nameItem?: string
}

export type BodyInfo = {

    productId: string,
    type: number,
    quantity: number,
    msId?: string,
    szId?: string,
}

export type OrderType = {

    order: ItemOrderType[]
    userId: string

}

export type ItemOrderType = {
    _id?: string
    productId: string
    name: string
    quantity: number
    price: number
    address: string
    userId: string
}