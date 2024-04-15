import React, { useContext, useEffect, useRef, useState } from "react";
import { Page } from "zmp-ui";
import { Header } from "../../components/headers/header";
import { AppContext } from "../../context/AppContext";
import { formatPrice } from "../../components/format-price";
import { BodyListInfoOrderType, ItemOrderType, ListInfoOrderType, OrderType } from "../../api/order/type";
import { UserDto } from "../../api/user/type";
import { InboxOutlined } from "@ant-design/icons";
import { API_URI, ORDER } from "../../api/api";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { SheetRating } from "../../components/sheet-rating";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
    setDataListInfoOrder: React.Dispatch<React.SetStateAction<ListInfoOrderType>>
    user: UserDto,
    setTypeOrder: React.Dispatch<React.SetStateAction<number>>
    setStatusOrder: React.Dispatch<React.SetStateAction<string>>
    setIdOrder: React.Dispatch<React.SetStateAction<string>>,
    order: (skip: number, user: UserDto, status: string) => void,
    dataStatusOrder: OrderType[],
    setDataStatusOrder: React.Dispatch<React.SetStateAction<OrderType[]>>
    setOrderCode: React.Dispatch<React.SetStateAction<string>>
}

export const StatusOrder = () => {

    const { setShowBottomTab, user, setDataListInfoOrder, setTypeOrder, setStatusOrder, setIdOrder, order, dataStatusOrder, setOrderCode, setDataStatusOrder }: AppcontentType = useContext(AppContext);
    const { nameStatusOrder } = useParams()
    const nav = useNavigate()
    const listInnerRef: any = useRef();
    const [status, setStatus] = useState<string>(nameStatusOrder || "all");
    const [sheetVisible, setSheetVisible] = useState(false);
    const [dataContentRating, setDataContentRating] = useState<ItemOrderType>()

    const textStatus = [
        {
            id: 1,
            name: "Tất cả",
            type: "all"
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
    const [skip, setSkip] = useState<number>(0)

    const onScroll = () => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            if (scrollTop + clientHeight === scrollHeight) {
                setSkip(skip + 1)
            }
        }
    };


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
                setOrderCode(item.orderCode!)
            }
        }

    }

    const onDelete = async (_id: string) => {

        try {
            const res = await axios.delete(`${ORDER.DELETE}?_id=${_id}&userId=${user.userId}`)
            if (res.data.status === 200) {

                statusOrder(skip, status || "")
            }
        } catch (error) {
            console.log({ error });
        }
    }

    const statusOrder = (paing: number, status: string) => {
            order(paing, user, status)
    }

    const onStatus = (item) => {
        setStatus(item.type);
        statusOrder(0, item.type)
    }

    const contentRating = (item: ItemOrderType) => {
        setSheetVisible(true)
        setDataContentRating(item)
    }

    useEffect(() => {

        setShowBottomTab(false)
    }, [])

    useEffect(() => {
        statusOrder(skip, status || "all")
    }, [skip])

    return (
        <Page onScroll={onScroll} ref={listInnerRef}>
            <Header showNav={true} />
            <div className="pt-[52px]">
                <div className="fixed w-full">
                    <div className="flex overflow-x-scroll pl-1 pt-2 bg-white border-t-[1px] border-b-[1px] text-nowrap" style={{ whiteSpace: "nowrap" }}>
                        {textStatus.map(item => item.type === status ?
                            <p className="font-[500] px-3 border-b-[2px] border-black pb-2 text-nowrap" style={{ whiteSpace: "nowrap" }} onClick={() => onStatus(item)} key={item.id}>{item.name}</p>
                            : <p className="font-[500] px-3 text-gray-500 text-nowrap" style={{ whiteSpace: "nowrap" }} onClick={() => onStatus(item)} key={item.id}>{item.name}</p>)}
                    </div>
                </div>
                <div className="pt-[45px]">
                    {dataStatusOrder && dataStatusOrder.length > 0 ? dataStatusOrder.map(item => (
                        <div className="p-3 bg-white mb-2" key={item._id}>
                            <p className="text-right font-[500] mb-2">
                                {status === "all" && <>
                                {item.type === "ĐÃ ĐẶT HÀNG" && "Đơn hàng đã được đặt"}
                                {item.type === "ĐANG VẬN CHUYỂN" && "Đơn hàng đang được vận chuyển"}
                                {item.type === "ĐÃ VẬN CHUYỂN" && "Đơn hàng đã được vận chuyển"}
                                </> }
                               
                            </p>
                            {item.orders?.map(order => (
                                <div className="mb-3" key={order._id}>
                                    <div className="flex gap-2 text-[14px]">
                                        <div className="w-[90px] h-[85px] md:w-[180px] md:h-[170px]">
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
                                    {status === "ĐÃ VẬN CHUYỂN" && <div className="text-right">
                                      {!order.rating && <button className="border-[1px] px-2 py-1 text-[14px] mt-2" onClick={() => contentRating(order)}>Đánh giá</button>}
                                    </div>}
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
            {dataContentRating && <SheetRating skip={skip} dataContentRating={dataContentRating!} sheetVisible={sheetVisible} setSheetVisible={setSheetVisible}/>}
            
        </Page>
    )
}