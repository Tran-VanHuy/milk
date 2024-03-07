import React from "react";
import { Page } from "zmp-ui";
import { formatPrice } from "../../components/format-price";
import { useNavigate } from "react-router-dom";

export const OrderSuccess = () => {

    const nav = useNavigate()
    return (
        <Page>
            <div className="bg-white flex flex-col justify-center items-center p-5 mb-2">
                <img src="https://static-00.iconduck.com/assets.00/success-icon-512x512-qdg1isa0.png" alt="" className="w-[80px] h-[80px]" />
                <p className=" text-gray-500 font-[500]">Đặt hàng thành công</p>
                <p className="text-center text-[12px] text-gray-500 font">Địa chỉ nhận hàng: Số nhà 172, Đường Phan Xích, Tân hội, Đan Phượng, Hà Nội</p>
            </div>
            <div className="p-2 bg-white">
                <p className="font-[500px] mb-2">Thông tin đơn hàng</p>
                <div className="flex justify-between items-center mb-1">
                    <p className="text-[12px]">Mã đơn hàng</p>
                    <p className="text-[12px] text-gray-500">45648654215</p>
                </div>
                <div>
                    <p className="text-[14px] font-[500] ">𝐒𝐮̛̃𝐚 𝐏𝐫𝐨𝐬𝐮𝐫𝐞 𝐝𝐚̀𝐧𝐡 𝐜𝐡𝐨 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐛𝐞̣̂𝐧𝐡 𝐔𝐧𝐠 𝐓𝐡𝐮̛ 𝟑𝟖𝟎𝐠</p>
                    <div className="pr-2 border-b-[1px] pb-2 mb-2">
                        <div className="flex justify-between items-center">
                            <p className="text-[12px]">Số lượng</p>
                            <p className="text-[12px] text-gray-500">2</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-[12px]">Tổng</p>
                            <p className="text-[12px] text-gray-500">{formatPrice(250000)}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-[14px] font-[500] ">𝐒𝐮̛̃𝐚 𝐏𝐫𝐨𝐬𝐮𝐫𝐞 𝐝𝐚̀𝐧𝐡 𝐜𝐡𝐨 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐛𝐞̣̂𝐧𝐡 𝐔𝐧𝐠 𝐓𝐡𝐮̛ 𝟑𝟖𝟎𝐠</p>
                    <div className="pr-2 border-b-[1px] pb-2 mb-2">
                        <div className="flex justify-between items-center">
                            <p className="text-[12px]">Số lượng</p>
                            <p className="text-[12px] text-gray-500">2</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-[12px]">Tổng</p>
                            <p className="text-[12px] text-gray-500">{formatPrice(250000)}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="pr-2">
                        <div className="flex justify-between items-center">
                            <p className="text-[12px]">Tổng</p>
                            <p className="text-[12px] text-gray-500">{formatPrice(500000)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-2 grid grid-cols-1 gap-2 bg-white absolute bottom-0 w-full pb-[40px] pt-[20px] border-t-[1px]">
                <div className=" bg-red-500 text-center py-2 rounded text-white font-bold" onClick={() => nav("/")}>Xác Nhận</div>
            </div>
        </Page>
    )
}