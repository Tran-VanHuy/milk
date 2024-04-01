import React, { useContext, useEffect, useState } from "react";
import { Box, Header, Page, Sheet } from "zmp-ui";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { DeleteOutlined, EllipsisOutlined, SearchOutlined } from "@ant-design/icons";
import { NotificationType } from "../../api/notification/type";
import { API_URI, NOTIFICATION } from "../../api/api";
import moment from "moment";
import axios from "axios";
import { requestDelete } from "../../api/apiRequest";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
    notification: (userId: string) => void,
    dataNotification: NotificationType[]
}
export const NotificationAdmin = () => {

    const { setShowBottomTab, notification, dataNotification }: AppcontentType = useContext(AppContext);
    const nav = useNavigate()

    const [sheetVisible, setSheetVisible] = useState(false);
    const [idNotification, setIdNotification] = useState<string>()

    const onDelete = async () => {

        try {

            const res = await requestDelete(`${NOTIFICATION.DELETE}/${idNotification}`)
            if (res.status === 200) {
                notification("")
            }
            setSheetVisible(false)
        } catch (error) {

        }
    }

    useEffect(() => {
        notification("")
        setShowBottomTab(false)
    }, [])
    return (
        <Page className="p-2">
            <Header title="Danh sách thông báo" onBackClick={() => nav("/setting")} />
            <div className="pt-[50px] mb-3">
                <div className="bg-white flex gap-2 justify-between">
                    <div className='relative'>
                        <div className='absolute top-0 bottom-0 left-2 flex items-center justify-center'>
                            <SearchOutlined />
                        </div>
                        <input type="text" placeholder="Nhập tiêu đề thông báo" className='py-2 pl-[30px] pr-2 w-full' />
                    </div>
                    <button className="bg-red-500 px-2 rounded text-white">Tìm kiếm</button>
                </div>
            </div>
            <button className="bg-red-500 px-2 rounded text-white py-2 mb-2" onClick={() => nav("create")}>Thêm mới</button>
            {dataNotification && dataNotification.length ? dataNotification.map(item => (
                <div className="bg-white p-2 mb-2" key={item._id}>
                    <div className="flex justify-between">
                        <div className="flex gap-2" onClick={() => nav(`update/${item._id}`)}>
                            <img src={`${API_URI}/${item.image}`} alt="" className="w-[90px] h-[90px] rounded-xl" />
                            <div className="flex flex-col justify-between">
                                <div>
                                    <p className="font-medium mb line-clamp-2">{item.title}</p>
                                    <p className="line-clamp-2 text-[14px]">{item.shortContent}</p>
                                </div>
                                <span className="text-[12px] text-gray-[400]">Ngày tạo: {moment(item.createdAt).format("DD-MM-YYYY")}</span>

                            </div>
                        </div>
                        <div onClick={() => { setSheetVisible(true); setIdNotification(item._id) }}>
                            <EllipsisOutlined />
                        </div>
                    </div>
                </div>
            )) : null}

            <Sheet
                visible={sheetVisible}
                onClose={() => setSheetVisible(false)}
                autoHeight
                mask
                handler
                swipeToClose
            >
                <Box>
                    <div className="px-2 pb-[30px]">
                        <div className="flex items-center gap-2 pb-4" onClick={() => onDelete()}>
                            <DeleteOutlined className="text-[16px] font-[500]" />
                            <span className="text-[16px] font-[500]">Xóa</span>
                        </div>
                    </div>
                </Box>
            </Sheet>
        </Page>
    )
}