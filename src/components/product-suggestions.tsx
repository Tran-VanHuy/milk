import React, { useContext, useEffect } from "react";
import { ProductType } from "../api/products/type";
import { AppContext } from "../context/AppContext";
import { Product } from "./products/product";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "./format-price";

interface AppcontentType {

    products: (limit: number, skip: number, status: string | boolean, category?: string) => void
    dataProducts: ProductType[]
}

type Props = {

    category?: string
}

export const ProductSuggestions = ({ category }: Props) => {

    const { products, dataProducts }: AppcontentType = useContext(AppContext)
    const nav = useNavigate()

    useEffect(() => {
        products(0, 8, true, category)
    }, [])

    return (

        <div className='px-2 pb-2'>
            <div className='grid grid-cols-2 gap-2'>
                {dataProducts && dataProducts.length > 0 ? dataProducts.map((item) => (
                    <div className='col-span-1 bg-white' key={item._id} onClick={() => nav(`/product/${item._id}`)}>
                        <Product img={item.images[0].name} title={item.name} price={formatPrice(item.price)} sale={`Đã bán ${item?.sale || 0}`} discount={item.discount} />
                    </div>
                )) : null}
            </div>
        </div>
    )
}
