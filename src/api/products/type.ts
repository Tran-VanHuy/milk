export type ProductType = {

    _id?: string
    images: ListImagesType[]
    name: string
    price: number
    discount: number
    quantity: number
    point: number
    info: InfoType
    categories: CategoriesProductType[]
    createdAt: string
    sale: number
    priceTitle?: string
    checkDiscount?: boolean
    type: number
    transportFee: number
    deliveryDate: number
}

export type ListImagesType = {

    uid: string
    name: string
}

export type InfoType = {
    _id?: string
    ms: string
    sz: string
    itemMS: ItemMsType[]
}

export type CategoriesProductType = {

    _id?: string,
    name: string,
}

export type ItemMsType = {

    _id?: string
    name: string,
    price: number,
    discount: number,
    quantity: number,
    itemSZ?: ItemSZType[]
    image?: string
}

export type ItemSZType = {
    _id?: string
    name: string
    price: number,
    discount: number,
    quantity: number,
}

export type SearchProductsType = {

    _id?: string,
    name: string
}