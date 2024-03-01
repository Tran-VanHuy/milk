import React, { useState } from "react";
import { Box, Input, Sheet } from "zmp-ui";
import UploadFile from "./upload";
import { Button, Form } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { ListImages, formSheet } from "../pages/create-product-admin";
import UpLoadMulti from "./upload-multi";

type props = {

    sheetVisible: boolean,
    setSheetVisible: React.Dispatch<React.SetStateAction<boolean>>,
    ms: string,
    sz: string,
    setAllDataFromSheet: React.Dispatch<React.SetStateAction<any>>,
    allDataFormSheet: any
}



export const SheetCreateProduct = ({ sheetVisible, setSheetVisible, ms, sz, setAllDataFromSheet, allDataFormSheet }: props) => {

    const [dataFormSheet, setDataFormSheet] = useState<formSheet>()
    const [listImages, setListImages] = useState<ListImages[]>();

    const onFinish = (values: any) => {

        const newData: formSheet = { ...dataFormSheet!, image: listImages && listImages.length > 0 ? listImages[0].name! : "", itemSZ: values.infos }

        setDataFormSheet(newData)

        if (allDataFormSheet && allDataFormSheet.length > 0) {

            setAllDataFromSheet([{ ...dataFormSheet! }, allDataFormSheet])
        } else {
            setAllDataFromSheet([newData])
        }
        setSheetVisible(false)
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
                    <UpLoadMulti setListImages={setListImages} count={1} />
                </div>
                <Box mt={2} mb={5}>
                    <div className="mb-3">
                        <span className="text-[14px] text-gray-500 font-[500]">Thông tin {ms}</span>
                        <div className="">
                            <div className="grid grid-cols-2 gap-2 mb-2">
                                <input type="text" placeholder="Vd: Đen" className="col-span-1 py-2 px-2 bg-gray-100 w-full" onChange={(e) => setDataFormSheet({ ...dataFormSheet!, name: e.target.value })} />
                                <input type="number" placeholder="Số lượng" className="col-span-1 py-2 px-2 bg-gray-100 w-full" onChange={(e) => setDataFormSheet({ ...dataFormSheet!, quantity: Number(e.target.value || 0) })} />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <input type="text" placeholder="Giá tiền (VNĐ)" className="col-span-1 py-2 px-2 bg-gray-100 w-full" onChange={(e) => setDataFormSheet({ ...dataFormSheet!, price: Number(e.target.value || 0) })} />
                                <input type="text" placeholder="Giảm giá (%)" className="col-span-1 py-2 px-2 bg-gray-100 w-full" onChange={(e) => setDataFormSheet({ ...dataFormSheet!, discount: Number(e.target.value || 0) })} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <Form
                            name="dynamic_form_nest_item"
                            onFinish={onFinish}
                            style={{ maxWidth: 600 }}
                            autoComplete="off"
                        >
                            {sz && <Form.List name="infos">
                                {(fields, { add, remove }) => (
                                    <>
                                        <Form.Item>
                                            <Button type="dashed" className='text-red-500' onClick={() => add()} block icon={<PlusOutlined />}>
                                                Thêm thông tin {sz}
                                            </Button>
                                        </Form.Item>
                                        <div className='max-h-[100px] overflow-y-scroll'>
                                            {fields.map(({ key, name, ...restField }) => (
                                                <div className=''>
                                                    <div className='flex gap-2 mb-2'>
                                                        <Form.Item
                                                            {...restField}
                                                            name={[name, 'name']}
                                                            rules={[{ required: true, message: 'Missing first name' }]}
                                                            className="mb-0"
                                                        >
                                                            <Input placeholder="Tên kích cỡ" className="h-[36px]" />
                                                        </Form.Item>
                                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                                    </div>
                                                    <div className='flex gap-2 items-center'>
                                                        <Form.Item
                                                            {...restField}
                                                            name={[name, 'price']}
                                                            rules={[{ required: true, message: 'Missing last name' }]}
                                                        >
                                                            <Input placeholder="Giá tiền" className="h-[36px]" />
                                                        </Form.Item>
                                                        <Form.Item
                                                            {...restField}
                                                            name={[name, 'discount']}
                                                            rules={[{ required: true, message: 'Missing last name' }]}
                                                        >
                                                            <Input placeholder="Giảm giá (%)" className="h-[36px]" />
                                                        </Form.Item>
                                                        <Form.Item
                                                            {...restField}
                                                            name={[name, 'quantity']}
                                                            rules={[{ required: true, message: 'Missing last name' }]}
                                                        >
                                                            <Input placeholder="Số lượng" className="h-[36px]" />
                                                        </Form.Item>
                                                    </div>
                                                </div>

                                            ))}
                                        </div>

                                    </>
                                )}
                            </Form.List>}

                            <div className="pb-4 mt-4">
                                <Button type="primary" htmlType="submit" className="bg-red-500 text-white font-medium text-center rounded w-full">Lưu</Button>
                            </div>
                        </Form>
                    </div>
                </Box>

            </Box>
        </Sheet>
    )
}