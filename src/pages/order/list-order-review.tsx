import React, { useContext, useEffect, useState } from "react";
import { AddressDto, UserDto } from "../../api/user/type";
import { Header, Page } from "zmp-ui";
import { AppContext } from "../../context/AppContext";
import { EnvironmentOutlined, FieldTimeOutlined, InboxOutlined, MinusOutlined, PlusOutlined, RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { InfoOrder, ListInfoOrderType, OrderType } from "../../api/order/type";
import { formatPrice } from "../../components/format-price";
import { createDataOrder } from "../../api/order/api";
import { API_URI } from "../../api/api";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
    dataAddressDefault: AddressDto,
    addressDefault: (userId: string) => void
    user: UserDto
    dataListInfoOrder: ListInfoOrderType
    setDataOrder: React.Dispatch<React.SetStateAction<OrderType>>
}

type PriceOrder = {

    subtotal: number,
    priceDiscount: number,
}

export const ListOrderReview = () => {

    const { setShowBottomTab, dataAddressDefault, addressDefault, user, dataListInfoOrder, setDataOrder }: AppcontentType = useContext(AppContext);
    const [listorder, setListOrder] = useState<InfoOrder[]>()
    const [priceAllOrder, setPriceAllOrder] = useState<PriceOrder>()

    const onOrder = async () => {
        console.log(listorder);

        const body: OrderType = {
            order: listorder && listorder.length > 0 ? listorder?.map(item => ({
                productId: item._id!,
                name: item?.name!,
                quantity: item.quantityProduct,
                price: item?.priceDiscount!,
                address: dataAddressDefault.specificAddress,
                userId: user.userId,
                nameItem: item?.nameItem!,
                images: item.images
            })) : [],
            deliveryAddress: dataAddressDefault.specificAddress,
            userId: user.userId
        }
        console.log({ body });

        try {
            const res = await createDataOrder(body)
            if (res.status === 200) {
                setDataOrder(res.data)
                nav("/order/success")
            }
        } catch (error) {
            console.log(error);
        }
    }

    const nav = useNavigate()

    const onQuantity = (action: string, id: string) => {

        if (action === "PLUS") {

            const plush = listorder?.map(item => item._id === id ? { ...item, quantityProduct: item.quantityProduct + 1, subtotal: item.priceDiscount1 * (item.quantityProduct + 1), priceDiscount: item.priceDiscount1 * (item.quantityProduct + 1) + item.transportFee } : item)
            setListOrder(plush)
            const subtotal = (plush?.map(item => item.subtotal))?.reduce((acc, value) => acc + value, 0)
            const priceDiscount = (plush?.map(item => item.priceDiscount))?.reduce((acc, value) => acc + value, 0)
            if (subtotal && priceDiscount) {
                setPriceAllOrder({ subtotal, priceDiscount })
            }
        } else {

            const minus = listorder?.map(item => item._id === id ? { ...item, quantityProduct: item.quantityProduct === 1 ? item.quantityProduct : item.quantityProduct - 1, subtotal: item.quantityProduct > 1 ? item.priceDiscount1 * (item.quantityProduct - 1) : item.subtotal, priceDiscount: item.quantityProduct > 1 ? item.priceDiscount - item.priceDiscount1 : item.priceDiscount } : item)
            setListOrder(minus)
            const subtotal = (minus?.map(item => item.subtotal))?.reduce((acc, value) => acc + value, 0)
            const priceDiscount = (minus?.map(item => item.priceDiscount))?.reduce((acc, value) => acc + value, 0)
            if (subtotal && priceDiscount) {
                setPriceAllOrder({ subtotal, priceDiscount })
            }
        }
    }



    useEffect(() => {
        if (user) {

            addressDefault(user.userId)
        }
    }, [user])

    useEffect(() => {
        setListOrder(dataListInfoOrder.orders)
        setPriceAllOrder({ subtotal: dataListInfoOrder.subtotal, priceDiscount: dataListInfoOrder.priceDiscount })
        setShowBottomTab(false)
    }, [])

    return (
        <Page className="pb-[125px]">
            <Header title="Tổng quan đơn hàng" />
            <div className="pt-[44px]">
                <div className="bg-white p-2 flex justify-between mb-2" onClick={() => nav("/address")}>
                    <div className="flex gap-2">
                        <EnvironmentOutlined className="mt-1" />
                        {dataAddressDefault ? <div>
                            <p className="font-[500] mb-1">{dataAddressDefault.name} (+84){dataAddressDefault.phone}</p>
                            <p className="text-gray-500 text-[14px] font-[400] line-clamp-1">{dataAddressDefault.specificAddress}</p>
                            <p className="text-gray-500 text-[14px] font-[400] line-clamp-1">{dataAddressDefault.commune}, {dataAddressDefault.district}, {dataAddressDefault.city}</p>
                        </div> : <span className="text-[12px] text-red-500">Chưa cập nhật địa chỉ</span>}

                    </div>
                    <RightOutlined className="text-[12px] text-gray-500 mt-1" />
                </div>

                {listorder && listorder.length > 0 && listorder.map(item => (
                    <div key={item._id}>
                        <div className="bg-white p-2 mb-[1px]">
                            <div className="flex gap-2 mb-3">
                                <img src={`${API_URI}/${item.images}`} alt="" width={85} height={85} className="rounded" />
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <p className="line-clamp-1 text-gray-600 font-[400]">{item?.name}</p>
                                        {item?.nameItem && <p className="line-clamp-1 text-gray-500 font-[400] text-[14px] bg-gray-100 inline-block px-3">{item.nameItem}</p>}
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <p className="font-bold">{formatPrice(item?.priceDiscount1)}</p>
                                            {item?.priceDiscount1 !== item?.price && <del className="text-[14px] text-gray-500">{formatPrice(item?.price)}</del>}
                                        </div>
                                        <div className="flex items-center">
                                            <div className="border-[1px] w-[25px] h-[25px] flex items-center justify-center" onClick={() => onQuantity("MINUS", item._id!)}><MinusOutlined className="text-[12px]" /></div>
                                            <div className="border-[1px] w-[25px] h-[25px] flex items-center justify-center text-[14px] font-[500]">{item.quantityProduct}</div>
                                            <div className="border-[1px] w-[25px] h-[25px] flex items-center justify-center" onClick={() => onQuantity("PLUS", item._id!)}><PlusOutlined className="text-[12px]" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between mb-3">
                                <div>
                                    <p className="text-[14px] text-gray-700 font-[400]">Vận chuyển tiêu chuẩn</p>
                                    <div className="flex items-center gap-1">
                                        <InboxOutlined className="text-gray-600" />
                                        <span className="text-[12px] text-gray-600">Từ Đan Phượng</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FieldTimeOutlined className="text-gray-600" />
                                        <span className="text-[12px] text-gray-600">Ngày giao hàng dự kiến: {item?.deliveryDate !== 0 ? `${item?.deliveryDate} ngày` : "trong ngày"}</span>
                                    </div>
                                </div>
                                <span className="text-[12px] text-gray-600 ">{formatPrice(item?.transportFee)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-[14px] text-gray-700 font-[400]">Tin nhắn</span>
                                <div className="text-[14px] text-gray-500 font-[400] flex items-center gap-2" >
                                    <span>Tùy chọn</span>
                                    <RightOutlined className="text-[10px] text-gray-500 mt-[2px]" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-2 mb-2">
                            {/* <p className="font-[500] mb-3">Tóm tắt đơn hàng</p> */}
                            <div className="flex flex-col gap-2 text-[14px]">
                                <div className="flex justify-between text-gray-600">
                                    <span>Tổng phụ</span>
                                    <span>{formatPrice(item?.subtotal)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Vận chuyển</span>
                                    <span>{formatPrice(item?.transportFee)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Tổng</span>
                                    <span className="font-[500] text-black">{formatPrice(item?.priceDiscount)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="bg-white p-2 mb-2">
                    <p className="font-[500] mb-3">Tóm tắt đơn hàng</p>
                    <div className="flex flex-col gap-2 text-[14px]">
                        <div className="flex justify-between text-gray-600">
                            <span>Tổng phụ</span>
                            <span>{formatPrice(priceAllOrder?.subtotal)}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Vận chuyển</span>
                            <span>{formatPrice(dataListInfoOrder?.orders[0].transportFee)}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Tổng</span>
                            <span className="font-[500] text-black">{formatPrice(priceAllOrder?.priceDiscount)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-2 grid grid-cols-1 gap-2 bg-white absolute bottom-0 w-full pb-[40px] pt-[20px] border-t-[1px]">
                <div className="flex justify-between text-[16px]">
                    <b>Tổng</b>
                    <b>{formatPrice(priceAllOrder?.priceDiscount)}</b>
                </div>
                <div className=" bg-red-500 text-center py-2 rounded text-white font-bold" onClick={() => onOrder()}>Đặt hàng</div>
            </div>
        </Page>
    )
}
