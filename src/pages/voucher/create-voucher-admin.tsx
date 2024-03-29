import React, { useContext, useEffect, useState } from "react";
import { Header, Page } from "zmp-ui";
import { AppContext } from "../../context/AppContext";
import { ProductType } from "../../api/products/type";
import SelecMulti, { dataSelectType } from "../../components/select";
import { VoucherType } from "../../api/voucher/type";
import { useNavigate, useParams } from "react-router-dom";
import { createVoucher, detailVoucher, updateVoucher } from "../../api/voucher/api";
import { UploadFile } from "antd";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
    products: (skip: number, limit: number, status: string | boolean) => void
    dataProducts: ProductType[]
}

export const CreateVoucherAdmin = () => {

    const { setShowBottomTab, products, dataProducts }: AppcontentType = useContext(AppContext);
    const nav = useNavigate()
    const { id } = useParams()
    const [dataSelect, setDataSelect] = useState<dataSelectType[]>()
    const [multiSelect, setMultiSelect] = useState<string[]>()
    const [formVoucher, setFormVoucher] = useState<VoucherType>()

    const detail = async () => {

        try {
            const res = await detailVoucher(id!);

            if (res) {
                setFormVoucher(res.data)
                setMultiSelect(res.data.products.map(item => item._id))
            }
        } catch (error) {

            console.log({ error });
        }
    }


    const onSubmit = async () => {

        try {
            const body = {
                ...formVoucher!,
                products: multiSelect || []
            }

            if (id) {

                await updateVoucher(id, body)
            } else {

                await createVoucher(body)
            }

            nav("/setting/list-voucher")
        } catch (error) {

            console.log({ error });
        }
    }
    useEffect(() => {

        setShowBottomTab(false)
        products(0, 100, "")
    }, [])

    useEffect(() => {

        if (id) {
            detail()
        }
    }, [id])

    useEffect(() => {
        if (dataProducts && dataProducts.length > 0) {

            const data = dataProducts.map((item) => ({
                label: item.name,
                value: item._id || "0",
            }))
            setDataSelect(data)
        }
    }, [dataProducts])
    return (

        <Page>
            <Header title={id ? "Sửa khuyến mãi" : "Thêm khuyến mãi"} />
            <div className="pt-[50px]">
                <div className="bg-white p-2 mb-3">
                    <input type="text" placeholder="Tên khuyến mãi" className="py-2 px-2 mb-2 w-full bg-gray-100" value={formVoucher?.name} onChange={(e) => setFormVoucher({ ...formVoucher!, name: e.target.value })} />
                    <div className="mb-2">
                        <SelecMulti multiSelect={multiSelect} setMultiSelect={setMultiSelect} dataSelect={dataSelect!} placeholder="Liên kết sản phẩm" typeSelect="multiple" />
                    </div>
                    <input type="text" placeholder="Nội dụng (*)" className="w-full mb-2 py-2 px-2 bg-gray-100" value={formVoucher?.content} onChange={(e) => setFormVoucher({ ...formVoucher!, content: e.target.value })} />
                    <div className="grid grid-cols-2 gap-2">
                        <input type="number" placeholder="Giảm giá (VND) *" className="col-span-1 mb-2  py-2 px-2 bg-gray-100" value={formVoucher?.discount} onChange={(e) => setFormVoucher({ ...formVoucher!, discount: Number(e.target.value) })} />
                        <input type="number" placeholder="Tối thiểu (VND) *" className="col-span-1 mb-2  py-2 px-2 bg-gray-100" value={formVoucher?.minimum} onChange={(e) => setFormVoucher({ ...formVoucher!, minimum: Number(e.target.value) })} />
                    </div>
                </div>
                <div className="px-2 pb-[40px]">
                    <button className="w-full py-2 bg-red-500 text-white" onClick={() => onSubmit()} >Lưu</button>
                </div>
            </div>
        </Page>
    )
}