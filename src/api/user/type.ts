export type UserDto = {

    _id?: string,
    userId: string,
    avatar?: string,
    name: string,
    phone: string,
    address?: AddressDto[]
}

export type AddressDto = {
    _id?: string,
    userId?: string,
    name: string,
    phone: string,
    city: string,
    district: string,
    commune: string,
    specificAddress: string,
    default: boolean
}

export type addressVN = {
    id?: string
    name: string
}