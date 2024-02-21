import React from "react";

type Props = {

    img: string,
    title: string,
    price: string,
    sale: string
}

export const Product = ({ img, title, price, sale }: Props) => {

    return (
        <>
            <div className='relative'>
                <img src={img} alt="" />
            </div>
            <div className='p-2'>
                <p className='text-[14px] font-medium mb-1'>{title}</p>
                <div className='bg-yellow-600 inline px-2 py-[1px] text-[12px] text-white'> 1% Giảm</div>
                <div className='flex justify-between mt-1'>
                    <p className='text-red-600 font-medium'>{price}</p>
                    <p className='text-[10px] font-medium'>{sale}</p>
                </div>
            </div>
        </>
    )
}