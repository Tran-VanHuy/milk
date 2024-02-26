import { PlusCircleOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Page } from "zmp-ui";
import { AppContext } from "../context/AppContext";
import { AddressDto, UserDto } from "../api/user/type";
interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>,
    user: UserDto,
    getUser: () => void
}

export const Address = () => {

    const { setShowBottomTab, user, getUser }: AppcontentType = useContext(AppContext);
    const nav = useNavigate();

    useEffect(() => {

        setShowBottomTab(false)
        getUser()
    }, [])
    return (
        <Page>
            <Header title="Địa chỉ của tôi" className="text-center" />
            <div className="pt-[44px]">
                <div className="p-2 text-[14px] font-[500]"> Địa chỉ</div>
                <div className="pt-4 px-2 bg-white">
                    {user && user.address && user.address.length > 0 && user?.address?.map((item, index) => (
                        <div className="border-b-[1px] pb-4 mb-4 [&:last-child]:mb-0" key={index}>
                            <div className="flex gap-2 text-[14px]">
                                <span className="font-[500]">{item?.name}</span>
                                <span className="text-gray-500">|</span>
                                <span className="text-gray-500">(+84) {item.phone}</span>
                            </div>
                            <p className="text-[12px] text-gray-500">{item.specificAddress}</p>
                            <p className="text-[12px] text-gray-500">Xã {item.commune}, Huyện {item.district}, {item.city}</p>
                            {item.default && <div className="px-2 border inline-block text-[14px] border-red-500 text-red-500 mt-2">Mặc định</div>}
                        </div>
                    ))}
                </div>
                <div className="bg-white flex items-center gap-2 justify-center py-5 text-red-500" onClick={() => nav("/new-address")}>
                    <PlusCircleOutlined />
                    <span className="text-[14px]">Thêm Địa Chỉ Mới</span>
                </div>
            </div>
        </Page>
    )
}