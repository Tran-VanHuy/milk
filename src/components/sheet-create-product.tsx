import React, { useState } from "react";
import AddField from "./add-field";
import { Box, Sheet } from "zmp-ui";
import UploadFile from "./upload";

type props = {

    sheetVisible: boolean,
    setSheetVisible: React.Dispatch<React.SetStateAction<boolean>>
}
export const SheetCreateProduct = ({sheetVisible, setSheetVisible}: props) => {

    const onFinish = (values: any) => {
        console.log('Received values of form:', values);
    };
   
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
            <div className="bottom-sheet-cover">
                <UploadFile />
            </div>
            <Box mt={2} mb={5}>
                <div className="mb-3">
                    <span className="text-[14px] text-gray-500 font-[500]">Thông tin màu sắc</span>
                    <div className="">
                        <div className="grid grid-cols-2 gap-2 mb-2">
                            <input type="text" placeholder="Vd: Đen" className="col-span-1 py-2 px-2 bg-gray-100 w-full" />
                            <input type="number" placeholder="Số lượng" className="col-span-1 py-2 px-2 bg-gray-100 w-full" />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <input type="text" placeholder="Giá tiền (VNĐ)" className="col-span-1 py-2 px-2 bg-gray-100 w-full" />
                            <input type="text" placeholder="Giảm giá (%)" className="col-span-1 py-2 px-2 bg-gray-100 w-full" />
                        </div>
                    </div>
                </div>
                <div>
                    <AddField />
                </div>
            </Box>
            <div className="pb-4">
                <div className="bg-red-500 text-white font-medium text-center py-2 rounded">Lưu</div>
            </div>
        </Box>
    </Sheet>
    )
}