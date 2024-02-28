import React, { useState } from "react";
import { Header, Page } from "zmp-ui";
import SelecMulti from "../components/select";
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { SheetCreateProduct } from "../components/sheet-create-product";
import axios from "axios";
import { PRODUCT } from "../api/api";
import UpLoadMulti from "../components/upload-multi";
import { useNavigate } from "react-router-dom";

export type infoProductType = {

    name: string,
    itemMS: formSheet[]
}

export type itemFormSheet = {

    name: string
    price: number
    discount: number
    quantity: number
}

export type formSheet = {

    // image?: string
    name?: string
    quantity?: number
    price?: number
    discount?: number
    itemSZ?: itemFormSheet[]

}

export type formProductType = {

    images: ListImages[]
    name: string,
    price?: number,
    discount?: number,
    quantity?: number,
    content?: string,
    categories?: string[]
    info?: infoProductType[]
    ms: string
    sz: string
}

export type ListImages = {
    uid: string
    name: string
}


export const CreateProductAdmin = () => {

    const nav = useNavigate();

    const [sheetVisible, setSheetVisible] = useState(false);
    const [formProduct, setFormProduct] = useState<formProductType>()
    const [multiSelect, setMultiSelect] = useState<string[]>()
    const [allDataFormSheet, setAllDataFromSheet] = useState<any>([])    
    const [listImages, setListImages] = useState<ListImages[]>();

    
    const onSubmit = async () => {

        const newData = { ...formProduct, images: listImages, categories: multiSelect || [], info: { ms: formProduct?.ms, itemMS: allDataFormSheet.flat() } }

        try {
            const res = await axios.post(PRODUCT.CREATE, newData)
            if (res.status === 200) {
                nav("/setting/list-product-admin")
            }
        } catch (error) {

            console.log({ error });

        }
    }
    return (
        <Page>
            <Header title="Thêm sản phẩm" />
            <div className="pt-[50px]">
                <div className="bg-white p-2 mb-3">
                    <input type="text" placeholder="Tên sản phẩm (*)" className="py-2 px-2 mb-2 w-full bg-gray-100" onChange={(e) => setFormProduct({ ...formProduct!, name: e.target.value })} />
                    <div className="mb-2">
                        <SelecMulti setMultiSelect={setMultiSelect} />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <input type="number" placeholder="Giá tiền (VND) (*)" className="col-span-1 py-2 px-2 bg-gray-100" onChange={(e) => setFormProduct({ ...formProduct!, price: Number(e.target.value) })} />
                        <input type="number" placeholder="Giảm giá (%)" className="col-span-1  py-2 px-2 bg-gray-100" onChange={(e) => setFormProduct({ ...formProduct!, discount: Number(e.target.value) })} />
                        <input type="number" placeholder="Số lượng" className="col-span-1  py-2 px-2 bg-gray-100" onChange={(e) => setFormProduct({ ...formProduct!, quantity: Number(e.target.value) })} />
                    </div>
                </div>
                <div className="bg-white p-2 mb-3">
                    <UpLoadMulti setListImages={setListImages} />
                </div>
                <div className="bg-white p-2 mb-3">
                    <div className="flex  mb-3 justify-between items-center gap-3">
                        <div className="grid grid-cols-2 gap-2 flex-1">
                            <input type="text" placeholder="Vd: Màu sắc" className="col-span-1 py-2 px-2 bg-gray-100" onChange={(e) => setFormProduct({ ...formProduct!, ms: e.target.value })} />
                            <input type="text" placeholder="Vd: Kích cỡ" className="col-span-1 py-2 px-2 bg-gray-100" onChange={(e) => setFormProduct({ ...formProduct!, sz: e.target.value })} />
                        </div>
                        <div onClick={() => setSheetVisible(true)}>
                            <PlusCircleOutlined className="text-red-500" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">

                        {allDataFormSheet && allDataFormSheet.length > 0 && allDataFormSheet.flat().map((item) => (
                            <div className="flex gap-2">
                                <input type="text" value={item.name} className="py-2 px-2 bg-gray-100" disabled />
                                <DeleteOutlined />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-2 bg-white mb-2">
                    <textarea name="" id="" rows={5} className="w-full rounded-lg bg-gray-100 p-2" placeholder="Nhập mô tả sản phẩm"></textarea>
                </div>

                <div className="px-2">
                    <button className="w-full py-2 bg-red-500 text-white" onClick={() => onSubmit()}>Lưu</button>
                </div>
            </div>
            <SheetCreateProduct setAllDataFromSheet={setAllDataFromSheet} allDataFormSheet={allDataFormSheet} sheetVisible={sheetVisible} setSheetVisible={setSheetVisible} ms={formProduct?.ms!} sz={formProduct?.sz!} />
        </Page>
    )
}