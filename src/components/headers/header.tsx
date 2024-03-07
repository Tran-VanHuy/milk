import { CloseOutlined, SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

type Props = {
    showNav: boolean
}

interface AppcontentType {
    dataTotalCart: number

}
export const Header = ({ showNav }: Props) => {

    const { dataTotalCart }: AppcontentType = useContext(AppContext)

    const nav = useNavigate()
    return (
        <div className='fixed w-full py-2 z-10 px-[15px] flex justify-between gap-[20px] items-center bg-white'>
            {showNav === true && <CloseOutlined onClick={() => nav("/")} />}
            <div className='flex-1 relative'>
                <div className='absolute top-0 bottom-0 left-2 flex items-center justify-center'>
                    <SearchOutlined />
                </div>
                <input type="text" placeholder="Tìm kiếm sản phẩm" className='py-2 pl-[30px] pr-2 w-full bg-gray-200' />
            </div>
            <div className="mr-[95px]">
                <div className="relative" onClick={() => nav("/cart")}>
                    <ShoppingCartOutlined className=' text-red-500 text-[18px]' />
                    {!dataTotalCart || dataTotalCart !== 0 && <div className="text-[10px] absolute -top-1 -right-2 bg-red-500 bg-opacity-60 text-white rounded-full w-[15px] h-[15px] flex items-center justify-center font-bold">{dataTotalCart}</div>}
                </div>
                {/* <MessageOutlined className='text-red-500 text-[16px]' /> */}
            </div>
        </div>
    )
}