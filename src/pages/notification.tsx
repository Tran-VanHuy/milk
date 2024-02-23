import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Page } from "zmp-ui";
import { AppContext } from "../context/AppContext";
interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
}
export const Notificaiton = () => {
    const { setShowBottomTab }: AppcontentType = useContext(AppContext);
    const nav = useNavigate();

    useEffect(() => {

        setShowBottomTab(true)
    }, [])
    return (
        <Page>
            <Header title="Thông báo" showBackIcon={false} className="text-center" />
            <div className="pt-[44px] bg-white">
                <div className="p-2">
                    <div className="flex gap-3 border-b-[1px] pb-2">
                        <img src="https://down-vn.img.susercontent.com/file/vn-50009109-6817f3cf270fc7a03407f1ad4dca9916" alt="" className="w-[45px] h-[45px]" />
                        <div>
                            <p className="text-[14px] font-[500]">Ngành hàng đời sống sale đậm hôm nay!</p>
                            <div>
                                <p className="text-[14px] text-gray-500">Mã Livestream đến 50.000Đ cực lời</p>
                                <p className="text-[14px] text-gray-500">Mã Livestream đến 50.000Đ cực lời</p>
                                <p className="text-[14px] text-gray-500">Mã Livestream đến 50.000Đ cực lời</p>
                            </div>
                            <span className="text-[12px] text-gray-500">Hôm qua 19:31</span>
                        </div>
                    </div>
                </div>
                <div className="p-2">
                    <div className="flex gap-3 border-b-[1px] pb-2">
                        <img src="https://down-vn.img.susercontent.com/file/vn-50009109-6817f3cf270fc7a03407f1ad4dca9916" alt="" className="w-[45px] h-[45px]" />
                        <div>
                            <p className="text-[14px] font-[500]">Ngành hàng đời sống sale đậm hôm nay!</p>
                            <div>
                                <p className="text-[14px] text-gray-500">Mã Livestream đến 50.000Đ cực lời</p>
                                <p className="text-[14px] text-gray-500">Mã Livestream đến 50.000Đ cực lời</p>
                                <p className="text-[14px] text-gray-500">Mã Livestream đến 50.000Đ cực lời</p>
                            </div>
                            <span className="text-[12px] text-gray-500">Hôm qua 19:31</span>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )

}