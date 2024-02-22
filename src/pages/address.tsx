import { PlusCircleOutlined } from "@ant-design/icons";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Page } from "zmp-ui";
import { AppContext } from "../context/AppContext";
interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
}

export const Address = () => {
    const { setShowBottomTab }: AppcontentType = useContext(AppContext);
    const nav = useNavigate();

    useEffect(() => {

        setShowBottomTab(false)
    }, [])
    return (
        <Page>
            <Header title="Địa chỉ của tôi" className="text-center" />
            <div className="pt-[44px]">
                <div className="p-2 text-[14px] font-[500]"> Địa chỉ</div>
                <div className="pt-4 px-2 bg-white border-b-[1px]">
                    <div className="border-b-[1px] pb-4 mb-4">
                        <div className="flex gap-2 text-[14px]">
                            <span className="font-[500]">Trần Văn Huy</span>
                            <span className="text-gray-500">|</span>
                            <span className="text-gray-500">(+84) 0327448785</span>
                        </div>
                        <p className="text-[12px] text-gray-500">Số nhà 172 - Đường Phan Xích</p>
                        <p className="text-[12px] text-gray-500">Xã Tân Hội, Huyện Đan Phượng, Hà Nội</p>
                        <div className="px-2 border inline-block text-[14px] border-red-500 text-red-500 mt-2">Mặc định</div>
                    </div>
                    <div className="border-b-[1px] pb-4 mb-4">
                        <div className="flex gap-2 text-[14px]">
                            <span className="font-[500]">Trần Văn Huy</span>
                            <span className="text-gray-500">|</span>
                            <span className="text-gray-500">(+84) 0327448785</span>
                        </div>
                        <p className="text-[12px] text-gray-500">Số nhà 172 - Đường Phan Xích</p>
                        <p className="text-[12px] text-gray-500">Xã Tân Hội, Huyện Đan Phượng, Hà Nội</p>
                    </div>
                    <div className="pb-4">
                        <div className="flex gap-2 text-[14px]">
                            <span className="font-[500]">Trần Văn Huy</span>
                            <span className="text-gray-500">|</span>
                            <span className="text-gray-500">(+84) 0327448785</span>
                        </div>
                        <p className="text-[12px] text-gray-500">Số nhà 172 - Đường Phan Xích</p>
                        <p className="text-[12px] text-gray-500">Xã Tân Hội, Huyện Đan Phượng, Hà Nội</p>
                    </div>
                </div>
                <div className="bg-white flex items-center gap-2 justify-center py-5 text-red-500" onClick={() => nav("/new-address")}>
                    <PlusCircleOutlined />
                    <span className="text-[14px]">Thêm Địa Chỉ Mới</span>
                </div>
            </div>
        </Page>
    )
}