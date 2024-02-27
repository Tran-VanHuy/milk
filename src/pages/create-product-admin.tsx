import React, { useState } from "react";
import { Box, Header, Page, Sheet } from "zmp-ui";
import SelecMulti from "../components/select";
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import UploadFile from "../components/upload";
import AddField from "../components/add-field";
import { SheetCreateProduct } from "../components/sheet-create-product";

export const CreateProductAdmin = () => {

    const [sheetVisible, setSheetVisible] = useState(false);
    return (
        <Page>
            <Header title="Thêm sản phẩm" />
            <div className="pt-[50px]">
                <div className="bg-white p-2 mb-3">
                    <input type="text" placeholder="Tên sản phẩm (*)" className="py-2 px-2 mb-2 w-full bg-gray-100" />
                    <div className="mb-2">
                        <SelecMulti />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <input type="text" placeholder="Giá tiền (VND) (*)" className="col-span-1 py-2 px-2 bg-gray-100" />
                        <input type="text" placeholder="Giảm giá (%)" className="col-span-1 py-2 px-2 bg-gray-100" />
                    </div>
                </div>
                <div className="bg-white p-2 mb-3">
                    <div className="flex  mb-3 justify-between items-center gap-3">
                        <div className="grid grid-cols-2 gap-2 flex-1">
                            <input type="text" placeholder="Vd: Màu sắc" className="col-span-1 py-2 px-2 bg-gray-100" />
                            <input type="text" placeholder="Vd: Màu sắc" className="col-span-1 py-2 px-2 bg-gray-100" />
                        </div>
                        <div onClick={() => setSheetVisible(true)}>
                            <PlusCircleOutlined className="text-red-500" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <input type="text" value="Đỏ" className="py-2 px-2 bg-gray-100" disabled />
                            <DeleteOutlined />
                        </div>
                        <div className="flex gap-2">
                            <input type="text" value="Đỏ" className="py-2 px-2 bg-gray-100" disabled />
                            <DeleteOutlined />
                        </div>
                    </div>
                </div>

                <div className="p-2 bg-white">
                    <textarea name="" id="" rows={5} className="w-full rounded-lg bg-gray-100 p-2" placeholder="Nhập mô tả sản phẩm"></textarea>
                </div>
            </div>
            <SheetCreateProduct sheetVisible={sheetVisible}  setSheetVisible={setSheetVisible}/>
        </Page>
    )
}