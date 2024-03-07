import { DeleteOutlined, EllipsisOutlined, EyeOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Header, Page, Sheet } from "zmp-ui";
import { AppContext } from "../../context/AppContext";
import { BannerDto } from "../../api/banner/type";
import axios from "axios";
import { API_URI, BANNER } from "../../api/api";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
    banner: (skip: number, limit: number, status?: string) => void
    dataBanner: BannerDto[]
}
export const BannerAdmin = () => {

    const { setShowBottomTab, banner, dataBanner }: AppcontentType = useContext(AppContext);
    const nav = useNavigate()

    const [sheetVisible, setSheetVisible] = useState(false);
    const [idBanner, setIdBanner] = useState<string>();

    const actionSheet = async (action: string) => {
        try {
            if (action === "DELETE") {

                const res = await axios.delete(`${BANNER.DELETE}/${idBanner}`)
                if (res?.data?.status === 200) {
                    banner(0, 8)
                }
            }
            setSheetVisible(false)
        } catch (error) {

            console.log({ error });
        }
    }

    useEffect(() => {

        setShowBottomTab(false)
        banner(0, 8)
    }, [])
    return (
        <Page className="p-2">
            <Header title="Danh sách banner" onBackClick={() => nav("/setting")} />
            <div className="pt-[50px]">
                <button className="bg-red-500 px-2 rounded text-white py-2 mb-2" onClick={() => nav("create")}>Thêm mới</button>
                {dataBanner && dataBanner.length > 0 && dataBanner.map(item => (
                    <div className="bg-white p-2 relative mb-2" key={item._id}>
                        <img src={`${API_URI}/${item.name}`} alt="" className="w-full h-[200px] rounded-xl" onClick={() => nav(`update/${item._id}`)} />
                        <div onClick={() => { setSheetVisible(true); setIdBanner(item._id) }} className="bg-white absolute top-0 right-[20px] px-2 py-1 rounded-lg bg-opacity-90">
                            <EllipsisOutlined className="text-[16px]" />
                        </div>
                    </div>
                ))}
            </div>
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
                        <div className="flex items-center gap-2 border-b-[1px] pb-4 mb-4" onClick={() => actionSheet("DELETE")}>
                            <DeleteOutlined className="text-[16px] font-[500]" />
                            <span className="text-[16px] font-[500]">Xóa</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <EyeOutlined className="text-[16px] font-[500]" onClick={() => actionSheet("UPDATE")} />
                            <span className="text-[16px] font-[500]">Ẩn</span>
                        </div>
                    </div>
                </Box>
            </Sheet>
        </Page>
    )
}