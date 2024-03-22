export type BodyRatingType = {

    media: MediaType[]
    productId: string
    nameProduct: string
    itemNameProduct?: string
    userId: string
    nameUser: string
    content: string
    rating: number
    ItemOrderId: string
}


export type MediaType = {

    name: string
    type: string 
}

export type RatingType = {

    _id: string
    media: MediaType[]
    productId: string
    nameProduct: string
    itemNameProduct?: string
    userId: string
    nameUser: string
    content: string
    rating: number
    ItemOrderId: string
}