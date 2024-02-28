import React, { useContext, useEffect, useState } from "react";
import { Box, Header, Page, Sheet } from "zmp-ui";
import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import { UserDto, addressVN } from "../api/user/type";
import { getAllProvince } from "../api/user/user";
import { createAddress } from "../api/address/api";
import { AddressDto } from "../api/address/type";
import axios from "axios";
import { ADDRESS } from "../api/api";

interface AppcontentType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>,
    user: UserDto
}

type Props = {

    _id?: string,
    userId?: string
}
export const NewAddress = () => {
    const { _id, userId }: Props = useParams()

    const { setShowBottomTab, user }: AppcontentType = useContext(AppContext);
    const [titleAddress, setTitleAddress] = useState("")
    const [address, setAddress] = useState<AddressDto>();
    const [sheetAddress, setSheetAddress] = useState([])
    const [detailAddress, setDetailAddress] = useState<addressVN>()
    const [error, setError] = useState<boolean>(false);

    const nav = useNavigate();

    const [enabled, setEnabled] = useState(false);

    const [sheetVisible, setSheetVisible] = useState(false);

    const addressVN = async (title: string) => {
        setTitleAddress(title),
            setSheetVisible(true)

        const province = await getAllProvince(title, detailAddress?.id);
        if (province) {
            setSheetAddress(province);
        }
    }

    const filterAddress = async (id: string, name: string) => {
        setDetailAddress({ id, name })
        setSheetVisible(false)
        if (titleAddress === "Tỉnh/ TP") {

            setAddress({ ...address!, city: name })
        }

        if (titleAddress === "Quận/ Huyện") {

            setAddress({ ...address!, district: name })
        }

        if (titleAddress === "Xã/ Phường") {

            setAddress({ ...address!, commune: name })
        }

    }

    const submit = async () => {

        if (address?.name && address.phone && address.city && address.district && address.commune) {

            const body : AddressDto = {
                ...address,
                userId: user.userId
            }
            if(!_id){
                await createAddress(body)

            } else {
                await axios.post(`${ADDRESS.UPDATE}/${_id}`, address)
            }
            nav("/address")
        } else {
            setError(true)
        }
    }

    const detail = async () => {

        try {
            const res = await axios.post(ADDRESS.DETAIL, { userId, _id })
            setAddress(res.data.data)
            setEnabled(res.data.data.default)
        } catch (error) {
            console.log({ error });

        }
    }
    useEffect(() => {

        setShowBottomTab(false)
        if (userId && _id) {
            detail()
        }
    }, [])

    return (
        <Page>
            <Header title="Địa chỉ mới" />
            <div className="pt-[44px]">
                <div className="mb-1">
                    <div className="p-2 text-[14px] text-gray-500">Liên hệ</div>
                    <div className="bg-white">
                        <div className="p-2 border-b-[1px]">
                            <input type="text" className="w-full border-none px-2 py-1 text-[14px] font-[500]" value={address?.name} placeholder="Họ và tên (*)" onChange={(e) => setAddress({ ...address!, name: e.target.value })} />
                            {error && !address?.name && <p className="text-[12px] text-[red]">Chưa nhập họ và tên</p>}
                        </div>
                        <div className="p-2 border-b-[1px]">
                            <input type="tel" className="w-full border-none px-2 py-1 text-[14px] font-[500]" value={address?.phone} placeholder="Số điện thoại (*)" onChange={(e) => setAddress({ ...address!, phone: e.target.value })} />
                            {error && !address?.phone && <p className="text-[12px] text-[red]">Chưa nhập số điện thoại</p>}
                        </div>
                    </div>
                </div>
                <div className="mb-1">
                    <div className="p-2 text-[14px] text-gray-500">Địa chỉ</div>
                    <div className="bg-white">
                        <div className="p-2 border-b-[1px]">
                            <div className="flex items-center justify-between" onClick={() => addressVN("Tỉnh/ TP")}>
                                <span className="px-2 py-1 text-[14px] font-[500]">{address?.city || "Tỉnh/ TP (*)"}</span>
                                <CaretDownOutlined className="text-[14px] font-[500] text-gray-500 pr-2" />
                            </div>
                            {error && !address?.phone && <p className="px-2 text-[12px] text-[red]">Chưa nhập Tỉnh/ TP</p>}
                        </div>
                        <div className="p-2 border-b-[1px] ">
                            <div className="flex items-center justify-between" onClick={() => addressVN("Quận/ Huyện")}>
                                <span className="px-2 py-1 text-[14px] font-[500]">{address?.district || "Quận/ Huyện (*)"}</span>
                                <CaretDownOutlined className="text-[14px] font-[500] text-gray-500 pr-2" />
                            </div>
                            {error && !address?.phone && <p className="px-2 text-[12px] text-[red]">Chưa nhập Quận/ Huyện</p>}
                        </div>

                        <div className="p-2 border-b-[1px]">
                            <div className="flex items-center justify-between" onClick={() => addressVN("Xã/ Phường")}>
                                <span className="px-2 py-1 text-[14px] font-[500]">{address?.commune || "Xã/ Phường (*)"}</span>
                                <CaretDownOutlined className="text-[14px] font-[500] text-gray-500 pr-2" />
                            </div>
                            {error && !address?.phone && <p className="px-2 text-[12px] text-[red]">Chưa nhập Xã/ Phường</p>}
                        </div>
                        <div className="p-2 border-b-[1px]">
                            <input type="text" className="w-full border-none px-2 py-1 text-[14px] font-[500]" value={address?.specificAddress} placeholder="Địa chỉ cụ thể" onChange={(e) => setAddress({ ...address!, specificAddress: e.target.value })} />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="p-2 text-[14px] text-gray-500">Cài đặt</div>
                    <div className="bg-white">
                        <div className="p-2 border-b-[1px] flex justify-between items-center">
                            <span className="text-[14px]">Đặt làm mặc định</span>
                            <label className="inline-flex relative items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={enabled}
                                    readOnly
                                />
                                <div
                                    onClick={() => {
                                        setEnabled(!enabled);
                                        setAddress({ ...address!, default: !enabled });
                                    }}
                                    className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"
                                ></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="p-2 font-[500] text-center bg-red-500 mx-2 text-white text-[14px]" onClick={() => submit()}>HOÀN THÀNH</div>
            </div>
            <Sheet
                visible={sheetVisible}
                onClose={() => setSheetVisible(false)}
                autoHeight
                mask
                handler
                swipeToClose
            >
                <Box>
                    <div className="px-2 pb-[30px] h-[300px] overflow-y-scroll">
                        <div className="text-center text-[16px] font-bold mb-4">{titleAddress}</div>
                        {sheetAddress && sheetAddress.length > 0 ? sheetAddress.map((item: any, index) => (
                            <div className="border-b-[1px] pb-4 mb-4" onClick={() => filterAddress(item.id, item.name)} key={index}>
                                <span className="text-[16px] font-[500]">{item?.name}</span>
                            </div>
                        )) : <p className="text-red-500 text-[12px] text-center">Chưa chọn Thành Phố hoặc Quận hoặc Xã!</p>}
                    </div>
                </Box>
            </Sheet>
        </Page>
    )
}