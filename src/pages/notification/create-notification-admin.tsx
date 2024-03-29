import React, { useContext, useEffect, useState } from "react";
import { Header, Page } from "zmp-ui";
import SelecMulti, { dataSelectType } from "../../components/select";
import UpLoadMulti from "../../components/upload-multi";
import { NOTIFICATION, USER } from "../../api/api";
import { AppContext } from "../../context/AppContext";
import { ProductType } from "../../api/products/type";
import { BodyNotificationType } from "../../api/notification/type";
import { useNavigate, useParams } from "react-router-dom";
import { requestEdit, requestGet, requestPost } from "../../api/apiRequest";
import { UploadFile } from "antd";
interface AppContextType {
    products: (skip: number, limit: number, status: string | boolean) => void
    dataProducts: ProductType[]
}
export const CreateNotificationAdmin = () => {

    const { products, dataProducts }: AppContextType = useContext(AppContext)
    const nav = useNavigate()
    const { id } = useParams()

    const [multiSelectProduct, setMultiSelectProduct] = useState<string[]>()
    const [dataProductSelect, setDataProductSelect] = useState<dataSelectType[]>([])
    const [listImages, setListImages] = useState<UploadFile[]>();
    const [formNotification, setFormNotification] = useState<BodyNotificationType>()
    const detail = async () => {

        try {

            const res = await requestGet(`${NOTIFICATION.DETAIL}/${id}`)

            if (res) {
                setFormNotification(res.data)
                setMultiSelectProduct([res.data.productId])
                setListImages([{ uid: "0", name: res.data.image, url: res.data.image }])

            }
        } catch (error) {

            console.log({ error });

        }
    }

    const onSubmit = async () => {

        const body: BodyNotificationType = {
            image: listImages && listImages.length > 0 ? listImages[0].name : "",
            productId: multiSelectProduct && multiSelectProduct.length > 0 ? multiSelectProduct.toString() : "",
            title: formNotification?.title!,
            shortContent: formNotification?.shortContent!,
            allUser: true
        }

        try {

            if (!id) {
                await requestPost(NOTIFICATION.CREATE, body)
            } else {

                await requestEdit(`${NOTIFICATION.UPDATE}/${id}`, body)
            }
            nav("/notification-admin")
        } catch (error) {

            console.log({ error });
        }
    }

    useEffect(() => {


        products(0, 10000, true)
    }, [])

    useEffect(() => {
        if (id) {
            detail()
        }
    }, [id])

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
            <Header title={id ? "Sửa thông báo" : "Thêm thông báo"} />
            <div className="pt-[50px]">
                <div className="bg-white p-2 mb-3">
                    <input type="text" placeholder="Tiêu đề (*)" className="py-2 px-2 mb-2 w-full bg-gray-100" value={formNotification?.title} onChange={(e) => setFormNotification({ ...formNotification!, title: e.target.value })} required />
                    <textarea className="w-full p-2 bg-gray-100  mb-2" rows={5} placeholder="Mô tả ngắn" value={formNotification?.shortContent} onChange={(e) => setFormNotification({ ...formNotification!, shortContent: e.target.value })} required></textarea>
                    <SelecMulti setMultiSelect={setMultiSelectProduct} dataSelect={dataProductSelect} multiSelect={multiSelectProduct} typeSelect="" placeholder="Liên kết tới sản phẩm" />
                </div>
                <div className="bg-white p-2 mb-3">
                    <UpLoadMulti setListImages={setListImages} listImages={listImages} count={1} />
                </div>
            </div>
            <div className="px-2 pb-[40px]">
                <button type="submit" className="w-full py-2 bg-red-500 text-white" onClick={() => onSubmit()}>Lưu</button>
            </div>
        </Page>
    )
}