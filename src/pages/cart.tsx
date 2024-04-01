import { DeleteOutlined, EllipsisOutlined, InboxOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, Header, Page, Sheet } from "zmp-ui";
import { AppContext } from "../context/AppContext";
import { formatPrice } from "../components/format-price";
import axios from "axios";
import { API_URI, CART, ORDER } from "../api/api";
import { UserDto } from "../api/user/type";
import { CartDto } from "../api/cart/type";
import { useNavigate } from "react-router-dom";
import { BodyListInfoOrderType, ListInfoOrderType } from "../api/order/type";
import { requestGet } from "../api/apiRequest";
import 'react-toastify/dist/ReactToastify.css';

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>,
    user: UserDto,
    setDataListInfoOrder: React.Dispatch<React.SetStateAction<ListInfoOrderType>>
    totalCart: () => void
    setTypeOrder: React.Dispatch<React.SetStateAction<number>>
}
export const Cart = () => {

    const { setShowBottomTab, user, setDataListInfoOrder, totalCart, setTypeOrder }: AppcontentType = useContext(AppContext);
    const nav = useNavigate()
    const listInnerRef: any = useRef();

    const [sheetVisible, setSheetVisible] = useState(false);
    const [dataCart, setDataCart] = useState<CartDto[]>();
    const [idCart, setIdCart] = useState<string>()
    const [skip, setSkip] = useState<number>(0)

    let arrayDataOrder: CartDto[] = [];

    const onScroll = () => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            if (scrollTop + clientHeight === scrollHeight) {
                setSkip(skip + 1)
                // This will be triggered after hitting the last element.
                // API call should be made here while implementing pagination.
            }
        }
    };

    const cart = async () => {

        try {

            const res = await requestGet(`${CART.GET_ALL}?userId=${user.userId}&skip=${skip}&limit=7`)

            if (res?.status === 200) {
                let data = res.data
                if (skip !== 0) {
                    if (dataCart && dataCart.length > 0) {
                        const paing: any = [...dataCart, res.data]
                        data = paing.flat()
                    }
                }
                setDataCart(data)
            }
        } catch (error) {

            console.log({ error });
        }
    }

    const onCheck = async (item: CartDto) => {

        const includeData = arrayDataOrder.find(data => data._id === item._id)

        if (includeData === undefined) {

            arrayDataOrder.push(item)
        } else {

            const new_array = arrayDataOrder.filter(data => data._id !== item._id);
            arrayDataOrder = new_array
        }
    }

    const onBuy = async () => {
        const body: BodyListInfoOrderType = {
            userId: user.userId,
            products: arrayDataOrder.map(item => ({
                productId: item.productId,
                quantity: item.quantity || 1,
                msId: item.msId,
                szId: item.szId
            }))
        }
        if (body.products.length > 0) {
            const res = await axios.post(ORDER.LIST_INFO, body)
            if (res.data.status === 200) {
                setDataListInfoOrder(res.data.data)
                setTypeOrder(1)
                nav("/list-order-review")
            }
        }
    }

    const onDelete = async () => {

        try {
            const res = await axios.delete(`${CART.DELETE}?_id=${idCart}&userId=${user.userId}`)
            if (res.data.status === 200) {
                setSheetVisible(false)
                setDataCart(dataCart?.filter(item => item._id !== idCart))
                totalCart()
            }
        } catch (error) {

            console.log({ error });
        }
    }

    useEffect(() => {

        setShowBottomTab(false)
    }, [])

    useEffect(() => {

        cart()
    }, [skip])

    return (
        <Page onScroll={onScroll} ref={listInnerRef}>
            <Header title="Giỏ hàng" />
            <div className="pt-[50px] flex flex-col gap-2 pb-[130px]">
                {dataCart && dataCart.length > 0 ? dataCart.map((item, index) => (
                    <div className="flex p-2 bg-white items-center gap-2" key={item._id}>
                        <div>
                            <input type="checkbox" name={`checkbox-${index}`} id={`checkbox-${index}`} onChange={() => onCheck(item)} />
                        </div>
                        <div className="flex-1 flex gap-2 justify-between">

                            <div className="flex-1 flex  gap-2">
                                <div>
                                    <img src={`${API_URI}/${item.image}`} alt="" className="w-[90px] h-[90px] rounded-lg" />
                                </div>
                                <div className="flex-1 ">
                                    <p className="line-clamp-2 text-gray-600 font-[400] mb-1" onClick={() => nav(`/product/${item.productId}`)}>{item?.name}</p>
                                    <div className="bg-gray-200 inline-block px-2 text-[12px] text-gray-500 mb-2">{item.nameMS}{item?.nameSZ && `, ${item.nameSZ}`}</div>
                                    <div className="flex justify-between items-center">
                                        <div>

                                            <p className="font-bold">{formatPrice(item.priceDiscount)}</p>
                                            {item.priceDiscount !== item.price && <del className="text-[14px] text-gray-500">{formatPrice(item.price)}</del>}
                                        </div>
                                        <div className="flex items-center">
                                            {/* <div className="border-[1px] w-[25px] h-[25px] flex items-center justify-center" ><MinusOutlined className="text-[12px]" /></div> */}
                                            <div className="w-[25px] h-[25px] flex items-center justify-center text-[14px] font-[500]">x{item.quantity || 1}</div>
                                            {/* <div className="border-[1px] w-[25px] h-[25px] flex items-center justify-center"><PlusOutlined className="text-[12px]" /></div> */}
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div onClick={() => { setSheetVisible(true); setIdCart(item._id) }}>
                                <EllipsisOutlined className="text-[16px]" />
                            </div>
                        </div>
                    </div>
                )) : <div className="bg-white p-3 flex flex-col justify-center items-center">
                    <InboxOutlined className="text-[32px] text-gray-500" />
                    <span className=" text-gray-400">Không có sản phẩm</span>
                </div>}

                {dataCart && dataCart.length > 0 && <div className="px-2 grid grid-cols-1 gap-2 bg-white absolute bottom-0 w-full pb-[40px] pt-[20px] border-t-[1px]">
                    <div className=" bg-red-500 text-center py-2 rounded text-white font-bold" onClick={() => onBuy()}>Đặt hàng</div>
                </div>}

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
                        <div className="flex items-center gap-2 pb-4" onClick={() => onDelete()}>
                            <DeleteOutlined className="text-[16px] font-[500]" />
                            <span className="text-[16px] font-[500]">Xóa</span>
                        </div>
                    </div>
                </Box>
            </Sheet>
        </Page>
    )
}