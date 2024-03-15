import React, { createContext, useEffect, useState } from "react";
import { getAccessToken, getPhoneNumber, getUserID, getUserInfo } from "zmp-sdk";
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
import { AdsDto } from "../api/ads/type";
import { getAllAds } from "../api/ads/api";
import { AddressDto } from "../api/address/type";
import { getAddressDefault } from "../api/address/api";
import { BodyInfo, ListInfoOrderType, OrderType } from "../api/order/type";
import { checkTotalCart } from "../api/cart/api";
import { getAllNotification } from "../api/notification/api";
import { NotificationType } from "../api/notification/type";

export const AppContext: any = createContext({});

export const AppProvider = ({ children }) => {

    const [showBottomTab, setShowBottomTab] = useState<boolean>(false);
    const [dataCategoryProducts, setDataCategoryProducts] = useState<CategoryProducts[]>();
    const [user, setUser] = useState<UserDto>();
    const [dataProducts, setDataProducts] = useState<ProductType>()
    const [dataProductDetail, setDataProductDetail] = useState<ProductType>()
    const [dataVoucher, setDataVoucher] = useState<VoucherType[]>()
    const [dataBanner, setDataBanner] = useState<BannerDto[]>()
    const [dataAds, setDataAds] = useState<AdsDto[]>()
    const [dataAddressDefault, setAddressDefault] = useState<AddressDto>()
    const [dataInfoOrder, setDataInfoOrder] = useState<BodyInfo>();
    const [dataTotalCart, setDataTotalCart] = useState<number>()
    const [dataOrder, setDataOrder] = useState<OrderType>()
    const [dataListInfoOrder, setDataListInfoOrder] = useState<ListInfoOrderType>()
    const [typeOrder, setTypeOrder] = useState<number>(1)
    const [dataNotification, setDataNotification] = useState<NotificationType[]>()
    const [statusOrder, setStatusOrder] = useState<string>();
    console.log("statusOrder", statusOrder);
    
    const [idOrder, setIdOrder] = useState<string>()

    const notification = async (userId: string) => {

        try {

            const res = await getAllNotification((userId || ""));
            if (res.status === 200) {

                setDataNotification(res.data)
            }

        } catch (error) {

            console.log({ error });

        }
    }

    const totalCart = async () => {

        try {

            const res = await checkTotalCart(user?.userId!)
            setDataTotalCart(res.data)
        } catch (error) {

            console.log({ error });
        }
    }

    const addressDefault = async (userId: string) => {

        try {
            const res = await getAddressDefault(userId);
            setAddressDefault(res.data)
        } catch (error) {

            console.log({ error });

        }
    }

    const ads = async (skip: number, limit: number, status: string) => {

        try {

            const res = await getAllAds(skip, limit, status);
            setDataAds(res.data)
        } catch (error) {

        }
    }

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
                phone: number || "Chưa có",
                role: "USER"
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

    const products = async (limit: number, skip: number, status: string, category?: string) => {

        try {
            const res = await getAllProducts(limit, skip, status, (category || ""))

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

    useEffect(() => {
        if (user) {
            totalCart()
        }
    }, [user])
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
            dataBanner,
            ads,
            dataAds,
            dataAddressDefault,
            addressDefault,
            setDataInfoOrder,
            dataInfoOrder,
            totalCart,
            dataTotalCart,
            setDataOrder,
            dataOrder,
            setDataListInfoOrder,
            dataListInfoOrder,
            setTypeOrder,
            typeOrder,
            notification,
            dataNotification,
            setStatusOrder,
            statusOrder,
            setIdOrder,
            idOrder
        }}>
            {children}
        </AppContext.Provider>
    )
}