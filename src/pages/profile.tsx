import React, { useContext, useEffect, useRef, useState } from "react";
import { Page } from "zmp-ui";
import { AppContext } from "../context/AppContext";
import { AccountBookOutlined, ContainerOutlined, EnvironmentOutlined, HeartOutlined, MessageOutlined, RightOutlined, SettingOutlined, ShoppingCartOutlined, StarOutlined, TruckOutlined, WalletOutlined, WarningOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { AddressDto, UserDto } from "../api/user/type";
import { boughtOrder, quantityType } from "../api/order/api";
import { API_URI } from "../api/api";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>,
    user: UserDto
}

type QuantityTypeOrderType = {

    ordered: number,
    beingTransported: number,
    shipped: number
}

type BoughtOrderType = {
    productId: string
    name: string
    images: string
    count: number
}

export const Profile = () => {

    const { setShowBottomTab, user }: AppcontentType = useContext(AppContext);
    const nav = useNavigate()

    const [addressDefault, setAddressDefault] = useState<AddressDto>();
    const [dataQuantityTypeOrder, setDataQuantityTypeOrder] = useState<QuantityTypeOrderType>()
    const [dataBoughtOrder, setDataBoughtOrder] = useState<BoughtOrderType[]>()

    const fileInputRef: any = useRef(null);

    const handleDivClick = () => {
        // Kích thích sự kiện click của input type="file"
        if (fileInputRef.current) {
            fileInputRef.current.click();

        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        // Xử lý file tại đây (ví dụ: mở file)
        console.log('Selected File:', selectedFile);
    };
    const profile = () => {

        if (user && user.address && user.address.length > 0) {

            const find = user.address.find(item => item.default === true)
            setAddressDefault(find)
        }
    }

    const quantityTypeOrder = async () => {

        try {

            const res = await quantityType(user.userId)
            if (res.status === 200) {

                setDataQuantityTypeOrder(res.data)
            }

        } catch (error) {

            console.log({ error });

        }
    }

    const bought = async () => {

        try {

            const res = await boughtOrder(user.userId)
            if (res) {
                setDataBoughtOrder(res)
            }
        } catch (error) {

            console.log({ error });
        }
    }

    useEffect(() => {

        bought()
        setShowBottomTab(true)
        profile()
        quantityTypeOrder()
    }, [])
    return (
        <Page className="pb-[65px]">
            <div className="pt-[65px] pb-3 px-3 bg-orange-500 flex gap-2 relative" style={{ background: "#f53d2d" }}>
                <div className="relative overflow-hidden">
                    <img src={user?.avatar} alt="" className="rounded-full w-[60px] h-[60px] object-cover" onClick={handleDivClick} />

                    <div className="absolute bottom-0 right-0 left-0 bg-black bg-opacity-30 text-center" >
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                            className="text-white text-[12px]"
                        />
                    </div>
                </div>
                <div className="text-white">
                    <p className="font-bold text-[17px]">{addressDefault?.name || "Chưa cập nhật"}</p>
                    <p className="text-[14px]">{addressDefault?.phone}</p>
                    <p className="text-[14px] pr-5 line-clamp-1">{addressDefault?.commune}, {addressDefault?.district}, {addressDefault?.city}</p>
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
                    <div className="flex items-center gap-2"><ContainerOutlined className="text-[20px] text-blue-800 pt-1" /> <span className="font-[500]">{user.role === "ADMIN" ? "Đơn hàng" : "Đơn mua"}</span></div>
                    <div className="flex items-center gap-1" onClick={() => nav("/status-order/all")}>
                        <span className="text-[12px] text-gray-600">Xem lịch sử đơn hàng</span>
                        <RightOutlined className="text-[10px] text-gray-600 pt-1" />
                    </div>
                </div>
                <div className="flex justify-between px-2">
                    <div className="text-center">
                        <div className="relative" onClick={() => nav("/status-order/ĐÃ ĐẶT HÀNG")}>
                            <WalletOutlined className="text-[25px] text-gray-600" />
                            {dataQuantityTypeOrder?.ordered !== 0 && <div className="rounded-full w-[15px] h-[15px] bg-red-500 text-[10px] text-white flex justify-center items-center absolute -top-[5px] right-[18px]">{dataQuantityTypeOrder?.ordered}</div>}
                        </div>
                        <span className="text-[12px]">Đã đặt hàng</span>
                    </div>
                    <div className="text-center">
                        <div className="relative" onClick={() => nav("/status-order/ĐANG VẬN CHUYỂN")}>
                            <TruckOutlined className="text-[25px] text-gray-600" />
                            {dataQuantityTypeOrder?.beingTransported !== 0 && <div className="rounded-full w-[15px] h-[15px] bg-red-500 text-[10px] text-white flex justify-center items-center absolute -top-[5px] right-[20px]">{dataQuantityTypeOrder?.beingTransported}</div>}
                        </div>
                        <span className="text-[12px]">Đang giao hàng</span>
                    </div>
                    <div className="text-center">
                        <div className="relative" onClick={() => nav("/status-order/ĐÃ VẬN CHUYỂN")}>
                            <StarOutlined className="text-[25px] text-gray-600" />
                            {dataQuantityTypeOrder?.shipped !== 0 && <div className="rounded-full w-[15px] h-[15px] bg-red-500 text-[10px] text-white flex justify-center items-center absolute -top-[5px] right-[8px]">{dataQuantityTypeOrder?.shipped}</div>}

                        </div>
                        <span className="text-[12px]">Đánh giá</span>
                    </div>
                </div>
            </div>
            {dataBoughtOrder && dataBoughtOrder.length > 0 &&
                <div className="bg-white pt-2">
                    <div className="px-2 flex justify-between mb-3">
                        <div className="flex items-center gap-2 font-[500]"><AccountBookOutlined className="text-yellow-500 text-[20px]" /> {user.role === "ADMIN" ? "Khách hàng đã mua" : "Mua lại"}</div>
                        <div className="flex items-center gap-1">
                            <span className="text-[12px] text-gray-600">Xem thêm sản phẩm</span>
                            <RightOutlined className="text-[10px] text-gray-600 pt-1" />
                        </div>
                    </div>
                    <div className="flex overflow-x-scroll gap-[10px] px-2 pb-2 mb-3">
                        {dataBoughtOrder.map(item => (
                            <div onClick={() => nav(`/product/${item.productId}`)} key={item.productId}>
                                <div className="w-[110px] h-[100px] border">
                                    <img src={`${API_URI}/${item.images}`} alt="" className="w-full h-full" />
                                </div>
                                <p className="text-[12px] text-gray-500">Đã mua {item.count} lần</p>
                            </div>
                        ))}
                    </div>
                </div>}

            <div className="bg-white p-2">
                {user.role === "ADMIN" ?
                    <>
                        <div className="flex items-center gap-2 border-b-[1px] pb-2 mb-2" onClick={() => nav("/address")}>
                            <EnvironmentOutlined />
                            <div className="text-[14px]">Địa chỉ</div>
                        </div>
                        <div className="flex items-center gap-2 border-b-[1px] pb-2 mb-2" onClick={() => nav("/favourite")}>
                            <HeartOutlined />
                            <div className="text-[14px]">Đã thích</div>
                        </div>
                        <div className="flex items-center gap-2" onClick={() => nav("/setting")}>
                            <SettingOutlined />
                            <div className="text-[14px]">Cài đặt</div>
                        </div>
                    </> :
                    <>
                        <div className="flex items-center gap-2 border-b-[1px] pb-2 mb-2" onClick={() => nav("/address")}>
                            <EnvironmentOutlined />
                            <div className="text-[14px]">Địa chỉ</div>
                        </div>
                        <div className="flex items-center gap-2" onClick={() => nav("/favourite")}>
                            <HeartOutlined />
                            <div className="text-[14px]">Đã thích</div>
                        </div>
                    </>}

            </div>
        </Page>
    )
}