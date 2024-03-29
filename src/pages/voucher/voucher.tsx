import { DeleteOutlined, EllipsisOutlined, EyeOutlined, SearchOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import { Box, Header, Page, Sheet } from "zmp-ui";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../components/format-price";
import { BodyVoucherType, VoucherType } from "../../api/voucher/type";
import { deleteVoucher, updateVoucher } from "../../api/voucher/api";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
    voucher: (product: string, status: string) => void
    dataVoucher: VoucherType[]
}

export const ListVoucherAdmin = () => {
    const { setShowBottomTab, voucher, dataVoucher }: AppcontentType = useContext(AppContext);

    const nav = useNavigate();

    const [sheetVisible, setSheetVisible] = useState(false);
    const [idVoucher, setIdVoucher] = useState<string>()
    const [detail, setDetail] = useState<VoucherType>()

    const onDetail = (item: VoucherType) => {
        setIdVoucher(item._id)
        setSheetVisible(true)
        setDetail(item)
    }
    const onDelete = async () => {
        try {

            const res = await deleteVoucher(idVoucher!);
            if (res) {
                voucher("", "")
            }
            setSheetVisible(false)
        } catch (error) {

            console.log({ error });
        }
    }

    const onUpdate = async () => {

        try {
            const body: BodyVoucherType = {
                ...detail!,
                status: !detail?.status
            }

            const res = await updateVoucher(idVoucher!, body);
            if (res) {

                voucher("", "")
            }

            setSheetVisible(false)
        } catch (error) {

            console.log({ error });
        }
    }

    useEffect(() => {

        setShowBottomTab(false)
        voucher("", "")
    }, [])
    return (
        <Page className="px-2">
            <Header title="Danh sách khuyến mãi" onBackClick={() => nav("/setting")} />
            <div className="pt-[50px] mb-3">
                <div className="bg-white flex gap-2 justify-between">
                    <div className='relative'>
                        <div className='absolute top-0 bottom-0 left-2 flex items-center justify-center'>
                            <SearchOutlined />
                        </div>
                        <input type="text" placeholder="Nhập tên khuyến mãi" className='py-2 pl-[30px] pr-2 w-full' />
                    </div>
                    <button className="bg-red-500 px-2 rounded text-white">Tìm kiếm</button>
                </div>
            </div>
            <button className="bg-red-500 px-2 rounded text-white py-2 mb-2" onClick={() => nav("create")}>Thêm mới</button>


            {dataVoucher && dataVoucher.length > 0 && dataVoucher.map(item => (
                <div className="bg-white  p-2 mb-2" key={item._id}>
                    <div className="flex justify-between">
                        <div onClick={() => nav(`update/${item._id}`)}>
                            <p className="font-medium mb line-clamp-2">{item.name}</p>
                            <div className="flex flex-col">
                                <span className="text-[12px] text-gray-[400]">{item.content}</span>
                                <span className="text-[12px] text-gray-[400]">Giảm: {formatPrice(item.discount)}</span>
                                <span className="text-[12px] text-gray-[400]">Đơn hàng tối thiểu: {formatPrice(item.minimum)}</span>
                                <span className="text-[12px] text-gray-[400]">Trạng thái: {item.status ? "hiện" : "ẩn"}</span>
                            </div>
                        </div>
                        <div onClick={() => onDetail(item)}>
                            <EllipsisOutlined />
                        </div>
                    </div>
                </div>
            ))}

            <Sheet
                visible={sheetVisible}
                onClose={() => setSheetVisible(false)}
                autoHeight
                mask
                handler
                swipeToClose
            >
                <Box>
                    <div className="px-2 pb-[30px]">
                        <div className="flex items-center gap-2 border-b-[1px] pb-4 mb-4" onClick={() => onDelete()}>
                            <DeleteOutlined className="text-[16px] font-[500]" />
                            <span className="text-[16px] font-[500]">Xóa</span>
                        </div>
                        <div className="flex items-center gap-2" onClick={() => onUpdate()}>
                            <EyeOutlined className="text-[16px] font-[500]" />
                            <span className="text-[16px] font-[500]">{detail?.status ? "Ẩn" : "Hiện"}</span>
                        </div>
                    </div>
                </Box>
            </Sheet>
        </Page>
    )
}