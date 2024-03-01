import { DeleteOutlined, EllipsisOutlined, EyeOutlined, FormOutlined, HeartOutlined, SearchOutlined, ShareAltOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import { Box, Header, Page, Sheet } from "zmp-ui";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../components/format-price";
import { VoucherType } from "../api/voucher/type";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
    voucher: (product: string, status: string) => void
    dataVoucher: VoucherType[]
}

export const ListVoucherAdmin = () => {
    const { setShowBottomTab, voucher, dataVoucher }: AppcontentType = useContext(AppContext);

    const nav = useNavigate();

    const [sheetVisible, setSheetVisible] = useState(false);

    useEffect(() => {

        setShowBottomTab(false)
        voucher("", "")
    }, [])
    return (
        <Page className="px-2">
            <Header title="Danh sách khuyến mãi" onBackClick={() => nav("/setting")} />
            <div className="pt-[50px] mb-3">
                <div className="bg-white flex gap-2 justify-between">
                    <div className='relative'>
                        <div className='absolute top-0 bottom-0 left-2 flex items-center justify-center'>
                            <SearchOutlined />
                        </div>
                        <input type="text" placeholder="Nhập tên khuyến mãi" className='py-2 pl-[30px] pr-2 w-full' />
                    </div>
                    <button className="bg-red-500 px-2 rounded text-white">Tìm kiếm</button>
                </div>
            </div>
            <button className="bg-red-500 px-2 rounded text-white py-2 mb-2" onClick={() => nav("create")}>Thêm mới</button>


            {dataVoucher && dataVoucher.length > 0 && dataVoucher.map(item => (
                <div className="bg-white  p-2 mb-2">
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <div className="flex flex-col justify-between">
                                <div>
                                    <p className="font-medium mb line-clamp-2">{item.name}</p>
                                    <div className="flex flex-col">
                                        <span className="text-[12px] text-gray-[400]">{item.content}</span>
                                        <span className="text-[12px] text-gray-[400]">Giảm: {formatPrice(item.discount)}</span>
                                        <span className="text-[12px] text-gray-[400]">Đơn hàng tối thiểu: {formatPrice(item.minimum)}</span>
                                        <span className="text-[12px] text-gray-[400]">Trạng thái: {item.status ? "hiện" : "ẩn"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => { setSheetVisible(true) }}>
                            <EllipsisOutlined />
                        </div>
                    </div>
                </div>
            ))}



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
                            <DeleteOutlined className="text-[16px] font-[500]" />
                            <span className="text-[16px] font-[500]">Xóa</span>
                        </div>
                        <div className="flex items-center gap-2 border-b-[1px] pb-4 mb-4" onClick={() => setSheetVisible(false)}>
                            <FormOutlined className="text-[16px] font-[500]" />
                            <span className="text-[16px] font-[500]">Chỉnh sửa</span>
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