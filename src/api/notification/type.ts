export type NotificationType = {
    _id?: string
    image: string
    title: string
    shortContent: string
    content: string
    link: string
    productId: string
    createdAt: string
    allUser: boolean
}

export type BodyNotificationType = {
    image: string
    title: string
    shortContent: string
    content?: string
    link?: string
    productId: string
    users: string[]
    allUser: boolean
}

// 
export type NotifiCationOrderType = {
    _id: string
    image: string
    title: string
    content: string
    orderId: string
    orderCode: string
    userId: string
    readed: boolean
    createdAt: string
}