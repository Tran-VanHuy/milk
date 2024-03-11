import { EllipsisOutlined, HeartOutlined, ShareAltOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import { Box, Header, Page, Sheet } from "zmp-ui";
import { AppContext } from "../context/AppContext";
import { FavouriteType } from "../api/favourite/type";
import axios from "axios";
import { API_URI, FAVOURITE } from "../api/api";
import { UserDto } from "../api/user/type";
import { formatPrice } from "../components/format-price";
import { getAllFavourite } from "../api/favourite/api";
import { useNavigate } from "react-router-dom";
interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>,
    user: UserDto
}
export const Favourite = () => {
    const { setShowBottomTab, user }: AppcontentType = useContext(AppContext);
    const nav = useNavigate()

    const [sheetVisible, setSheetVisible] = useState(false);
    const [dataFavourite, setDataFavourite] = useState<FavouriteType[]>()
    const [idFavourite, setIdFavourite] = useState<string>()

    const favourite = async () => {

        try {

            const res = await getAllFavourite(0, 10, user.userId)
            if (res.status === 200) {

                setDataFavourite(res.data)
            }
        } catch (error) {

            console.log({ error });

        }
    }

    const onDelete = async () => {

        try {

            const res = await axios.delete(`${FAVOURITE.DELETE}/${idFavourite}`);
            if (res?.data?.data) {
                favourite()
            }

            setSheetVisible(false)
        } catch (error) {

        }
    }
    useEffect(() => {
        favourite()
        setShowBottomTab(true)
    }, [])
    return (
        <Page>
            <Header title="Yêu thích (30)" />
            <div className="pt-[44px] bg-white pb-4">
                {dataFavourite && dataFavourite.length > 0 && dataFavourite.map(item => (
                    <div className="pl-2 pr-4 pt-5" key={item._id}>
                        <div className="flex gap-2">
                            <img src={`${API_URI}/${item.product.images[0].url}`} alt="" className="w-[80px] h-[80px] rounded-lg" />
                            <div className="flex flex-col justify-between flex-1">
                                <p className="text-gray-500 font-[400] line-clamp-2" onClick={() => nav(`/product/${item.product._id}`)}>{item.product.name}</p>
                                <div className="flex justify-between items-center">
                                    <b>{formatPrice(item.product.price)}</b>
                                    <div className="w-[30px]" onClick={() => { setSheetVisible(true); setIdFavourite(item._id) }}><EllipsisOutlined /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
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
                        <div className="flex items-center gap-2 border-b-[1px] pb-4 mb-4" onClick={() => setSheetVisible(false)}>
                            <ShareAltOutlined className="text-[16px] font-[500]" />
                            <span className="text-[16px] font-[500]">Chia sẻ</span>
                        </div>
                        <div className="flex items-center gap-2" onClick={() => onDelete()}>
                            <HeartOutlined className="text-[16px] font-[500]" />
                            <span className="text-[16px] font-[500]">Xóa khỏi thư mục yêu thích</span>
                        </div>
                    </div>
                </Box>
            </Sheet>

        </Page>
    )
}