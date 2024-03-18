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
                    <div className="text-[14px] border-b-[1px] pb-2 mb-2" onClick={() => nav('list-product-admin')}>Danh sách</div>
                    <div className="text-[14px] border-b-[1px] pb-2 mb-2" onClick={() => nav('categories-admin')}>Danh mục sản phẩm</div>
                    <div className="text-[14px] border-b-[1px] pb-2 mb-2" onClick={() => nav('list-voucher')}>Khuyến mãi (Voucher)</div>
                    <div className="text-[14px]" onClick={() => nav("/status-order/all")}>Danh sách đơn hàng</div>
                </div>
                <div className="p-2 text-[14px] text-gray-500">Truyền thông</div>
                <div className="bg-white p-2">
                    <div className="text-[14px] border-b-[1px] pb-2 mb-2" onClick={() => nav('banner-admin')}>Banner</div>
                    <div className="text-[14px] border-b-[1px] pb-2 mb-2" onClick={() => nav('ads-admin')}>Quảng cáo</div>
                    <div className="text-[14px] border-b-[1px] pb-2 mb-2">Tin tức</div>
                    <div className="text-[14px]" onClick={() => nav("/notification-admin")}>Thông báo</div>
                </div>

            </div>
        </Page>
    )
}