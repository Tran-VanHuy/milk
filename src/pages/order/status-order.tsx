import React, { useContext, useEffect, useState } from "react";
import { Page } from "zmp-ui";
import { Header } from "../../components/headers/header";
import { AppContext } from "../../context/AppContext";
import { formatPrice } from "../../components/format-price";
import { BodyListInfoOrderType, ListInfoOrderType, OrderType } from "../../api/order/type";
import { getAllOrder } from "../../api/order/api";
import { UserDto } from "../../api/user/type";
import { InboxOutlined } from "@ant-design/icons";
import { API_URI, ORDER } from "../../api/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
    setDataListInfoOrder: React.Dispatch<React.SetStateAction<ListInfoOrderType>>
    user: UserDto,
    setTypeOrder: React.Dispatch<React.SetStateAction<number>>
    setStatusOrder: React.Dispatch<React.SetStateAction<string>>
    setIdOrder: React.Dispatch<React.SetStateAction<string>>
}

export const StatusOrder = () => {

    const { setShowBottomTab, user, setDataListInfoOrder, setTypeOrder, setStatusOrder, setIdOrder }: AppcontentType = useContext(AppContext);

    const nav = useNavigate()

    const [dataStatusOrder, setDataStatusOrder] = useState<OrderType[]>()
    const [status, setStatus] = useState<string>("");
    const [idStatus, setIdStatus] = useState<number>(1);
    const textStatus = [
        {
            id: 1,
            name: "Tất cả",
            type: ""
        },
        {
            id: 2,
            name: "Đã đặt hàng",
            type: "ĐÃ ĐẶT HÀNG"
        },
        {
            id: 3,
            name: "Đang vận chuyển",
            type: "ĐANG VẬN CHUYỂN"
        },
        {
            id: 4,
            name: "Đã vận chuyển",
            type: "ĐÃ VẬN CHUYỂN"
        }
    ]

    const onSeeOrder = async (item: OrderType) => {

        const body: BodyListInfoOrderType = {
            userId: user.userId,
            products: item?.orders!.map(item => ({
                productId: item.productId,
                quantity: item.quantity || 1,
                msId: item?.msId,
                szId: item?.szId
            }))
        }

        if (body.products.length > 0) {
            const res = await axios.post(ORDER.LIST_INFO, body)
            if (res.data.status === 200) {
                setDataListInfoOrder(res.data.data)
                nav("/list-order-review")
                setTypeOrder(2)
                setStatusOrder(item?.type!)
                setIdOrder(item._id!)
            }
        }

    }

    const onDelete = async (_id: string) => {

        try {
            const res = await axios.delete(`${ORDER.DELETE}?_id=${_id}&userId=${user.userId}`)
            if (res.data.status === 200) {

                statusOrder()
            }
        } catch (error) {
            console.log({ error });

        }
    }

    const statusOrder = async () => {
        try {


            const res = await getAllOrder(user.role !== "ADMIN" ? user.userId : "", status)
            if (res?.status === 200) {

                setDataStatusOrder(res.data)
            }
        } catch (error) {

            console.log({ error });

        }
    }

    useEffect(() => {

        setShowBottomTab(false)
    }, [])

    useEffect(() => {
        statusOrder()
    }, [status])

    return (
        <Page>
            <Header showNav={true} />
            <div className="pt-[52px]">
                <div className="fixed w-full">
                    <div className="flex overflow-x-scroll pl-1 pt-2 bg-white border-t-[1px] border-b-[1px] text-nowrap" style={{ whiteSpace: "nowrap" }}>
                        {textStatus.map(item => item.id === idStatus ?
                            <p className="font-[500] px-3 border-b-[2px] border-black pb-2 text-nowrap" style={{ whiteSpace: "nowrap" }} onClick={() => { setStatus(item.type); setIdStatus(item.id) }} key={item.id}>{item.name}</p>
                            : <p className="font-[500] px-3 text-gray-500 text-nowrap" style={{ whiteSpace: "nowrap" }} onClick={() => { setStatus(item.type); setIdStatus(item.id) }} key={item.id}>{item.name}</p>)}
                    </div>
                </div>
                <div className="pt-[45px]">
                    {dataStatusOrder && dataStatusOrder.length > 0 ? dataStatusOrder.map(item => (
                        <div className="p-3 bg-white mb-2" key={item._id}>
                            <p className="text-right font-[500] mb-2">
                                {item.type === "ĐÃ ĐẶT HÀNG" && "Đã đặt hàng"}
                                {item.type === "ĐANG VẬN CHUYỂN" && "Đơn hàng đang được vận chuyển"}
                                {item.type === "ĐÃ VẬN CHUYỂN" && "Đơn hàng đã được vận chuyển"}
                            </p>
                            {item.orders?.map(order => (
                                <div className="mb-3" key={order._id}>
                                    <div className="flex gap-2 text-[14px]">
                                        <div className="w-[90px] h-[85px]">
                                            <img src={`${API_URI}/${order.images}`} alt="" className="w-full h-full" />
                                        </div>
                                        <div className="flex flex-col justify-between flex-1">
                                            <div>
                                                <p className="font-[400] text-black line-clamp-2">{order?.name}</p>
                                                {order?.nameItem && <span className="bg-gray-300 px-2 text-gray-500 text-[12px]">{order.nameItem}</span>}
                                            </div>
                                            <div className="flex justify-between">
                                                <b>{formatPrice(order.price)}</b>
                                                <div className="font-[500]">x{order.quantity}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="text-right">
                                <div className="mb-1">
                                    <span>{item?.orders?.length} mặt hàng: </span>
                                    <b className="">{formatPrice(item.price)}</b>
                                </div>
                                <div className="text-right">
                                    {item.type === "ĐÃ ĐẶT HÀNG" && <button className="border-[1px] px-2 py-1 text-[14px]" onClick={() => onDelete(item._id!)}>Hủy đơn hàng</button>}
                                    {item.type === "ĐANG VẬN CHUYỂN" && <button className="border-[1px] px-2 py-1 text-[14px]">Liên hệ với người bán</button>}
                                    {item.type === "ĐÃ VẬN CHUYỂN" && <button className="border-[1px] px-2 py-1 text-[14px]">Đánh giá</button>}
                                    <button className="border-[1px] px-2 py-1 text-[14px] ml-2" onClick={() => onSeeOrder(item)}>Xem</button>
                                </div>
                            </div>
                        </div>
                    )) : <div className="bg-white p-3 flex flex-col justify-center items-center">
                        <InboxOutlined className="text-[32px] text-gray-500" />
                        <span className=" text-gray-400">Không có đơn hàng!</span>
                    </div>}

                </div>
            </div>
        </Page>
    )
}