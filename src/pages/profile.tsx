import React, { useContext, useEffect } from "react";
import { Page } from "zmp-ui";
import { AppContext } from "../context/AppContext";
import { AccountBookOutlined, ArrowRightOutlined, ContainerOutlined, EnvironmentOutlined, HeartOutlined, MessageOutlined, RightOutlined, ShoppingCartOutlined, StarOutlined, TruckOutlined, WalletOutlined, WarningOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
}

export const Profile = () => {
    const { setShowBottomTab }: AppcontentType = useContext(AppContext);
    const nav = useNavigate()
    useEffect(() => {

        setShowBottomTab(true)
    }, [])
    return (
        <Page className="pb-[65px]">
            <div className="pt-[65px] pb-3 px-3 bg-orange-500 flex gap-2 relative" style={{ background: "#f53d2d" }}>
                <img src="https://i.pinimg.com/736x/78/90/e1/7890e13d8985d3a5360e3e62831575fd.jpg" alt="" className="rounded-full w-[60px] h-[60px]" />
                <div className="text-white">
                    <p className="font-bold text-[17px]">Trần Văn Huy</p>
                    <p className="text-[14px]">0327448785</p>
                    <p className="text-[14px]">Tân Hội - Đan Phượng - Hà Nội</p>
                </div>
                <div className="absolute right-3 top-2">
                    <ShoppingCartOutlined className='pr-[10px] text-white text-[16px]' />
                    <MessageOutlined className='text-white text-[16px]' />
                </div>
            </div>
            <div className="p-2">
                <div className="bg-white flex  gap-2 items-center p-2 rounded">
                    <WarningOutlined className="text-red-500" />
                    <div className="text-[12px]">
                        Vui lòng không cung cấp thông tin cá nhân cho người khác để bảo vệ tài khoản của bạn
                    </div>
                </div>
            </div>
            <div className="p-2 bg-white mb-2">
                <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-2"><ContainerOutlined className="text-[20px] text-blue-800 pt-1" /> <span className="font-[500]">Đơn mua</span></div>
                    <div className="flex items-center gap-1">
                        <span className="text-[12px] text-gray-600">Xem lịch sử đơn hàng</span>
                        <RightOutlined className="text-[10px] text-gray-600 pt-1" />
                    </div>
                </div>
                <div className="flex justify-between px-2">
                    <div className="text-center">
                        <div>
                            <WalletOutlined className="text-[25px] text-gray-600" />
                        </div>
                        <span className="text-[12px]">Chờ xác nhận</span>
                    </div>
                    <div className="text-center">
                        <div>
                            <TruckOutlined className="text-[25px] text-gray-600" />
                        </div>
                        <span className="text-[12px]">Đang giao hàng</span>
                    </div>
                    <div className="text-center">
                        <div>
                            <TruckOutlined className="text-[25px] text-gray-600" />
                        </div>
                        <span className="text-[12px]">Đã giao hàng</span>
                    </div>
                    <div className="text-center">
                        <div>
                            <StarOutlined className="text-[25px] text-gray-600" />
                        </div>
                        <span className="text-[12px]">Đánh giá</span>
                    </div>
                </div>
            </div>
            <div className="bg-white pt-2">
                <div className="px-2 flex justify-between mb-3">
                    <div className="flex items-center gap-2 font-[500]"><AccountBookOutlined className="text-yellow-500 text-[20px]" /> Mua lại</div>
                    <div className="flex items-center gap-1">
                        <span className="text-[12px] text-gray-600">Xem thêm sản phẩm</span>
                        <RightOutlined className="text-[10px] text-gray-600 pt-1" />
                    </div>
                </div>
                <div className="flex overflow-x-scroll gap-[10px] px-2 pb-2 mb-3">
                    <div className="">
                        <div className="w-[110px] h-[100px] border">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyc3I3u0PNW741NK2HcNY4TfaXwWPgd1jSA&usqp=CAU" alt="" className="w-full h-full" />
                        </div>
                        <p className="text-[12px] text-gray-500">Đã mua 1 lần</p>
                        <b>250.000đ</b>
                    </div>
                    <div className="">
                        <div className="w-[110px] h-[100px] border">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyc3I3u0PNW741NK2HcNY4TfaXwWPgd1jSA&usqp=CAU" alt="" className="w-full h-full" />
                        </div>
                        <p className="text-[12px] text-gray-500">Đã mua 1 lần</p>
                        <b>250.000đ</b>
                    </div>
                    <div className="">
                        <div className="w-[110px] h-[100px] border">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyc3I3u0PNW741NK2HcNY4TfaXwWPgd1jSA&usqp=CAU" alt="" className="w-full h-full" />
                        </div>
                        <p className="text-[12px] text-gray-500">Đã mua 1 lần</p>
                        <b>250.000đ</b>
                    </div>
                    <div className="">
                        <div className="w-[110px] h-[100px] border">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyc3I3u0PNW741NK2HcNY4TfaXwWPgd1jSA&usqp=CAU" alt="" className="w-full h-full" />
                        </div>
                        <p className="text-[12px] text-gray-500">Đã mua 1 lần</p>
                        <b>250.000đ</b>
                    </div>
                </div>
            </div>
            <div className="bg-white p-2">
                <div className="flex items-center gap-2 border-b-[1px] pb-2 mb-2" onClick={() => nav("/address")}>
                    <EnvironmentOutlined />
                    <div className="text-[14px]">Địa chỉ</div>
                </div>
                <div className="flex items-center gap-2 border-b-[1px] pb-2 mb-2"  onClick={() => nav("/favourite")}>
                    <HeartOutlined />
                    <div className="text-[14px]">Đã thích</div>
                </div>
            </div>
        </Page>
    )
}