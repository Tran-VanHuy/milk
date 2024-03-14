import { CloseOutlined, SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "zmp-ui";
import { AppContext } from "../context/AppContext";
import { ProductSuggestions } from "../components/product-suggestions";
import { searchProducts } from "../api/products/api";
import { SearchProductsType } from "../api/products/type";
interface AppcontentType {
    dataTotalCart: number
    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>,

}
export const Search = () => {
    const { dataTotalCart, setShowBottomTab }: AppcontentType = useContext(AppContext)
    const [inputSearch, setInputSearch] = useState<string>("");
    const [dataSearchProducts, setDataProducts] = useState<SearchProductsType[]>()

    const nav = useNavigate()

    const search = async () => {

        try {

            const res = await searchProducts(inputSearch);

            if (res.status === 200) {
                if (res.data.length > 0) {
                    setDataProducts(res.data)
                }
            }
        } catch (error) {

        }
    }
    useEffect(() => {

        setShowBottomTab(false)
    }, [])

    useEffect(() => {
        if (inputSearch) {
            search()
        }
    }, [inputSearch])
    return (
        <Page className="!overflow-hidden">
            <div className='w-full py-2 z-10 px-[15px] flex justify-between gap-[20px] items-center bg-white border-b-[1px]'>
                <CloseOutlined onClick={() => nav("/")} />
                <div className='flex-1 relative'>
                    <div className='absolute top-0 bottom-0 right-2 flex items-center justify-center'>
                        <SearchOutlined />
                    </div>
                    <input type="text" placeholder="Tìm kiếm sản phẩm" className='py-2 pl-2 pr-[30px] w-full bg-gray-200' onChange={(e) => setInputSearch(e.target.value)} />
                </div>
                <div className="mr-[95px]">
                    <div className="relative" onClick={() => nav("/cart")}>
                        <ShoppingCartOutlined className=' text-red-500 text-[18px]' />
                        {!dataTotalCart || dataTotalCart !== 0 && <div className="text-[10px] absolute -top-1 -right-2 bg-red-500 bg-opacity-60 text-white rounded-full w-[15px] h-[15px] flex items-center justify-center font-bold">{dataTotalCart}</div>}
                    </div>
                </div>
            </div>
            <div className="bg-white mb-2">
                {dataSearchProducts && dataSearchProducts.length > 0 ? dataSearchProducts.map(item => (
                    <div className="px-4 py-2  border-b-[1px]" onClick={() => nav(`/product/${item._id}`)}>
                        <p className="font-[500] line-clamp-1" key={item._id}>{item.name}</p>
                    </div>
                )) : <>
                    <div className="h-[150px] flex justify-center items-center text-gray-500 font-[500]">
                        Vui lòng nhập từ khóa...!
                    </div>
                </>}
            </div>

            <div>
                <div className="bg-white text-red-600 px-2 mb-2 py-1 font">
                   <b> Gợi ý sản phẩm</b>
                </div>
                <div className="max-h-[450px] overflow-auto">
                    <ProductSuggestions />
                </div>
            </div>
        </Page>
    )
}