import React, { createContext, useEffect, useState } from "react";
import { getAccessToken, getPhoneNumber, getUserID, getUserInfo, setStorage } from "zmp-sdk";
import { SignIn, createApiUser, findOneUser } from "../api/user/user";
import { BodySignInType, UserDto } from "../api/user/type";
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
import { getAllOrder } from "../api/order/api";
import { openChat } from 'zmp-sdk/apis';

export const AppContext: any = createContext({});

export const AppProvider = ({ children }) => {

    const [showBottomTab, setShowBottomTab] = useState<boolean>(false);
    const [dataCategoryProducts, setDataCategoryProducts] = useState<CategoryProducts[]>();
    const [user, setUser] = useState<UserDto>();
    const [dataProducts, setDataProducts] = useState<ProductType[]>()
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
    const [idOrder, setIdOrder] = useState<string>()
    const [dataStatusOrder, setDataStatusOrder] = useState<OrderType[]>()
    const [orderCode, setOrderCode] = useState<string>("")
    const [accessToken, setAccessToken] = useState<string>()

    const openChatScreen = async (user: UserDto) => {
        // try {
        //     await openChat({
        //         type: "user",
        //         id: user?.userId,
        //         message: "Xin Chào",
        //     });
        // } catch (error) {
        //     // xử lý khi gọi api thất bại
        //     console.log(error);
        // }
    };

    const order = async (skip: number, user: UserDto, status: string) => {
        try {

            const res = await getAllOrder(skip, 6, user?.role! !== "ADMIN" ? user?.userId : "", status === "all" ? "" : status)
            if (res?.status === 200) {
                let data = res.data;
                if (skip !== 0) {

                    if (dataStatusOrder && dataStatusOrder?.length > 0) {
                        const paging: any = [...dataStatusOrder, res.data]
                        data = paging.flat()
                    }
                }
                setDataStatusOrder(data)
            }
        } catch (error) {

            console.log({ error });

        }
    }

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
                role: "USER",
                notification: false
            }
            await createApiUser(body)
            const res = await findOneUser(body.userId)

            if (res.status === 200) {


                if (res.data.notification !== user?.notification || user?.role !== res.data.role || res.data.address.length !== user?.address?.length) {
                    setUser(res.data)
                }
            }

        } catch (error) {
            // xử lý khi gọi api thất bại
            console.log(error);
        }
    };

    const signIn = async () => {
        try {
            if (user) {
                const body: BodySignInType = {
                    userId: user.userId
                }
                const signIn = await SignIn(body)
                if (signIn?.status === 200) {

                    const { errorKeys } = await setStorage({
                        data: {
                            accessToken: signIn.data.accessToken,

                        }
                    });
                }
            }

        } catch (error) {

        }
        if (user) {

        }
    }

    const categoryProducts = async (skip: number, limit: number, status: string) => {

        try {

            const res = await getAllCategoryProduct(skip, limit, status);
            setDataCategoryProducts(res.data.data)
        } catch (error) {

            console.log({ error });
        }
    }

    const products = async (skip: number, limit: number, status: string, category?: string) => {

        try {
            const res = await getAllProducts(skip, limit, status, (category || ""))

            if (res?.status === 200) {

                let data = res.data
                if (skip !== 0) {

                    if (dataProducts && dataProducts?.length > 0) {
                        const paging: any = [...dataProducts, res.data]
                        data = paging.flat()
                    }
                }

                setDataProducts(data)
            }

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
            signIn()
        }
    }, [user])

    useEffect(() => {
        if (user) {
            totalCart()
            // openChatScreen(user)
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
            idOrder,
            order,
            dataStatusOrder,
            orderCode,
            setOrderCode,
            accessToken
        }}>
            {children}
        </AppContext.Provider>
    )
}