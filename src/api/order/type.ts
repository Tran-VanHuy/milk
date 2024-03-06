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
    priceDiscount1: number
}

export type BodyInfo = {

    productId: string,
    type: number,
    quantity: number
}