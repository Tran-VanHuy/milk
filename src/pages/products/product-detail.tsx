import React, { useContext, useEffect, useState } from "react";
import { Box, ImageViewer, Page, Swiper, Sheet, Text, Button } from "zmp-ui";
import { Header } from "../../components/headers/header";
import { HeartOutlined, MinusOutlined, PlusOutlined, RightOutlined, StarOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { ItemMsType, ItemSZType, ProductType } from "../../api/products/type";
import { formatPrice } from "../../components/format-price";
import { VoucherType } from "../../api/voucher/type";
import { UserDto } from "../../api/user/type";
import axios from "axios";
import { ADDRESS, CART } from "../../api/api";
import { AddressDto } from "../../api/address/type";
import { BodyInfo } from "../../api/order/type";
import { BodyCart } from "../../api/cart/type";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>,
    productDetail: (_id: string) => void,
    dataProductDetail: ProductType,
    voucher: (product: string, status: string) => void,
    dataVoucher: VoucherType[],
    user: UserDto,
    dataProducts: ProductType[],
    setDataInfoOrder: React.Dispatch<React.SetStateAction<BodyInfo>>
}
export const ProductDetail = () => {

    const { setShowBottomTab, productDetail, dataProductDetail, voucher, dataVoucher, user, dataProducts, setDataInfoOrder }: AppcontentType = useContext(AppContext);

    const { id } = useParams()
    const nav = useNavigate()

    const images = [
        {
            src: "https://stc-zmp.zadn.vn/zmp-zaui/images/e2e10aa1a6087a5623192.jpg",
            alt: "img 1",
            key: "1",
        },
        {
            src: "https://stc-zmp.zadn.vn/zmp-zaui/images/fee40cbea0177c4925061.jpg",
            alt: "img 2",
            key: "2",
        },
        {
            src: "https://stc-zmp.zadn.vn/zmp-zaui/images/82ca759bd932056c5c233.jpg",
            alt: "img 3",
            key: "3",
        },
        {
            src: "https://stc-zmp.zadn.vn/zmp-zaui/images/77f5b8cd1464c83a91754.jpg",
            alt: "img 4",
            key: "4",
        },
    ];
    const [visible, setVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [sheetVisible, setSheetVisible] = useState(false);
    const [dataItemSZ, setDataItemSZ] = useState<ItemSZType[]>()
    const [nameProductSheet, setNameProductSheet] = useState<string>("");
    const [dataItemSZProduct, setDataItemSZProduct] = useState<ItemSZType>();
    console.log({ dataItemSZProduct });

    const [imageMS, setImageMS] = useState<string>()
    const [address, setAddress] = useState<AddressDto>()
    const [quantity, setQuantity] = useState<number>(1)
    const [typeBuy, setTypeBuy] = useState<string>("BUY")
    const [idMS, setIdMS] = useState<string>();
    const [idSZ, setIdSZ] = useState<string>();



    const onItemMS = (data: ItemMsType) => {

        setIdMS(data._id)
        setImageMS(data.image)
        setDataItemSZ(data.itemSZ)
        setNameProductSheet(data.name)
        if (dataProductDetail?.type === 2) {

            const dataType2: ItemMsType = {
                name: data.name,
                price: data.price,
                discount: data.discount,
                quantity: data.quantity
            }
            setDataItemSZProduct(dataType2)
        }
    }

    const onItemSZ = (data: ItemSZType) => {
        setIdSZ(data._id);
        setDataItemSZProduct(data);

    }

    const onBuyProducts = (action: string) => {
        if (dataProductDetail?.type !== 3) {
            setSheetVisible(true)
        } else {

            if (action === "BUY") {
                setDataInfoOrder({
                    productId: id!,
                    type: 3,
                    quantity: quantity
                }
                )
                nav(`/order-review`)
            }
        }
    }

    const addressDefault = async () => {

        try {

            const res = await axios.get(`${ADDRESS.ADDRESS_DEFAULT}?userId=${user.userId}`)
            setAddress(res.data.data);

        } catch (error) {

        }
    }

    const onQuantity = (action: string) => {

        let totalQuantity = quantity;
        if (action === "PLUS") {

            totalQuantity = quantity + 1;
            setQuantity(totalQuantity)
        } else {

            if (quantity === 1) {
                setQuantity(1)
            } else {

                totalQuantity = quantity - 1;
                setQuantity(totalQuantity)
            }
        }

        setDataInfoOrder({
            productId: id!,
            type: 3,
            quantity: totalQuantity
        })
    }


    const onBuyCart = async () => {

        if (typeBuy === "BUY") {
            nav(`/order-review`)
        } else {
            if (dataProductDetail?.type === 1) {
                console.log(idMS, idSZ);
                const body: BodyCart = {
                    product: id!,
                    productId: id!,
                    msId: idMS,
                    szId: idSZ,
                    type: dataProductDetail.type,
                    userId: user.userId,
                    image: imageMS!,
                    quantity
                }

                const res = await axios.post(CART.CREATE, body)

                if (res.data.status === 200) {
                    setSheetVisible(false)
                }
            }
        }
    }
    useEffect(() => {

        setShowBottomTab(false)
        addressDefault()
        if (id) {
            productDetail(id)
            voucher(id, "true")
        }
    }, [])
    return (
        <Page className="pb-[100px]">
            <Header showNav={true} />
            <div className="pt-[52px]">
                <Swiper>
                    {dataProductDetail?.images?.map((item) => (
                        <Swiper.Slide key={item.uid}>
                            <img
                                className="slide-img h-[350px] w-full object-cover"
                                src={item.name}
                                alt="slide-1"
                            />
                        </Swiper.Slide>
                    ))}
                </Swiper>
                <div className="bg-white py-3 mb-2">
                    <div className="px-2">
                        <div className="mb-1">
                            <b className="text-red-500 text-[16px]">{dataProductDetail?.priceTitle}</b>
                        </div>
                        {!dataProductDetail?.checkDiscount && <div className="flex gap-2 items-center mb-1">
                            <del className="text-[12px] text-gray-500">{formatPrice(dataProductDetail?.price)}</del>
                            <div className="bg-red-500 bg-opacity-20 inline px-2 text-[11px] text-red-600 font-[500]"> Tiết kiệm tới {dataProductDetail?.discount}%</div>
                        </div>}

                        <p className="font-[500] text-[16px]">{dataProductDetail?.name}</p>
                        <div className="pt-1 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <StarOutlined className="text-[12px] text-yellow-500" />
                                <span className="text-[12px] font-[500]">{dataProductDetail?.point} /5 <span className="text-blue-600 font-normal">(10.6k)</span></span>
                                <div className="text-[8px]">|</div>
                                <p className="text-[14px] text-gray-500">Đã bán <span className="text-black font-[500]">{dataProductDetail?.sale || 0}</span></p>
                            </div>
                            <HeartOutlined />
                        </div>
                    </div>
                </div>

                {dataProductDetail?.type === 3 && <div className="bg-white py-3 mb-2 px-2">
                    <Box className="bottom-sheet-body" style={{ overflowY: "auto" }}>
                        <div className="flex justify-between">
                            <div className="font-medium">Số lượng</div>
                            <div className="flex items-center">
                                <div className="border-[1px] w-[25px] h-[25px] flex items-center justify-center" onClick={() => onQuantity("MINUS")}><MinusOutlined /></div>
                                <div className="border-[1px] w-[25px] h-[25px] flex items-center justify-center text-[14px] font-[500]">{quantity}</div>
                                <div className="border-[1px] w-[25px] h-[25px] flex items-center justify-center" onClick={() => onQuantity("PLUS")}><PlusOutlined /></div>
                            </div>
                        </div>
                    </Box>
                </div>}

                {
                    dataVoucher && dataVoucher.length > 0 &&
                    <div className="p-2 bg-white mb-3">
                        <div className="px-2 flex justify-between items-center mb-2">
                            <span className="text-[16px] font-[700]">Voucher & khuyến mãi</span>
                            <RightOutlined className="text-[12px] text-gray-500" />
                        </div>
                        <div className="flex gap-[20px] overflow-x-scroll scroll">
                            {dataVoucher.map((item) => (
                                <div className="flex items-center justify-between gap-[15px] bg-[#fca5a5] bg-opacity-30 p-3 rounded-lg" key={item._id}>
                                    <div>
                                        <b className="text-[14px]">{item.name}</b>
                                        <p className="text-gray-500 text-[12px] whitespace-nowrap">{item.content}</p>
                                    </div>
                                    <div>
                                        <button className="text-[12px] bg-[#ef4444] text-white font-bold px-[10px] rounded whitespace-nowrap" >Sử dụng </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                }

                <div className="p-2 bg-white mb-3">
                    <div className="px-2">
                        <span className="text-[16px] font-[700]">Hình thức thanh toán</span>
                        <div className="pt-1 border-b-[1px] pb-3 mb-3">
                            <span className="bg-green-600 text-white text-[10px] font-bold px-1 rounded inline-block">COD </span>
                            <span className="text-[14px] text-gray-600 font-[500]"> Thanh toán bằng tiền mặt (COD)</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-bold text-[16px]">Vận chuyển</span>
                            <span className="text-[14px] text-gray-500 font-[500]">{formatPrice(dataProductDetail?.transportFee || 0)}</span>
                        </div>
                        <div className="text-[14px] font-[500]">Từ Đan Phượng đến {address?.commune}</div>
                        <div className="text-[14px] font-[500]">Ngày giao hàng dự kiến: {dataProductDetail?.deliveryDate === 0 ? "Trong ngày" : `${dataProductDetail?.deliveryDate} ngày  `} <span className="text-[10px] text-red-500">(có thể thay đổi)</span></div>
                    </div>
                </div>
                <div className="p-2 bg-white mb-3">
                    <div className="px-2">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[16px] font-[700]">Đánh giá của khách hàng (43)</span>
                            <div className="text-[14px] font-[500] text-gray-500">Xem thêm</div>
                        </div>
                        <div className="flex items-baseline mb-4">
                            <div className="font-bold mr-2">4.8</div>
                            <div className="text-[12px] text-gray-500 mr-2">/5</div>
                            <div className="flex gap-1">
                                <StarOutlined className="text-[12px] text-yellow-500" />
                                <StarOutlined className="text-[12px] text-yellow-500" />
                                <StarOutlined className="text-[12px] text-yellow-500" />
                                <StarOutlined className="text-[12px] text-yellow-500" />
                                <StarOutlined className="text-[12px] text-yellow-500" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <img src="https://i.pinimg.com/736x/78/90/e1/7890e13d8985d3a5360e3e62831575fd.jpg" alt="" className="w-[25px] h-[25px] rounded-full" />
                                    <span className="font-bold text-[14px]">V** H** A**</span>
                                </div>
                                <div className="flex gap-1 mb-1">
                                    <StarOutlined className="text-[12px] text-yellow-500" />
                                    <StarOutlined className="text-[12px] text-yellow-500" />
                                    <StarOutlined className="text-[12px] text-yellow-500" />
                                    <StarOutlined className="text-[12px] text-yellow-500" />
                                    <StarOutlined className="text-[12px] text-yellow-500" />
                                </div>
                                <span className="text-[14px] text-gray-600 font-[500]">Mặt hàng: Default</span>
                                <p className="font-[500] text-[14px] pt-1 mb-2">Shop thật sự rất nhiệt tình luôn ạ</p>
                                <div className="flex">
                                    {images.map((img, index) => (
                                        <Box
                                            mr={1}
                                            key={img.key}
                                            style={{
                                                width: "68px",
                                                height: "69px",
                                                borderRadius: "8px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <img
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                role="presentation"
                                                onClick={() => {
                                                    setActiveIndex(index);
                                                    setVisible(true);
                                                }}
                                                src={img.src}
                                                alt={img.alt}
                                            />
                                        </Box>
                                    ))}
                                </div>
                                <ImageViewer
                                    onClose={() => setVisible(false)}
                                    images={images}
                                    visible={visible}
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <img src="https://i.pinimg.com/736x/78/90/e1/7890e13d8985d3a5360e3e62831575fd.jpg" alt="" className="w-[25px] h-[25px] rounded-full" />
                                    <span className="font-bold text-[14px]">V** H** A**</span>
                                </div>
                                <div className="flex gap-1 mb-1">
                                    <StarOutlined className="text-[12px] text-yellow-500" />
                                    <StarOutlined className="text-[12px] text-yellow-500" />
                                    <StarOutlined className="text-[12px] text-yellow-500" />
                                    <StarOutlined className="text-[12px] text-yellow-500" />
                                    <StarOutlined className="text-[12px] text-yellow-500" />
                                </div>
                                <span className="text-[14px] text-gray-600 font-[500]">Mặt hàng: Default</span>
                                <p className="font-[500] text-[14px] pt-1 mb-2">Shop thật sự rất nhiệt tình luôn ạ</p>
                                <div className="flex">
                                    {images.map((img, index) => (
                                        <Box
                                            mr={1}
                                            key={img.key}
                                            style={{
                                                width: "68px",
                                                height: "69px",
                                                borderRadius: "8px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <img
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                role="presentation"
                                                onClick={() => {
                                                    setActiveIndex(index);
                                                    setVisible(true);
                                                }}
                                                src={img.src}
                                                alt={img.alt}
                                            />
                                        </Box>
                                    ))}
                                </div>
                                <ImageViewer
                                    onClose={() => setVisible(false)}
                                    images={images}
                                    visible={visible}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 bg-white mb-3">
                    <div className="px-2 flex justify-between items-center mb-2">
                        <span className="text-[16px] font-[700]">Xem thêm sản phẩm khác</span>
                        <RightOutlined className="text-[12px] text-gray-500" />
                    </div>
                    <div className="flex gap-[15px] overflow-x-scroll">
                        {dataProducts && dataProducts.length > 0 ?
                            dataProducts.map(item => (
                                <div key={item._id} onClick={() => nav(`/product/${item._id}`)}>
                                    <div className="w-[75px] h-[75px]">
                                        <img src={item.images[0].name} alt="" className="rounded-xl w-full h-full" />
                                    </div>
                                    <span className="text-[14px] font-bold">{formatPrice(item.price)}</span>
                                </div>
                            ))
                            : null}
                    </div>
                </div>
            </div>
            <div className="px-2 grid grid-cols-2 gap-2 bg-white absolute bottom-0 w-full pb-[40px] pt-[20px] border-t-[1px]">
                <div className="border-[2px] border-red-500 text-center py-2 rounded text-red-500 font-bold" onClick={() => { onBuyProducts("CART"); setTypeBuy("CART") }}>Thêm vào giỏ hàng</div>
                <div className=" bg-red-500 text-center py-2 rounded text-white font-bold" onClick={() => { onBuyProducts("BUY"); setTypeBuy("BUY") }}>Mua ngay</div>
            </div>
            {dataProductDetail?.type !== 3 ? <Sheet
                visible={sheetVisible}
                onClose={() => setSheetVisible(false)}
                autoHeight
                mask
                handler
                swipeToClose
            >
                <Box p={4} className="custom-bottom-sheet" flex flexDirection="column">
                    <div className="bottom-sheet-cover flex gap-3">
                        <img alt="Bottom Sheet" src={imageMS || dataProductDetail?.images[0].name} width={90} height={90} className="rounded" />
                        {/* <img alt="Bottom Sheet" src={imageMS} width={90} height={90} className="rounded" /> */}
                        <div className="flex flex-col justify-between">
                            <div>
                                {dataItemSZProduct?.price && dataItemSZProduct?.price !== undefined && <div className="text-[18px] font-bold">{formatPrice(dataItemSZProduct?.price - (dataItemSZProduct?.price * (dataItemSZProduct?.discount / 100)))}</div>}
                                {dataItemSZProduct?.discount !== 0 && dataItemSZProduct?.price !== undefined && <del className="text-[14px] text-gray-500 font-[400]">{formatPrice(dataItemSZProduct?.price)}</del>}
                            </div>
                            <div className="text-[14px] text-gray-500 font-[500]">{nameProductSheet}{dataItemSZProduct?.name && dataProductDetail.type === 1 ? `, ${dataItemSZProduct?.name}` : null}</div>
                        </div>
                    </div>
                    <Box mt={4} mb={5}>
                        <div className="mb-3">
                            <span className="text-[14px] text-gray-500 font-[500]">{dataProductDetail?.info?.ms}</span>
                            <div className="flex flex-wrap gap-3">
                                {dataProductDetail?.info?.itemMS?.map(item => (
                                    <div className="border-[1px] py-1 pr-2 pl-1 flex gap-2 rounded" key={item._id} onClick={() => onItemMS(item)}>
                                        {item?.image && <img src={item.image} alt="" width={20} height={20} />}
                                        <p className="text-[14px] font-[500] active:text-red">{item.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {dataProductDetail?.type === 1 && dataItemSZ && dataItemSZ.length && <div>
                            <span className="text-[14px] text-gray-500 font-[500]">{dataProductDetail?.info?.sz}</span>
                            <div className="flex flex-wrap gap-3">
                                {
                                    dataItemSZ.map(item => (
                                        <div className="border-[1px] py-1 pr-2 pl-1 flex gap-2 rounded" key={item._id} onClick={() => onItemSZ(item)}>
                                            {/* <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270" alt="" width={20} height={20} /> */}
                                            <p className="text-[14px] font-[500]">{item.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        }

                    </Box>
                    <div className="mb-5">
                        <Box className="bottom-sheet-body" style={{ overflowY: "auto" }}>
                            <div className="flex justify-between">
                                <div className="text-gray-600 font-medium">Số lượng</div>
                                <div className="flex items-center">
                                    <div className="border-[1px] w-[25px] h-[25px] flex items-center justify-center" onClick={() => { quantity !== 1 && setQuantity(quantity - 1) }}><MinusOutlined /></div>
                                    <div className="border-[1px] w-[25px] h-[25px] flex items-center justify-center text-[14px] font-[500]">{quantity}</div>
                                    <div className="border-[1px] w-[25px] h-[25px] flex items-center justify-center" onClick={() => { setQuantity(quantity + 1) }}><PlusOutlined /></div>
                                </div>
                            </div>
                        </Box>
                    </div>
                    <div className="pb-4">
                        <div className="bg-red-500 text-white font-medium text-center py-2 rounded-lg" onClick={() => onBuyCart()}>{typeBuy === "BUY" ? "Mua Ngay" : "Thêm Vào Giỏ Hàng"}</div>
                    </div>
                </Box>
            </Sheet> : null}

        </Page>
    )
}