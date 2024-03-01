export type VoucherType = {

    _id?: string
    name: string,
    content: string,
    discount: number,
    minimum: number,
    products?: string[]
    status: boolean
    createdAt: string,
    updatedAt: string,
}