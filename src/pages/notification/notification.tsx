import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Page } from "zmp-ui";
import { AppContext } from "../../context/AppContext";
import { NotifiCationOrderType, NotificationType } from "../../api/notification/type";
import { API_URI } from "../../api/api";
import moment from "moment";
import { UserDto } from "../../api/user/type";
import { checkReadNotiOrder, getAllNotificationOrder } from "../../api/notification/api";
interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
    notification: (userId: string) => void,
    dataNotification: NotificationType[]
    user: UserDto,
    setTypeOrder: React.Dispatch<React.SetStateAction<number>>
    setStatusOrder: React.Dispatch<React.SetStateAction<string>>
    setIdOrder: React.Dispatch<React.SetStateAction<string>>
}
export const Notificaiton = () => {

    const { setShowBottomTab, notification, dataNotification, user }: AppcontentType = useContext(AppContext);
    const nav = useNavigate();
    const [dataNotifiCationOrder, setDataNotificationOrder] = useState<NotifiCationOrderType[]>();
    const [nameAction, setNameAction] = useState<string>("Tin mới")

    const action = [
        {

            name: "Tin mới"
        },
        {

            name: "Đơn hàng"
        },
    ]

    const notificationOrder = async (action: string) => {

        try {
            setNameAction(action)

            if (action === "Đơn hàng") {
                const res = await getAllNotificationOrder(user.userId);
                if (res.status === 200) {
                    setDataNotificationOrder(res.data)
                }
            } else {
                notification(user.userId)
            }

        } catch (error) {

            console.log({ error });

        }
    }

    const onDetailNotiOrder = async (id: string) => {
        try {

            await checkReadNotiOrder(id)
            nav("/status-order/ĐÃ ĐẶT HÀNG")

        } catch (error) {

            console.log({ error });
        }
    }

    useEffect(() => {
        notification(user.userId)
        setShowBottomTab(true)
    }, [])
    return (
        <Page>
            <Header title="Thông báo" showBackIcon={false} className="text-center" />
            <div className="pt-[44px] pb-[55px]">
                <div className="grid grid-cols-2 text-center bg-white">
                    {action.map(item => (
                        item.name === nameAction ?
                            <p className="col-span-1 py-2 border-b-[2px] border-black font-[500]" onClick={() => notificationOrder(item.name)} key={item.name}>{item.name}</p> :
                            <p className="col-span-1 py-2  border-b-[2px] text-gray-500 font-[500]" onClick={() => notificationOrder(item.name)} key={item.name}>{item.name}</p>
                    ))}
                </div>
                {nameAction === "Tin mới" && dataNotification && dataNotification.length > 0 ?
                    dataNotification.map(item => (
                        <div className="py-2 px-4 bg-white" key={item._id}>
                            <div className="flex gap-3 border-b-[1px] pb-2 [&:last-child]:border-0">
                                <img src={`${API_URI}/${item.image}`} alt="" className="w-[45px] h-[45px]" />
                                <div className="flex-1" onClick={() => nav(item?.link || `/product/${item.productId}`)}>
                                    <p className="text-[14px] font-[500] line-clamp-2">{item.title}</p>
                                    <div className="text-[14px] text-gray-500 line-clamp-4">
                                        {item.shortContent}
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[12px] text-gray-500">{moment(item.createdAt).format("DD-MM-YYYY")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    : null}

                {nameAction === "Đơn hàng" && dataNotifiCationOrder && dataNotifiCationOrder.length > 0 ?
                    dataNotifiCationOrder.map(item => (
                        <div className="py-2 px-4 border-b-[1px] pb-2 [&:last-child]:border-0 bg-white" key={item._id}>
                            <div className="flex gap-3 " onClick={() => onDetailNotiOrder(item._id)}>
                                <img src={`${item.image}`} alt="" className="w-[45px] h-[45px]" />
                                <div className="flex-1">
                                    {item.readed ? <p className="text-[14px] font-[500] line-clamp-2">{item.title}</p> : <p className="text-[14px] text-red-500 font-[500] line-clamp-2">{item.title}</p>}
                                    <div className="text-[14px] text-gray-500 line-clamp-4">
                                        {item.content}
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[12px] text-gray-500">{moment(item.createdAt).format("DD-MM-YYYY")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    : null}

            </div>
        </Page >
    )

}