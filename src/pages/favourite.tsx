import { EllipsisOutlined, HeartOutlined, ShareAltOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import { Box, Header, Page, Sheet } from "zmp-ui";
import { AppContext } from "../context/AppContext";
interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
}
export const Favourite = () => {
    const { setShowBottomTab }: AppcontentType = useContext(AppContext);
    const [sheetVisible, setSheetVisible] = useState(false);

    useEffect(() => {

        setShowBottomTab(true)
    }, [])
    return (
        <Page>
            <Header title="Yêu thích (30)" />
            <div className="pt-[44px] bg-white pb-4">
                <div className="pl-2 pr-4 pt-5">
                    <div className="flex gap-2">
                        <img src="https://bizweb.dktcdn.net/100/466/874/products/0918-ss9656-large-jpeg.jpg?v=1696388119390" alt="" className="w-[80px] h-[80px] rounded-lg" />
                        <div className="flex flex-col justify-between flex-1">
                            <p className="text-gray-500 font-[400] line-clamp-2">Giày second chunky day unisex</p>
                            <div className="flex justify-between items-center">
                                <b>100.000đ</b>
                                <div className="w-[30px]" onClick={() => { setSheetVisible(true) }}><EllipsisOutlined /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pl-2 pr-4 pt-5">
                    <div className="flex gap-2">
                        <img src="https://bizweb.dktcdn.net/100/466/874/products/0918-ss9656-large-jpeg.jpg?v=1696388119390" alt="" className="w-[80px] h-[80px] rounded-lg" />
                        <div className="flex flex-col justify-between flex-1">
                            <p className="text-gray-500 font-[400] line-clamp-2">Giày second chunky day unisex</p>
                            <div className="flex justify-between items-center">
                                <b>100.000đ</b>
                                <div className="w-[30px]" onClick={() => { setSheetVisible(true) }}><EllipsisOutlined /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pl-2 pr-4 pt-5">
                    <div className="flex gap-2">
                        <img src="https://bizweb.dktcdn.net/100/466/874/products/0918-ss9656-large-jpeg.jpg?v=1696388119390" alt="" className="w-[80px] h-[80px] rounded-lg" />
                        <div className="flex flex-col justify-between flex-1">
                            <p className="text-gray-500 font-[400] line-clamp-2">Giày second chunky day unisex</p>
                            <div className="flex justify-between items-center">
                                <b>100.000đ</b>
                                <div className="w-[30px]" onClick={() => { setSheetVisible(true) }}><EllipsisOutlined /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pl-2 pr-4 pt-5">
                    <div className="flex gap-2">
                        <img src="https://bizweb.dktcdn.net/100/466/874/products/0918-ss9656-large-jpeg.jpg?v=1696388119390" alt="" className="w-[80px] h-[80px] rounded-lg" />
                        <div className="flex flex-col justify-between flex-1">
                            <p className="text-gray-500 font-[400] line-clamp-2">Giày second chunky day unisex</p>
                            <div className="flex justify-between items-center">
                                <b>100.000đ</b>
                                <div className="w-[30px]" onClick={() => { setSheetVisible(true) }}><EllipsisOutlined /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Sheet
                visible={sheetVisible}
                onClose={() => setSheetVisible(false)}
                autoHeight
                mask
                handler
                swipeToClose
            >
                <Box>
                    <div className="px-2 pb-[30px]">
                        <div className="flex items-center gap-2 border-b-[1px] pb-4 mb-4" onClick={() => setSheetVisible(false)}>
                            <ShareAltOutlined className="text-[16px] font-[500]" />
                            <span className="text-[16px] font-[500]">Chia sẻ</span>
                        </div>
                        <div className="flex items-center gap-2" onClick={() => setSheetVisible(false)}>
                            <HeartOutlined className="text-[16px] font-[500]" />
                            <span className="text-[16px] font-[500]">Xóa khỏi thư mục yêu thích</span>
                        </div>
                    </div>
                </Box>
            </Sheet>

        </Page>
    )
}