import { EnvironmentOutlined, FieldTimeOutlined, InboxOutlined, MinusOutlined, PlusOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";
import { Page, Header } from "zmp-ui";

export const OverReview = () => {

    return (
        <Page>
            <Header title="Tổng quan đơn hàng" />
            <div className="pt-[44px]">
                <div className="bg-white p-2 flex justify-between mb-2">
                    <div className="flex gap-2">
                        <EnvironmentOutlined className="mt-1" />
                        <div>
                            <p className="font-[500] mb-1">Trần Văn Huy (+84)03*****85</p>
                            <p className="text-gray-500 text-[14px] font-[400]">172 D.Phan Xích</p>
                            <p className="text-gray-500 text-[14px] font-[400]">Tân Hội, Đan Phượng, Hà Nội, Việt Nam</p>
                        </div>
                    </div>
                    <RightOutlined className="text-[12px] text-gray-500 mt-1" />
                </div>
                <div className="bg-white p-2">
                    <div className="flex gap-2 mb-3">
                        <img src="https://bizweb.dktcdn.net/100/466/874/products/9-jpeg-1700457098386.jpg?v=1700457347270" alt="" width={85} height={85} className="rounded" />
                        <div className="flex flex-col justify-between">
                            <div>
                                <p className="line-clamp-1 text-gray-600 font-[400]">JOFANNY tất vớ cao cổ thể thao nam nữ</p>
                                <p className="line-clamp-1 text-gray-500 font-[400] text-[14px]">Tất cổ thấp - xám</p>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-bold">4.230đ</p>
                                    <del className="text-[14px] text-gray-500">9.400đ</del>
                                </div>
                                <div className="flex items-center">
                                    <div className="border-[1px] w-[25px] h-[25px] flex items-center justify-center"><MinusOutlined className="text-[12px]" /></div>
                                    <div className="border-[1px] w-[25px] h-[25px] flex items-center justify-center text-[14px] font-[500]">1</div>
                                    <div className="border-[1px] w-[25px] h-[25px] flex items-center justify-center"><PlusOutlined className="text-[12px]" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mb-3">
                        <div>
                            <p className="text-[14px] text-gray-700 font-[400]">Vận chuyển tiêu chuẩn</p>
                            <div className="flex items-center gap-1">
                                <InboxOutlined className="text-gray-600" />
                                <span className="text-[12px] text-gray-600">Từ Đan Phượng</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <FieldTimeOutlined className="text-gray-600" />
                                <span className="text-[12px] text-gray-600">Ngày giao hàng dự kiến: Feb 23 - Feb 25</span>
                            </div>
                        </div>
                        <span className="text-[12px] text-gray-600 ">22.400đ</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[14px] text-gray-700 font-[400]">Tin nhắn</span>
                        <div className="text-[14px] text-gray-500 font-[400] flex items-center gap-2">
                            <span>Tùy chọn</span>
                            <RightOutlined className="text-[10px] text-gray-500 mt-[2px]" />
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}