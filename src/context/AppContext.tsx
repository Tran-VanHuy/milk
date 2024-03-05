import React, { createContext, useEffect, useState } from "react";
import { getPhoneNumber, getUserInfo } from "zmp-sdk";
import { createApiUser, findOneUser } from "../api/user/user";
import { UserDto } from "../api/user/type";
import { CategoryProducts } from "../api/category-product/type";
import { getAllCategoryProduct } from "../api/category-product/api";
import { ProductType } from "../api/products/type";
import { findByIdProduct, getAllProducts } from "../api/products/api";
import { VoucherType } from "../api/voucher/type";
import { getAllVoucher } from "../api/voucher/api";
import { BannerDto } from "../api/banner/type";
import { getAllBanner } from "../api/banner/api";

export const AppContext: any = createContext({});

export const AppProvider = ({ children }) => {

    const [showBottomTab, setShowBottomTab] = useState<boolean>(false);
    const [dataCategoryProducts, setDataCategoryProducts] = useState<CategoryProducts[]>();
    const [user, setUser] = useState<UserDto>();
    const [dataProducts, setDataProducts] = useState<ProductType>()
    const [dataProductDetail, setDataProductDetail] = useState<ProductType>()
    const [dataVoucher, setDataVoucher] = useState<VoucherType[]>()
    const [dataBanner, setDataBanner] = useState<BannerDto[]>()

    const banner = async (skip: number, limit: number, status: string) => {

        try {

            const res = await getAllBanner(skip, limit, status)
            setDataBanner(res.data);
        } catch (error) {

            console.log({ error });

        }
    }


    const voucher = async (product?: string, status?: string) => {

        try {

            const res = await getAllVoucher(product || "", status)
            if (res.status === 200) {

                setDataVoucher(res.data)
            }
        } catch (error) {
            console.log({ error });


        }
    }

    const getUser = async () => {
        try {
            const { userInfo } = await getUserInfo({});
            let { number } = await getPhoneNumber({});

            const body: UserDto = {
                userId: userInfo.id,
                avatar: userInfo.avatar,
                name: userInfo.name,
                phone: number || "Chưa có"
            }
            await createApiUser(body)
            const user = await findOneUser(body.userId)

            if (user) {

                setUser(user.data.data)
            }

        } catch (error) {
            // xử lý khi gọi api thất bại
            console.log(error);
        }
    };

    const categoryProducts = async (skip: number, limit: number, status: string) => {

        try {

            const res = await getAllCategoryProduct(skip, limit, status);
            setDataCategoryProducts(res.data.data)
        } catch (error) {

            console.log({ error });
        }
    }

    const products = async (limit: number, skip: number, status: boolean) => {

        try {
            const res = await getAllProducts(limit, skip, status)

            setDataProducts(res.data)
        } catch (error) {

            console.log({ error });

        }
    }

    const productDetail = async (_id: string) => {

        try {
            const res = await findByIdProduct(_id)
            setDataProductDetail(res)
        } catch (error) {

            console.log({ error });

        }
    }


    useEffect(() => {
        getUser()
    }, [])
    return (
        <AppContext.Provider value={{
            showBottomTab,
            setShowBottomTab,
            user,
            getUser,
            categoryProducts,
            dataCategoryProducts,
            products,
            dataProducts,
            productDetail,
            dataProductDetail,
            voucher,
            dataVoucher,
            banner,
            dataBanner
        }}>
            {children}
        </AppContext.Provider>
    )
}