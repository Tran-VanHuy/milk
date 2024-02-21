import { CloseOutlined, MessageOutlined, SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    showNav: boolean,
    typeNav?: string
}
export const Header = ({ showNav, typeNav }: Props) => {

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
            <div className=''>
                <ShoppingCartOutlined className='pr-[10px] text-red-500 text-[16px]' />
                <MessageOutlined className='text-red-500 text-[16px]' />
            </div>
        </div>
    )
}