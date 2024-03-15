import React from "react";
import { API_URI } from "../../api/api";

type Props = {

    img: string,
    title: string,
    price: string,
    sale: string,
    discount?: number
}

export const Product = ({ img, title, price, sale, discount }: Props) => {

    return (
        <div className="flex flex-col h-full">
            <div className='relative'>
                <img src={`${API_URI}/${img}`} alt="" className="h-[175px] w-full" />
            </div>
            <div className='flex-1 p-2 flex flex-col justify-between'>
                <div>
                    <p className='text-[14px] font-medium mb-1 line-clamp-2'>{title}</p>
                    {discount !== 0 && <div className='bg-yellow-600 inline px-2 py-[1px] text-[12px] text-white'> {discount}% Giảm</div>}
                </div>
                <div className='flex justify-between mt-1'>
                    <p className='text-red-600 font-medium'>{price}</p>
                    {/* <p className='text-[10px] font-medium'>{sale}</p> */}
                </div>
            </div>
        </div>
    )
}