import React, { useEffect, useState } from "react";
import { Header, Page } from "zmp-ui";
import UpLoadMulti from "../../components/upload-multi";
import { ListImages } from "../products/create-product-admin";
import { CategoryProducts } from "../../api/category-product/type";
import axios from "axios";
import { CATEGORY_PRODUCT } from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import { UploadFile } from "antd";

export const CreateCategoryAdmin = () => {
    const { id } = useParams()
    const nav = useNavigate()
    const [listImages, setListImages] = useState<UploadFile[]>();
    const [formCategories, setFormCategories] = useState<CategoryProducts>()


    const onSubmit = async () => {

        const body = {

            ...formCategories!,
            image: listImages !== undefined && listImages[0].name
        }

        try {

            if (!id) {
                const res = await axios.post(CATEGORY_PRODUCT.CREATE, body)
                if (res?.data?.status === 200) {
                    nav("/setting/categories-admin")

                }
            } else {
                const res = await axios.put(`${CATEGORY_PRODUCT.UPDATE}/${id}`, body)
                if (res?.data?.status === 200) {
                    nav("/setting/categories-admin")

                }
            }
        } catch (error) {

            console.log({ error });
        }
    }

    const detail = async () => {

        try {

            const res = await axios.get(`${CATEGORY_PRODUCT.DETAIL}/${id}`)
            console.log(res);
            if (res?.data.status === 200) {
                const data: CategoryProducts = {
                    _id: res.data.data._id,
                    name: res.data.data.name,
                    image: res.data.data.image,
                    status: res.data.data.status
                }
                setListImages([{ uid: "0", url: res.data.data.image, name: res.data.data.image }])
                setFormCategories(data)
            }
        } catch (error) {

        }
    }
    useEffect(() => {
        if (id) {

            detail()
        }
    }, [id])
    return (
        <Page>
            <Header title="Thêm danh mục" />
            <div className="pt-[50px]">
                <div className="bg-white p-2 mb-3">
                    <div>
                        <input type="text" placeholder="Tên danh mục (*)" className="py-2 px-2 mb-2 w-full bg-gray-100" value={formCategories?.name} onChange={(e) => setFormCategories({ ...formCategories!, name: e.target.value })} />
                        <div className="grid grid-cols-3 gap-2">
                            <UpLoadMulti count={1} setListImages={setListImages} listImages={listImages} />
                        </div>
                    </div>
                </div>
                <div className="px-2 pb-[40px]">
                    <button className="w-full py-2 bg-red-500 text-white" onClick={() => onSubmit()}>Lưu</button>
                </div>
            </div>
        </Page>
    )
}