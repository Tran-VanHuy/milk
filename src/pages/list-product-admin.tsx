import { DeleteOutlined, EllipsisOutlined, EyeOutlined, HeartOutlined, SearchOutlined, ShareAltOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import { Box, Header, Page, Sheet } from "zmp-ui";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
}

export const ListProductAdmin = () => {
    const { setShowBottomTab }: AppcontentType = useContext(AppContext);
    const nav = useNavigate();

    const [sheetVisible, setSheetVisible] = useState(false);

    useEffect(() => {

        setShowBottomTab(false)
    }, [])
    return (
        <Page className="px-2">
            <Header title="Danh sách sản phẩm" />
            <div className="pt-[50px] mb-3">
                <div className="bg-white flex gap-2 justify-between">
                    <div className='relative'>
                        <div className='absolute top-0 bottom-0 left-2 flex items-center justify-center'>
                            <SearchOutlined />
                        </div>
                        <input type="text" placeholder="Nhập tên sản phẩm" className='py-2 pl-[30px] pr-2 w-full' />
                    </div>
                    <button className="bg-red-500 px-2 rounded text-white">Tìm kiếm</button>
                </div>
            </div>
            <button className="bg-red-500 px-2 rounded text-white py-2 mb-2" onClick={() => nav("create")}>Thêm mới</button>

            <div>
                <div className="bg-white  p-2">
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270" alt="" className="w-[90px] h-[90px] rounded-xl" />
                            <div className="flex flex-col justify-between">
                                <div>
                                    <p className="font-medium mb line-clamp-2">Giày chunky low second sunday</p>
                                    <span className="text-[12px] text-gray-[400]">Ngày tạo: 01/12/200</span>
                                </div>
                                <b>190.000đ</b>
                            </div>
                        </div>
                        <div onClick={() => { setSheetVisible(true) }}>
                            <EllipsisOutlined />
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
                        <div className="flex items-center gap-2 border-b-[1px] pb-4 mb-4" onClick={() => setSheetVisible(false)}>
                            <DeleteOutlined className="text-[16px] font-[500]" />
                            <span className="text-[16px] font-[500]">Xóa sản phẩm</span>
                        </div>
                        <div className="flex items-center gap-2" onClick={() => setSheetVisible(false)}>
                            <EyeOutlined className="text-[16px] font-[500]" />
                            <span className="text-[16px] font-[500]">Ẩn</span>
                        </div>
                    </div>
                </Box>
            </Sheet>
        </Page>
    )
}