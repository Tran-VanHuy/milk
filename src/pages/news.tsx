import React, { useContext, useEffect } from "react";
import { Page } from "zmp-ui";
import { AppContext } from "../context/AppContext";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
}
export const News = () => {
    const { setShowBottomTab }: AppcontentType = useContext(AppContext);

    useEffect(() => {

        setShowBottomTab(true)
    }, [])
    
    return (
        <Page>
            <div className="px-2 py-4 pb-[70px]">
                <div className="bg-white rounded mb-3">
                    <img src="https://ketnoikhonggian.com/anh/lmart/thiet-ke-cua-hang-tien-loi-15m2-1.jpg" alt="" className="h-[300px] md:h-[500px] w-full rounded-xl" />
                    <div className="p-2">
                        <p className="font-[500] line-clamp-2 mb-1">Thiết kế cửa hàng tiện lợi diện tích nhỏ L Mart 15m2 - Nội thất sáng tạo</p>
                        <span className="text-[14px] text-gray-500 line-clamp-3">Thiết kế cửa hàng tiện lợi diện tích nhỏ L Mart 15m2 - Nội thất sáng tạo</span>
                        <div className="text-[12px] text-gray-500 text-right">30/12/2000</div>
                    </div>
                </div>
                <div className="bg-white rounded">
                    <img src="https://ketnoikhonggian.com/anh/lmart/thiet-ke-cua-hang-tien-loi-15m2-1.jpg" alt="" className="h-[300px] md:h-[500px] w-full rounded-xl" />
                    <div className="p-2">
                        <p className="font-[500] line-clamp-2 mb-1">Thiết kế cửa hàng tiện lợi diện tích nhỏ L Mart 15m2 - Nội thất sáng tạo</p>
                        <span className="text-[14px] text-gray-500 line-clamp-3">Thiết kế cửa hàng tiện lợi diện tích nhỏ L Mart 15m2 - Nội thất sáng tạo</span>
                        <div className="text-[12px] text-gray-500 text-right">30/12/2000</div>
                    </div>
                </div>
            </div>
        </Page>
    )
}