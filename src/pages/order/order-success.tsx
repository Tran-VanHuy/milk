import React, { useContext } from "react";
import { Page } from "zmp-ui";
import { formatPrice } from "../../components/format-price";
import { useNavigate } from "react-router-dom";
import { OrderType } from "../../api/order/type";
import { AppContext } from "../../context/AppContext";
import { ProductSuggestions } from "../../components/product-suggestions";

interface AppcontentType {

    dataOrder: OrderType
}

export const OrderSuccess = () => {

    const { dataOrder }: AppcontentType = useContext(AppContext);

    const nav = useNavigate()
    return (
        <Page>
            <div className="bg-white flex flex-col justify-center items-center p-5 mb-2">
                <img src="https://static-00.iconduck.com/assets.00/success-icon-512x512-qdg1isa0.png" alt="" className="w-[80px] h-[80px]" />
                <p className=" text-gray-500 font-[500]">Đặt hàng thành công</p>
                <p className="text-center text-[12px] text-gray-500 font">Địa chỉ nhận hàng: {dataOrder?.deliveryAddress}</p>
            </div>
            <div className="p-2 bg-white mb-3">
                <p className="font-[500px] mb-2">Thông tin đơn hàng</p>
                <div className="flex justify-between items-center">
                    <p className="text-[12px]">Mã đơn hàng</p>
                    <p className="text-[12px] text-gray-500">{dataOrder?.orderCode}</p>
                </div>
                <div className="flex justify-between items-center mb-1">
                    <p className="text-[12px]">Trạng thái</p>
                    <p className="text-[12px] text-gray-500">{dataOrder?.type}</p>
                </div>
                {dataOrder && dataOrder?.orders && dataOrder?.orders.length > 0 && dataOrder.orders.map(item => (
                    <div>
                        <p className="text-[14px] font-[500] ">{item.name}</p>
                        <div className="pr-2 border-b-[1px] pb-2 mb-2">
                            <div className="flex justify-between items-center">
                                <p className="text-[12px]">Số lượng</p>
                                <p className="text-[12px] text-gray-500">{item.quantity}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-[12px]">Tổng</p>
                                <p className="text-[12px] text-gray-500">{formatPrice(item.price)}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div>
                    <div className="pr-2">
                        <div className="flex justify-between items-center">
                            <p className="text-[12px]">Tổng</p>
                            <p className="text-[12px] text-gray-500">{formatPrice(dataOrder.price)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white text-red-600 px-2 mb-2 py-1'>
                <b>GỢI Ý SẢN PHẨM</b>
            </div>
            <div className="pb-[100px]">
                <ProductSuggestions />
            </div>
            <div className="px-2 grid grid-cols-1 gap-2 bg-white absolute bottom-0 w-full pb-[40px] pt-[20px] border-t-[1px]">
                <div className=" bg-red-500 text-center py-2 rounded text-white font-bold" onClick={() => nav("/")}>Xác Nhận</div>
            </div>
        </Page>
    )
}