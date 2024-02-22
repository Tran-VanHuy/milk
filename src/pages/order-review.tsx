import { CloseOutlined, EnvironmentOutlined, FieldTimeOutlined, InboxOutlined, MinusOutlined, PlusOutlined, RightOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import { Page, Header, Sheet, Box } from "zmp-ui";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
}

export const OverReview = () => {
    const { setShowBottomTab }: AppcontentType = useContext(AppContext);
    const nav = useNavigate()

    const [sheetVisible, setSheetVisible] = useState(false);

    useEffect(() => {

        setShowBottomTab(false)
    }, [])
    return (
        <Page className="pb-[125px]">
            <Header title="Tổng quan đơn hàng" />
            <div className="pt-[44px]">
                <div className="bg-white p-2 flex justify-between mb-2" onClick={() => nav("/address")}>
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
                <div className="bg-white p-2 mb-2">
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
                        <div className="text-[14px] text-gray-500 font-[400] flex items-center gap-2" onClick={() => setSheetVisible(true)}>
                            <span>Tùy chọn</span>
                            <RightOutlined className="text-[10px] text-gray-500 mt-[2px]" />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-2 mb-2">
                    <p className="font-[500] mb-3">Tóm tắt đơn hàng</p>
                    <div className="flex flex-col gap-2 text-[14px]">
                        <div className="flex justify-between text-gray-600">
                            <span>Tổng phụ</span>
                            <span>4.230đ</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Vận chuyển</span>
                            <span>10.000đ</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Tổng</span>
                            <span className="font-[500] text-black">26.630đ</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-2 mb-2">
                    <p className="font-[500] mb-3">Phương thức thanh toán</p>
                    <div className="flex gap-2 text-[14px] justify-between">
                        <div>
                            <span className="bg-green-600 text-white text-[10px] font-bold px-1 rounded inline-block">COD </span>
                            <span className="text-[14px] text-gray-600 font-[500]"> Thanh toán bằng tiền mặt (COD)</span>
                        </div>
                        <input type="radio" checked />
                    </div>
                </div>
            </div>
            <div className="px-2 grid grid-cols-1 gap-2 bg-white absolute bottom-0 w-full pb-[40px] pt-[20px] border-t-[1px]">
                <div className="flex justify-between text-[16px]">
                    <b>Tổng</b>
                    <b>26.630đ</b>
                </div>
                <div className=" bg-red-500 text-center py-2 rounded text-white font-bold">Đặt hàng</div>
            </div>
            <Sheet
                visible={sheetVisible}
                onClose={() => setSheetVisible(false)}
                autoHeight
                mask
                handler
                swipeToClose
            >
                <Box p={4} className="custom-bottom-sheet" flex flexDirection="column">
                    <div className="bottom-sheet-cover flex gap-3 justify-center items-center relative">
                        <div className="flex-fill text-center">
                            <b>Tin nhắn</b>
                        </div>
                        <CloseOutlined className=" absolute right-0 text-[12px]" onClick={() => setSheetVisible(false)} />
                    </div>
                    <Box mt={4} mb={5} >
                        <div className="relative">
                            <textarea className="w-full border-[1px] rounded p-2" rows={5} placeholder="Gửi tin nhắn cho người bán" maxLength={200}></textarea>
                            <span className="absolute right-2 bottom-2 text-[10px] text-gray-500">0/200</span>
                        </div>
                    </Box>

                    <div className="pb-4">
                        <div className="bg-red-500 text-white font-medium text-center py-2 rounded-lg">Lưu</div>
                    </div>
                </Box>
            </Sheet>
        </Page>
    )
}