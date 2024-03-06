import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Page } from "zmp-ui";
import { AppContext } from "../context/AppContext";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
}

export const Setting = () => {

    const nav = useNavigate()
    const { setShowBottomTab }: AppcontentType = useContext(AppContext);

    useEffect(() => {

        setShowBottomTab(false)
    }, [])

    return (
        <Page>
            <Header title="Cài đặt" onBackClick={() => nav("/profile")}></Header>
            <div className="pt-[44px]">
                <div className="p-2 text-[14px] text-gray-500">Sản phẩm</div>
                <div className="bg-white p-2">
                    <div className="border-b-[1px] pb-2 mb-2" onClick={() => nav('list-product-admin')}>
                        <div className="text-[14px]">Danh sách</div>
                    </div>
                    <div className="border-b-[1px] pb-2 mb-2" onClick={() => nav('categories-admin')}>
                        <div className="text-[14px]">Danh mục sản phẩm</div>
                    </div>
                    <div className="gap-2" onClick={() => nav('list-voucher')}>
                        <div className="text-[14px]">Khuyến mãi (Voucher)</div>
                    </div>
                </div>
                <div className="p-2 text-[14px] text-gray-500">Banner</div>
                <div className="bg-white p-2">
                    <div onClick={() => nav('banner-admin')}>
                        <div className="text-[14px]">Danh sách</div>
                    </div>
                </div>
                <div className="p-2 text-[14px] text-gray-500">Quảng cáo</div>
                <div className="bg-white p-2">
                    <div onClick={() => nav('ads-admin')}>
                        <div className="text-[14px]">Danh sách</div>
                    </div>
                </div>
                <div className="p-2 text-[14px] text-gray-500">Tin tức</div>
                <div className="bg-white p-2">
                    <div>
                        <div className="text-[14px]">Danh sách</div>
                    </div>
                </div>
            </div>
        </Page>
    )
}