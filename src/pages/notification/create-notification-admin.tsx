import React, { useContext, useEffect, useState } from "react";
import { Header, Page } from "zmp-ui";
import SelecMulti, { dataSelectType } from "../../components/select";
import UpLoadMulti from "../../components/upload-multi";
import { ListImages } from "../products/create-product-admin";
import axios from "axios";
import { NOTIFICATION, USER } from "../../api/api";
import { AppContext } from "../../context/AppContext";
import { ProductType } from "../../api/products/type";
import { BodyNotificationType } from "../../api/notification/type";
import { useNavigate } from "react-router-dom";
interface AppContextType {
    products: (skip: number, limit: number, status: string | boolean) => void
    dataProducts: ProductType[]
}
export const CreateNotificationAdmin = () => {

    const { products, dataProducts }: AppContextType = useContext(AppContext)
    const nav = useNavigate()

    const [multiSelect, setMultiSelect] = useState<string[]>()
    const [multiSelectProduct, setMultiSelectProduct] = useState<string[]>()
    const [dataSelect, setDataSelect] = useState<dataSelectType[]>([])
    const [dataProductSelect, setDataProductSelect] = useState<dataSelectType[]>([])
    const [listImages, setListImages] = useState<ListImages[]>();
    const [formNotification, setFormNotification] = useState<BodyNotificationType>()

    const onSubmit = async () => {

        const body: BodyNotificationType = {
            image: listImages && listImages.length > 0 ? listImages[0].name : "",
            productId: multiSelectProduct && multiSelectProduct.length > 0 ? multiSelectProduct.toString() : "",
            users: multiSelect || [],
            title: formNotification?.title!,
            shortContent: formNotification?.shortContent!,
            allUser: multiSelect && multiSelect?.length > 0 ? false : true
        }

        try {

            const res = await axios.post(NOTIFICATION.CREATE, body)
        } catch (error) {

            console.log({ error });

        }

    }

    const user = async () => {

        try {

            const res = await axios.get(USER.GET_ALL);
            if (res?.data?.status === 200) {

                const mapData = res.data.data.map(item => ({
                    value: item.userId,
                    label: `${item.name} ${item?.address?.phone ? `- ${item?.address?.phone}` : ""}`
                }))
                setDataSelect(mapData)
            }

        } catch (error) {

            console.log({ error });
        }
    }

    useEffect(() => {

        user()
        products(0, 10000, true)
    }, [])

    useEffect(() => {
        if (dataProducts && dataProducts.length > 0) {

            const mapData = dataProducts.map(item => ({
                value: item._id!,
                label: item.name
            }))
            setDataProductSelect(mapData)
        }
    }, [dataProducts])
    return (
        <Page>
            <Header title="" />
            <form action="/notification-admin">
                <div className="pt-[50px]">
                    <div className="bg-white p-2 mb-3">
                        <input type="text" placeholder="Tiêu đề (*)" className="py-2 px-2 mb-2 w-full bg-gray-100" onChange={(e) => setFormNotification({ ...formNotification!, title: e.target.value })} required />
                        <textarea className="w-full p-2 bg-gray-100  mb-2" rows={5} placeholder="Mô tả ngắn" onChange={(e) => setFormNotification({ ...formNotification!, shortContent: e.target.value })} required></textarea>
                        <div className="mb-2">
                            <SelecMulti setMultiSelect={setMultiSelect} dataSelect={dataSelect} typeSelect="multiple" placeholder="Thông báo tới" />
                        </div>
                        <SelecMulti setMultiSelect={setMultiSelectProduct} dataSelect={dataProductSelect} typeSelect="" placeholder="Liên kết tới sản phẩm" />
                    </div>
                    <div className="bg-white p-2 mb-3">
                        <UpLoadMulti setListImages={setListImages} count={1} />
                    </div>
                </div>
                <div className="px-2 pb-[40px]">
                    <button type="submit" className="w-full py-2 bg-red-500 text-white" onClick={() => onSubmit()}>Lưu</button>
                </div>
            </form>

        </Page>
    )
}