import { CloseOutlined, EnvironmentOutlined, FieldTimeOutlined, InboxOutlined, MinusOutlined, PlusOutlined, RightOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import { Page, Header, Sheet, Box } from "zmp-ui";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { AddressDto } from "../../api/address/type";
import { UserDto } from "../../api/user/type";
import { BodyInfo, InfoOrder, OrderType } from "../../api/order/type";
import axios from "axios";
import { API_URI, ORDER } from "../../api/api";
import { formatPrice } from "../../components/format-price";
import { createOrder } from "zmp-sdk";
import { createDataOrder } from "../../api/order/api";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
    dataAddressDefault: AddressDto,
    addressDefault: (userId: string) => void,
    user: UserDto,
    dataInfoOrder: BodyInfo,
    setDataInfoOrder: React.Dispatch<React.SetStateAction<BodyInfo>>
    setDataOrder: React.Dispatch<React.SetStateAction<OrderType>>

}

export const OverReview = () => {
    const { setShowBottomTab, dataAddressDefault, addressDefault, user, dataInfoOrder, setDataOrder }: AppcontentType = useContext(AppContext);

    const [dataInfo, setDataInfo] = useState<InfoOrder>()

    const [quantity, setQuantity] = useState<number>(1)
    const [sheetVisible, setSheetVisible] = useState(false);

    const nav = useNavigate()

    const onOrder = async () => {



        try {
            if (dataAddressDefault) {
                const body: OrderType = {
                    order: [
                        {
                            productId: dataInfoOrder.productId,
                            name: dataInfo?.name!,
                            quantity: quantity,
                            price: dataInfo?.priceDiscount!,
                            address: dataAddressDefault.specificAddress,
                            userId: user.userId,
                            nameItem: dataInfo?.nameItem,
                            images: dataInfo?.images!
                        }
                    ],
                    deliveryAddress: dataAddressDefault.specificAddress,
                    userId: user.userId
                }
                
                const res = await createDataOrder(body)
                if (res.status === 200) {
                    setDataOrder(res.data)
                    nav("/order/success")
                }
            } else {

                nav("/new-address")
            }

        } catch (error) {
            console.log(error);
        }
    }

    const infoOrder = async () => {

        try {

            const res = await axios.post(ORDER.INFO, dataInfoOrder)
            setDataInfo(res.data.data);
            setQuantity(dataInfoOrder.quantity)
        } catch (error) {

            console.log({ error });

        }
    }

    const onQuantity = async (action: string) => {
        let totalQuantity = quantity;


        if (action === "PLUS") {

            totalQuantity = quantity + 1
            setQuantity(totalQuantity)

        } else {


            if (quantity === 1) {
                totalQuantity = 1
                setQuantity(totalQuantity)
            } else {
                totalQuantity = quantity - 1
                setQuantity(totalQuantity)
            }
        }

        const body = {
            productId: dataInfoOrder.productId,
            quantity: totalQuantity,
            type: dataInfoOrder.type,
            msId: dataInfoOrder.msId,
            szId: dataInfoOrder.szId,
        }
        const res = await axios.post(ORDER.INFO, body)
        setDataInfo(res.data.data);
    }

    useEffect(() => {
        if (user) {

            addressDefault(user.userId)
        }
    }, [user])

    useEffect(() => {
        setShowBottomTab(false)
        infoOrder()
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
                <div className="bg-white p-2 mb-2">
                    <div className="flex gap-2 mb-3">
                        <img src={`${API_URI}/${dataInfo?.images}`} alt="" width={85} height={85} className="rounded" />
                        <div className="flex flex-col justify-between">
                            <div>
                                <p className="line-clamp-1 text-gray-600 font-[400]">{dataInfo?.name}</p>
                                {dataInfo?.nameItem && <p className="line-clamp-1 text-gray-500 font-[400] text-[14px] bg-gray-100 inline-block px-3">{dataInfo.nameItem}</p>}
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-bold">{formatPrice(dataInfo?.priceDiscount1)}</p>
                                    {dataInfo?.priceDiscount1 !== dataInfo?.price && <del className="text-[14px] text-gray-500">{formatPrice(dataInfo?.price)}</del>}
                                </div>
                                <div className="flex items-center">
                                    <div className="border-[1px] w-[25px] h-[25px] flex items-center justify-center" onClick={() => onQuantity("MINUS")}><MinusOutlined className="text-[12px]" /></div>
                                    <div className="border-[1px] w-[25px] h-[25px] flex items-center justify-center text-[14px] font-[500]">{quantity}</div>
                                    <div className="border-[1px] w-[25px] h-[25px] flex items-center justify-center" onClick={() => onQuantity("PLUS")}><PlusOutlined className="text-[12px]" /></div>
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
                                <span className="text-[12px] text-gray-600">Ngày giao hàng dự kiến: {dataInfo?.deliveryDate !== 0 ? `${dataInfo?.deliveryDate} ngày` : "trong ngày"}</span>
                            </div>
                        </div>
                        <span className="text-[12px] text-gray-600 ">{formatPrice(dataInfo?.transportFee)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[14px] text-gray-700 font-[400]">Tin nhắn</span>
                        <div className="text-[14px] text-gray-500 font-[400] flex items-center gap-2" onClick={() => setSheetVisible(true)}>
                            <span>Tùy chọn</span>
                            <RightOutlined className="text-[10px] text-gray-500 mt-[2px]" />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-2 mb-2">
                    <p className="font-[500] mb-3">Tóm tắt đơn hàng</p>
                    <div className="flex flex-col gap-2 text-[14px]">
                        <div className="flex justify-between text-gray-600">
                            <span>Tổng phụ</span>
                            <span>{formatPrice(dataInfo?.subtotal)}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Vận chuyển</span>
                            <span>{formatPrice(dataInfo?.transportFee)}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Tổng</span>
                            <span className="font-[500] text-black">{formatPrice(dataInfo?.priceDiscount)}</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-2 mb-2">
                    <p className="font-[500] mb-3">Phương thức thanh toán</p>
                    <div className="flex gap-2 text-[14px] justify-between">
                        <div>
                            <span className="bg-green-600 text-white text-[10px] font-bold px-1 rounded inline-block">COD </span>
                            <span className="text-[14px] text-gray-600 font-[500]"> Thanh toán bằng tiền mặt (COD)</span>
                        </div>
                        <input type="radio" checked />
                    </div>
                </div>
            </div>
            <div className="px-2 grid grid-cols-1 gap-2 bg-white absolute bottom-0 w-full pb-[40px] pt-[20px] border-t-[1px]">
                <div className="flex justify-between text-[16px]">
                    <b>Tổng</b>
                    <b>{formatPrice(dataInfo?.priceDiscount)}</b>
                </div>
                <div className=" bg-red-500 text-center py-2 rounded text-white font-bold" onClick={() => onOrder()}>Đặt hàng</div>
            </div>
            <Sheet
                visible={sheetVisible}
                onClose={() => setSheetVisible(false)}
                autoHeight
                mask
                handler
                swipeToClose
            >
                <Box p={4} className="custom-bottom-sheet" flex flexDirection="column">
                    <div className="bottom-sheet-cover flex gap-3 justify-center items-center relative">
                        <div className="flex-fill text-center">
                            <b>Tin nhắn</b>
                        </div>
                        <CloseOutlined className=" absolute right-0 text-[12px]" onClick={() => setSheetVisible(false)} />
                    </div>
                    <Box mt={4} mb={5} >
                        <div className="relative">
                            <textarea className="w-full border-[1px] rounded p-2" rows={5} placeholder="Gửi tin nhắn cho người bán" maxLength={200}></textarea>
                            <span className="absolute right-2 bottom-2 text-[10px] text-gray-500">0/200</span>
                        </div>
                    </Box>

                    <div className="pb-4">
                        <div className="bg-red-500 text-white font-medium text-center py-2 rounded-lg">Lưu</div>
                    </div>
                </Box>
            </Sheet>
        </Page>
    )
}