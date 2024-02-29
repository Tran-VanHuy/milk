import { DeleteOutlined, EllipsisOutlined, EyeOutlined, FormOutlined, HeartOutlined, SearchOutlined, ShareAltOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import { Box, Header, Page, Sheet } from "zmp-ui";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../api/products/type";
import moment from "moment"
import { formatPrice } from "../components/format-price";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
    products: (limit: number, skip: number, status: string) => void
    dataProducts: ProductType[]
}

export const ListProductAdmin = () => {
    const { setShowBottomTab, products, dataProducts }: AppcontentType = useContext(AppContext);
    console.log({ dataProducts });

    const nav = useNavigate();

    const [sheetVisible, setSheetVisible] = useState(false);

    useEffect(() => {

        products(10, 0, "")
        setShowBottomTab(false)
    }, [])
    return (
        <Page className="px-2">
            <Header title="Danh sách sản phẩm" onBackClick={() => nav("/setting")} />
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
                {dataProducts && dataProducts.length > 0 ? dataProducts.map(item => (
                    <div className="bg-white  p-2 mb-2" key={item._id}>
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <img src={item.images[0].name} alt="" className="w-[90px] h-[90px] rounded-xl" />
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <p className="font-medium mb line-clamp-2">{item.name}</p>
                                        <span className="text-[12px] text-gray-[400]">Ngày tạo: {moment(item.createdAt).format('DD-MM-YYYY')}</span>
                                    </div>
                                    <b>{formatPrice(item.price)}</b>
                                </div>
                            </div>
                            <div onClick={() => { setSheetVisible(true) }}>
                                <EllipsisOutlined />
                            </div>
                        </div>
                    </div>
                )) : null}

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