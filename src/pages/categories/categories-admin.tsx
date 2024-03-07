import React, { useContext, useEffect, useState } from "react";
import { Box, Header, Page, Sheet } from "zmp-ui";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { DeleteOutlined, EllipsisOutlined, EyeOutlined, FormOutlined, SearchOutlined } from "@ant-design/icons";
import { CategoryProducts } from "../../api/category-product/type";
import axios from "axios";
import { API_URI, CATEGORY_PRODUCT } from "../../api/api";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
    categoryProducts: (skip: number, limit: number, status?: string) => void
    dataCategoryProducts: CategoryProducts[]
}
export const CategoriesAdmin = () => {
    const { setShowBottomTab, categoryProducts, dataCategoryProducts }: AppcontentType = useContext(AppContext);
    const nav = useNavigate();

    const [sheetVisible, setSheetVisible] = useState(false);
    const [idCategory, setIdCategory] = useState<string>(); 3
    const [statusCategory, setStatusCategory] = useState<boolean>();

    const actionSheet = async (action: string) => {

        if (action === "DELETE") {

            const res = await axios.delete(`${CATEGORY_PRODUCT.DELETE}/${idCategory}`)
            if (res?.data?.status === 200) {
                categoryProducts(0, 8)
            }
        } else {

            const res = await axios.put(`${CATEGORY_PRODUCT.UPDATE}/${idCategory}`, { status: !statusCategory })
            if (res?.data?.status === 200) {
                categoryProducts(0, 8)
            }
        }
        setSheetVisible(false)
    }

    useEffect(() => {

        setShowBottomTab(false)
        categoryProducts(0, 8)
    }, [])
    return (
        <Page className="px-2">
            <Header title="Danh sách danh mục" onBackClick={() => nav("/setting")} />
            <div className="pt-[50px] mb-3">
                <div className="bg-white flex gap-2 justify-between">
                    <div className='relative'>
                        <div className='absolute top-0 bottom-0 left-2 flex items-center justify-center'>
                            <SearchOutlined />
                        </div>
                        <input type="text" placeholder="Nhập tên danh mục" className='py-2 pl-[30px] pr-2 w-full' />
                    </div>
                    <button className="bg-red-500 px-2 rounded text-white">Tìm kiếm</button>
                </div>
            </div>
            <button className="bg-red-500 px-2 rounded text-white py-2 mb-2" onClick={() => nav("create")}>Thêm mới</button>
            <div className="d-lfex flex-col gap-2 mb-2">
                {dataCategoryProducts && dataCategoryProducts.length > 0 && dataCategoryProducts.map(item => (
                    <div className="flex justify-between bg-white mb-2 p-2" key={item._id}>
                        <div className="flex gap-2" onClick={() => nav(`update/${item._id}`)}>
                            <img src={`${API_URI}/${item.image}`} alt="" className="w-[90px] h-[90px] rounded-xl" />
                            <div className="flex flex-col justify-between">
                                <div>
                                    <p className="font-medium mb line-clamp-2">{item?.name}</p>
                                </div>
                                <span className="text-[14px]">Trạng thái: {item.status === true ? "Hiển thị" : "ẩn"}</span>
                            </div>
                        </div>
                        <div onClick={() => { setSheetVisible(true); setIdCategory(item._id); setStatusCategory(item.status) }}>
                            <EllipsisOutlined />
                        </div>
                    </div>
                ))}

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
                        <div className="flex items-center gap-2 border-b-[1px] pb-4 mb-4" onClick={() => actionSheet("DELETE")}>
                            <DeleteOutlined className="text-[16px] font-[500]" />
                            <span className="text-[16px] font-[500]">Xóa</span>
                        </div>
                        <div className="flex items-center gap-2" onClick={() => actionSheet("UPDATE")}>
                            <EyeOutlined className="text-[16px] font-[500]" />
                            <span className="text-[16px] font-[500]">{statusCategory === true ? "Ẩn" : "Hiển thị"}</span>
                        </div>
                    </div>
                </Box>
            </Sheet>
        </Page>
    )
}