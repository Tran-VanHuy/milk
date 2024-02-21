import React, { useState } from "react";
import { Box, ImageViewer, Page, Swiper, Sheet, Text, Button } from "zmp-ui";
import { Header } from "../components/headers/header";
import { MinusOutlined, PlusOutlined, RightOutlined, StarOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const ProductDetail = () => {
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
    const nav = useNavigate()
    return (
        <Page className="pb-[100px]">
            <Header showNav={true} />
            <div className="pt-[52px]">
                <Swiper>
                    <Swiper.Slide>
                        <img
                            className="slide-img h-[350px]"
                            src="https://stc-zmp.zadn.vn/zmp-zaui/images/0e05d63a7a93a6cdff826.jpg"
                            alt="slide-1"
                        />
                    </Swiper.Slide>
                    <Swiper.Slide>
                        <img
                            className="slide-img h-[350px]"
                            src="https://stc-zmp.zadn.vn/zmp-zaui/images/0f7c061caab576eb2fa45.jpg"
                            alt="slide-2"
                        />
                    </Swiper.Slide>
                    <Swiper.Slide>
                        <img
                            className="slide-img h-[350px]"
                            src="https://stc-zmp.zadn.vn/zmp-zaui/images/321fb45f18f6c4a89de78.jpg"
                            alt="slide-3"
                        />
                    </Swiper.Slide>
                    <Swiper.Slide>
                        <img
                            className="slide-img h-[350px]"
                            src="https://stc-zmp.zadn.vn/zmp-zaui/images/4f417921d58809d650997.jpg"
                            alt="slide-4"
                        />
                    </Swiper.Slide>
                    <Swiper.Slide>
                        <img
                            className="slide-img h-[350px]"
                            src="https://stc-zmp.zadn.vn/zmp-zaui/images/677fad2e0187ddd984969.jpg"
                            alt="slide-5"
                        />
                    </Swiper.Slide>
                </Swiper>
                <div className="bg-white py-3 mb-2">
                    <div className="px-2">
                        <b className="text-red-500 text-[16px]">80.000đ - 290.000đ</b>
                        <div className="flex gap-2 items-center pt-1 mb-1">
                            <del className="text-[12px] text-gray-500">150.000 - 450.000đ</del>
                            <div className="bg-red-500 bg-opacity-20 inline px-2 text-[11px] text-red-600 font-[500]"> Tiết kiệm tới 47%</div>
                        </div>
                        <p className="font-[500] text-[16px]">Bọt vệ sinh nam giới Oniiz - Dung dịch vệ sinh nam tạo bọt 100ml</p>
                        <div className="pt-1">
                            <div className="flex items-center gap-2">
                                <StarOutlined className="text-[12px] text-yellow-500" />
                                <span className="text-[12px] font-[500]">4.8 /5 <span className="text-blue-600 font-normal">(10.6k)</span></span>
                                <div className="text-[8px]">|</div>
                                <p className="text-[14px] text-gray-500">Đã bán <span className="text-black font-[500]">105.7k</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 bg-white mb-3">
                    <div className="px-2 flex justify-between items-center mb-2">
                        <span className="text-[16px] font-[700]">Voucher & khuyến mãi</span>
                        <RightOutlined className="text-[12px] text-gray-500" />
                    </div>
                    <div className="flex gap-[20px] overflow-x-scroll">
                        <div className="flex items-center justify-between gap-[15px] bg-[#fca5a5] bg-opacity-30 p-3 rounded-lg">
                            <div>
                                <b className="text-[14px]">Giảm 40k</b>
                                <p className="text-gray-500 text-[12px] whitespace-nowrap">Đối với đơn trên 80k</p>
                            </div>
                            <div>
                                <button className="text-[12px] bg-[#ef4444] text-white font-bold px-[10px] rounded whitespace-nowrap" >Sử dụng </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-[15px] bg-[#fca5a5] bg-opacity-30 p-3 rounded-lg">
                            <div>
                                <b className="text-[14px]">Giảm 40k</b>
                                <p className="text-gray-500 text-[12px] whitespace-nowrap">Đối với đơn trên 80k</p>
                            </div>
                            <div>
                                <button className="text-[12px] bg-[#ef4444] text-white font-bold px-[10px] rounded whitespace-nowrap" >Sử dụng </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 bg-white mb-3">
                    <div className="px-2">
                        <span className="text-[16px] font-[700]">Hình thức thanh toán</span>
                        <div className="pt-1 border-b-[1px] pb-3 mb-3">
                            <span className="bg-green-600 text-white text-[10px] font-bold px-1 rounded inline-block">COD </span>
                            <span className="text-[14px] text-gray-600 font-[500]"> Thanh toán bằng tiền mặt (COD)</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-bold text-[16px]">Vận chuyển</span>
                            <span className="text-[14px] text-gray-500 font-[500]">10.000đ</span>
                        </div>
                        <div className="text-[14px] font-[500]">Từ Đan Phượng đến Hồ Chí Minh</div>
                        <div className="text-[14px] font-[500]">Ngày giao hàng dự kiến: Feb 24 - Feb 26</div>
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
                        <div className="">
                            <img src="https://bizweb.dktcdn.net/100/466/874/products/9-jpeg-1700457098386.jpg?v=1700457347270" alt="" className="rounded-xl" />
                            <span className="text-[14px] font-bold">100.000đ</span>
                        </div>
                        <div className="">
                            <img src="https://bizweb.dktcdn.net/100/466/874/products/9-jpeg-1700457098386.jpg?v=1700457347270" alt="" className="rounded-xl" />
                            <span className="text-[14px] font-bold">100.000đ</span>
                        </div>
                        <div className="">
                            <img src="https://bizweb.dktcdn.net/100/466/874/products/9-jpeg-1700457098386.jpg?v=1700457347270" alt="" className="rounded-xl" />
                            <span className="text-[14px] font-bold">100.000đ</span>
                        </div>
                        <div className="">
                            <img src="https://bizweb.dktcdn.net/100/466/874/products/9-jpeg-1700457098386.jpg?v=1700457347270" alt="" className="rounded-xl" />
                            <span className="text-[14px] font-bold">100.000đ</span>
                        </div>
                        <div className="">
                            <img src="https://bizweb.dktcdn.net/100/466/874/products/9-jpeg-1700457098386.jpg?v=1700457347270" alt="" className="rounded-xl" />
                            <span className="text-[14px] font-bold">100.000đ</span>
                        </div>
                        <div className="">
                            <img src="https://bizweb.dktcdn.net/100/466/874/products/9-jpeg-1700457098386.jpg?v=1700457347270" alt="" className="rounded-xl" />
                            <span className="text-[14px] font-bold">100.000đ</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-2 grid grid-cols-2 gap-2 bg-white absolute bottom-0 w-full pb-[40px] pt-[20px] border-t-[1px]">
                <div className="border-[2px] border-red-500 text-center py-2 rounded text-red-500 font-bold" onClick={() => {
                    setSheetVisible(true);
                }}>Thêm vào giỏ hàng</div>
                <div className=" bg-red-500 text-center py-2 rounded text-white font-bold" onClick={() => {
                    setSheetVisible(true);
                }}>Mua ngay</div>
            </div>
            <Sheet
                visible={sheetVisible}
                onClose={() => setSheetVisible(false)}
                autoHeight
                mask
                handler
                swipeToClose
            >
                <Box p={4} className="custom-bottom-sheet" flex flexDirection="column">
                    <div className="bottom-sheet-cover flex gap-3">
                        <img alt="Bottom Sheet" src={"https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270"} width={90} height={90} className="rounded" />
                        <div className="flex flex-col justify-between">
                            <div>
                                <div className="text-[18px] font-bold">80.000đ</div>
                                <del className="text-[14px] text-gray-500 font-[400]">150.000đ</del>
                            </div>
                            <div className="text-[14px] text-gray-500 font-[500]">Màu ghi, 2xl</div>
                        </div>
                    </div>
                    <Box mt={4} mb={5}>
                        <div className="mb-3">
                            <span className="text-[14px] text-gray-500 font-[500]">Màu sắc</span>
                            <div className="flex flex-wrap gap-3">
                                <div className="border-[1px] py-1 pr-2 pl-1 flex gap-2 rounded">
                                    <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270" alt="" width={20} height={20} />
                                    <p className="text-[14px] font-[500]">be</p>
                                </div>
                                <div className="border-[1px] py-1 pr-2 pl-1 flex gap-2 rounded">
                                    <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270" alt="" width={20} height={20} />
                                    <p className="text-[14px] font-[500]">Ghi</p>
                                </div>
                                <div className="border-[1px] py-1 pr-2 pl-1 flex gap-2 rounded">
                                    <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270" alt="" width={20} height={20} />
                                    <p className="text-[14px] font-[500]">Đen</p>
                                </div>
                                <div className="border-[1px] py-1 pr-2 pl-1 flex gap-2 rounded">
                                    <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270" alt="" width={20} height={20} />
                                    <p className="text-[14px] font-[500]">Xám</p>
                                </div>
                                <div className="border-[1px] py-1 pr-2 pl-1 flex gap-2 rounded">
                                    <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270" alt="" width={20} height={20} />
                                    <p className="text-[14px] font-[500]">Trắng</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="text-[14px] text-gray-500 font-[500]">Kích cỡ</span>
                            <div className="flex flex-wrap gap-3">
                                <div className="border-[1px] py-1 pr-2 pl-1 flex gap-2 rounded">
                                    <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270" alt="" width={20} height={20} />
                                    <p className="text-[14px] font-[500]">X</p>
                                </div>
                                <div className="border-[1px] py-1 pr-2 pl-1 flex gap-2 rounded">
                                    <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270" alt="" width={20} height={20} />
                                    <p className="text-[14px] font-[500]">M</p>
                                </div>
                                <div className="border-[1px] py-1 pr-2 pl-1 flex gap-2 rounded">
                                    <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270" alt="" width={20} height={20} />
                                    <p className="text-[14px] font-[500]">L</p>
                                </div>
                                <div className="border-[1px] py-1 pr-2 pl-1 flex gap-2 rounded">
                                    <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270" alt="" width={20} height={20} />
                                    <p className="text-[14px] font-[500]">XL</p>
                                </div>
                                <div className="border-[1px] py-1 pr-2 pl-1 flex gap-2 rounded">
                                    <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270" alt="" width={20} height={20} />
                                    <p className="text-[14px] font-[500]">XXL</p>
                                </div>
                            </div>
                        </div>
                    </Box>
                    <div className="mb-5">
                        <Box className="bottom-sheet-body" style={{ overflowY: "auto" }}>
                            <div className="flex justify-between">
                                <div className="text-gray-600 font-medium">Số lượng</div>
                                <div className="flex items-center">
                                    <div className="border-[1px] w-[25px] h-[25px] flex items-center justify-center"><MinusOutlined /></div>
                                    <div className="border-[1px] w-[25px] h-[25px] flex items-center justify-center text-[14px] font-[500]">1</div>
                                    <div className="border-[1px] w-[25px] h-[25px] flex items-center justify-center"><PlusOutlined /></div>
                                </div>
                            </div>
                        </Box>
                    </div>
                    <div className="pb-4">
                        <div className="bg-red-500 text-white font-medium text-center py-2 rounded-lg" onClick={() => nav(`/order-review`)}>Mua Ngay</div>
                    </div>
                </Box>
            </Sheet>
        </Page>
    )
}