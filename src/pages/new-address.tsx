import React, { useContext, useEffect, useState } from "react";
import { Header, Page } from "zmp-ui";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
}
export const NewAddress = () => {
    const { setShowBottomTab }: AppcontentType = useContext(AppContext);
    const nav = useNavigate();

    const [enabled, setEnabled] = useState(false);
    useEffect(() => {

        setShowBottomTab(false)
    }, [])

    return (
        <Page>
            <Header title="Địa chỉ mới" />
            <div className="pt-[44px]">
                <div className="mb-1">
                    <div className="p-2 text-[14px] text-gray-500">Liên hệ</div>
                    <div className="bg-white">
                        <div className="p-2 border-b-[1px]">
                            <input type="text" className="w-full border-none px-2 py-1 text-[14px] font-[500]" placeholder="Họ và tên" />
                        </div>
                        <div className="p-2 border-b-[1px]">
                            <input type="tel" className="w-full border-none px-2 py-1 text-[14px] font-[500]" placeholder="Số điện thoại" />
                        </div>
                    </div>
                </div>
                <div className="mb-1">
                    <div className="p-2 text-[14px] text-gray-500">Địa chỉ</div>
                    <div className="bg-white">
                        <div className="p-2 border-b-[1px]">
                            <input type="text" className="w-full border-none px-2 py-1 text-[14px] font-[500]" placeholder="Địa chỉ cụ thể" />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="p-2 text-[14px] text-gray-500">Cài đặt</div>
                    <div className="bg-white">
                        <div className="p-2 border-b-[1px] flex justify-between items-center">
                            <span className="text-[14px]">Đặt làm mặc định</span>
                            <label className="inline-flex relative items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={enabled}
                                    readOnly
                                />
                                <div
                                    onClick={() => {
                                        setEnabled(!enabled);
                                    }}
                                    className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"
                                ></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="p-2 font-[500] text-center bg-gray-300 mx-2 text-gray-600 text-[14px]">HOÀN THÀNH</div>
            </div>
        </Page>
    )
}