import { StarOutlined } from "@ant-design/icons";
import React, { useContext, useState } from "react";
import { Box, Sheet } from "zmp-ui";
import UpLoadMulti from "./upload-multi";
import { ItemOrderType } from "../api/order/type";
import { API_URI } from "../api/api";
import { Rating } from "./rating";
import { UserDto } from "../api/user/type";
import { AppContext } from "../context/AppContext";
import { ListImages } from "../pages/products/create-product-admin";
import { BodyRatingType } from "../api/rating/type";
import { createRating } from "../api/rating/api";

interface AppContextType {

    user: UserDto
    order: (skip: number, user: UserDto, status: string) => void,

}

type Props = {

    sheetVisible: boolean,
    setSheetVisible: React.Dispatch<React.SetStateAction<boolean>>
    dataContentRating: ItemOrderType
    skip: number,

}
export const SheetRating = ({sheetVisible, setSheetVisible, dataContentRating }: Props) => {

    const { user, order }: AppContextType = useContext(AppContext);

    const [contentRating, setContentRating] = useState<string>("")
    const [rating, setRating] = useState<number>(1)
    const [listImages, setListImages] = useState<ListImages[]>();

    const [error, setError] = useState<boolean>(false)

    const onSubmit = async () => {

        try {
            if (!contentRating) {
                setError(true)
            } else {
                const body: BodyRatingType = {
                    productId: dataContentRating.productId,
                    nameProduct: dataContentRating.name,
                    itemNameProduct: dataContentRating.nameItem,
                    userId: dataContentRating.userId,
                    nameUser: user.name,
                    content: contentRating,
                    rating: rating,
                    ItemOrderId: dataContentRating._id!,
                    media: listImages && listImages.length > 0 ? listImages.map(item => ({
                        type: "image",
                        name: item.name
                    })) : []
                }

                const res = await createRating(body)

                if (res.status === 200) {
                    setSheetVisible(false)
                    order(0, user, "ĐÃ VẬN CHUYỂN")
                }

                setContentRating("")
                setListImages([])
            }

        } catch (error) {

            console.log(error);

        }
    }
    return (
        <Sheet
            visible={sheetVisible}
            onClose={() => setSheetVisible(false)}
            autoHeight
            mask
            handler
            swipeToClose
        >
            <Box p={4} className="custom-bottom-sheet" flex flexDirection="column">
                <div className="flex gap-3 mb-3">
                    <div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" >
                        <img src={`${API_URI}/${dataContentRating?.images}`} alt="" className="w-full h-full" />
                    </div>
                    <div className="flex-1">
                        <p className="line-clamp-1 font-[500]">{dataContentRating?.name}</p>
                        {dataContentRating?.nameItem && <span className="text-[12px] text-gray-500">{dataContentRating?.nameItem}</span>}
                    </div>
                </div>
                <div className="flex justify-center gap-2 mb-3">
                    <Rating setRating={setRating} type="user" />
                </div>
                <div className="mb-3">
                    <textarea value={contentRating} onChange={(e) => setContentRating(e.target.value)} name="" id="" rows={6} className="w-full bg-gray-100 rounded px-4 py-2" placeholder="Ý kiển của bạn về sản phẩm...!" >
                    </textarea>
                    {error && !contentRating && <span className="text-[12px] text-red-500">Vui lòng nhập ý kiến...1</span>}
                </div>
                <div className="mb-3">
                    <span>Thêm ảnh về sản phẩm</span>
                    <UpLoadMulti setListImages={setListImages} count={3} />
                </div>

                <button className="bg-red-500 w-full rounded font-[500] text-white py-2" onClick={() => onSubmit()}>Gửi</button>

            </Box>
        </Sheet>
    )
}