import React, { useContext, useEffect, useState } from "react";
import { Header, Page } from "zmp-ui";
import { AppContext } from "../context/AppContext";
import { ProductType } from "../api/products/type";
import SelecMulti, { dataSelectType } from "../components/select";
import { VoucherType } from "../api/voucher/type";
import { useNavigate } from "react-router-dom";
import { createVoucher } from "../api/voucher/api";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
    products: (limit: number, skip: number, status: string | boolean) => void
    dataProducts: ProductType[]
}

export const CreateVoucherAdmin = () => {

    const { setShowBottomTab, products, dataProducts }: AppcontentType = useContext(AppContext);
    const nav = useNavigate()

    const [dataSelect, setDataSelect] = useState<dataSelectType[]>()
    const [multiSelect, setMultiSelect] = useState<string[]>()
    const [formVoucher, setFormVoucher] = useState<VoucherType>()


    const onSubmit = async () => {

        try {
            const body = {
                ...formVoucher!,
                products: multiSelect || []
            }
            console.log(body);
            await createVoucher(body)
            nav("/setting/list-voucher")
        } catch (error) {

            console.log({ error });
        }
    }
    useEffect(() => {

        setShowBottomTab(false)
        products(100, 0, "")
    }, [])

    useEffect(() => {
        if (dataProducts && dataProducts.length > 0) {
            console.log(dataProducts);

            const data = dataProducts.map((item) => ({
                label: item.name,
                value: item._id || "0",
            }))
            setDataSelect(data)
        }
    }, [dataProducts])
    return (

        <Page>
            <Header title="Thêm khuyến mãi" />
            <div className="pt-[50px]">
                <div className="bg-white p-2 mb-3">
                    <input type="text" placeholder="Tên khuyến mãi" className="py-2 px-2 mb-2 w-full bg-gray-100" onChange={(e) => setFormVoucher({ ...formVoucher!, name: e.target.value })} />
                    <div className="mb-2">
                        <SelecMulti setMultiSelect={setMultiSelect} dataSelect={dataSelect!} />
                    </div>
                    <input type="text" placeholder="Nội dụng (*)" className="w-full mb-2 py-2 px-2 bg-gray-100" onChange={(e) => setFormVoucher({ ...formVoucher!, content: e.target.value })} />
                    <div className="grid grid-cols-2 gap-2">
                        <input type="number" placeholder="Giảm giá (VND) *" className="col-span-1 mb-2  py-2 px-2 bg-gray-100" onChange={(e) => setFormVoucher({ ...formVoucher!, discount: Number(e.target.value) })} />
                        <input type="number" placeholder="Tối thiểu (VND) *" className="col-span-1 mb-2  py-2 px-2 bg-gray-100" onChange={(e) => setFormVoucher({ ...formVoucher!, minimum: Number(e.target.value) })} />
                    </div>
                </div>
                <div className="px-2 pb-[40px]">
                    <button className="w-full py-2 bg-red-500 text-white" onClick={() => onSubmit()} >Lưu</button>
                </div>
            </div>
        </Page>
    )
}