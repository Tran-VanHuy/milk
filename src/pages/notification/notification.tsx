import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Page } from "zmp-ui";
import { AppContext } from "../../context/AppContext";
import { NotificationType } from "../../api/notification/type";
import { API_URI } from "../../api/api";
import moment from "moment";
import { UserDto } from "../../api/user/type";
interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
    notification: (userId: string) => void,
    dataNotification: NotificationType[]
    user: UserDto
}
export const Notificaiton = () => {

    const { setShowBottomTab, notification, dataNotification, user }: AppcontentType = useContext(AppContext);
    const nav = useNavigate();

    useEffect(() => {
        notification(user.userId)
        setShowBottomTab(true)
    }, [])
    return (
        <Page>
            <Header title="Thông báo" showBackIcon={false} className="text-center" />
            <div className="pt-[44px] bg-white">
                <div className="grid grid-cols-2 text-center mb-2">
                    <p className="col-span-1 py-2 border-b-[2px] border-black font-[500]">Tin mới</p>
                    <p className="col-span-1 py-2  border-b-[2px] text-gray-500 font-[500]">Đơn hàng</p>
                </div>
                {dataNotification && dataNotification.length > 0 ?
                    dataNotification.map(item => (
                        <div className="py-2 px-4" key={item._id}>
                            <div className="flex gap-3 border-b-[1px] pb-2 [&:last-child]:border-0">
                                <img src={`${API_URI}/${item.image}`} alt="" className="w-[45px] h-[45px]" />
                                <div onClick={() => nav(item?.link || `/product/${item.productId}`)}>
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
            </div>
        </Page>
    )

}