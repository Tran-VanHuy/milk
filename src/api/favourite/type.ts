export type BodyCheckFavourite = {

    userId: string
    productId: string
}

export type FavouriteType = {

    _id?: string,
    product: ProductType
}

export type ProductType = {
    _id?: string
    images: ImageProductType[]
    name: string
    price: string
}

export type ImageProductType = {

    url: string
}