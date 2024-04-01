import { StarOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Box, ImageViewer } from "zmp-ui";
import { getAllRating } from "../../api/rating/api";
import { MediaType, RatingType } from "../../api/rating/type";
import { API_URI } from "../../api/api";
import { Rating } from "../rating";
type props = {

    productId: string,
    mediumRating: number
}
export const RatingProduct = ({ productId, mediumRating }: props) => {

    const [skip, setSkip] = useState<number>(0)
    const [total, setTotal] = useState<number>(0)
    const [rating, setRating] = useState<number>(1)
    const [visible, setVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [images, setImages] = useState<any>([]);
    const [dataRatingProduct, setDataRatingProduct] = useState<RatingType[]>()

    const ratingProduct = async (paing: number) => {

        try {

            const res = await getAllRating(paing, 3, productId);
            if (res.status === 200) {
                let data = res.data
                setTotal(res.total)
                if (paing !== 0) {
                    if (dataRatingProduct && dataRatingProduct.length > 0) {

                        const paginate: any = [...dataRatingProduct, res.data]
                        data = paginate.flat()
                    }
                }
                setDataRatingProduct(data)
            }
        } catch (error) {
            
            console.log({ error });
        }
    }

    const onImage = (media: MediaType[]) => {

        const mapMedia = media.map((item, index) => ({
            src: `${API_URI}/${item.name}`,
            alt: item.name,
            key: `${index}`,
        }))
        setImages(mapMedia)
    }

    useEffect(() => {
        ratingProduct(skip)
    }, [skip])
    return (

        <>
            {dataRatingProduct && dataRatingProduct.length > 0 && <div className="p-2 bg-white mb-3">
                <div className="px-2 pb-4">
                    <div className="mb-2">
                        <span className="text-[16px] font-[700]">Đánh giá của khách hàng {total && `(${dataRatingProduct.length})`}</span>
                    </div>
                    <div className="flex items-baseline mb-4">
                        <div className="font-bold mr-2">{mediumRating}</div>
                        <div className="text-[12px] text-gray-500 mr-2">/5</div>
                        <div className="flex gap-1">
                            <Rating type="product" rating={mediumRating} setRating={setRating} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        {dataRatingProduct && dataRatingProduct.length > 0 ? dataRatingProduct.map(item => (
                            <div key={item._id}>
                                <div className="mb-1">
                                    <span className="font-bold text-[14px]">{item?.nameUser}</span>
                                </div>
                                <div className="flex gap-1 mb-1">
                                    <Rating type="product" rating={item.rating} setRating={setRating} />
                                </div>
                                <span className="text-[14px] text-gray-600 font-[500]">Mặt hàng: {item?.itemNameProduct || "Mặc định"}</span>
                                <p className="font-[500] text-[14px] pt-1 mb-2">{item?.content}</p>
                                <div className="flex">
                                    {item?.media && item?.media?.length > 0 && item?.media?.map((media, index) => (
                                        <Box
                                            mr={1}
                                            key={index}
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
                                                    onImage(item.media)
                                                    setActiveIndex(index);
                                                    setVisible(true);
                                                }}
                                                src={`${API_URI}/${media.name}`}
                                                alt={media.type}
                                            />
                                        </Box>
                                    ))}
                                </div>

                            </div>
                        )) : null}
                    </div>
                </div>
                {dataRatingProduct && dataRatingProduct?.length < total && <div className="text-center">
                    <button type="button" className="bg-[#ffc107] font-[500] px-3 py-1 text-[14px] rounded" onClick={() => setSkip(skip + 1)}>Xem thêm</button>
                </div>}
                <ImageViewer
                    onClose={() => setVisible(false)}
                    activeIndex={activeIndex}
                    images={images}
                    visible={visible}
                />
            </div>}
        </>


    )
}