
export type BodyCart = {

    productId: string
    product: string
    infoId?: string
    msId?: string
    szId?: string
    type: number
    userId: string
    image: string
    quantity: number
}

export type CartDto = {
    _id: string
    productId: string
    product: string
    infoId?: string
    msId?: string
    szId?: string
    type: number
    userId: string
    image: string
    nameMS?: string,
    nameSZ?: string,
    price?: number,
    priceDiscount?: number
    name: string
}