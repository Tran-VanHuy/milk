import React, { useEffect, useState } from "react";
import { Header, Page } from "zmp-ui";
import UpLoadMulti from "../../components/upload-multi";
import { useNavigate, useParams } from "react-router-dom";
import { UploadFile } from "antd";
import { BannerDto } from "../../api/banner/type";
import axios from "axios";
import { ADS, BANNER } from "../../api/api";

export const CreateAdsAdmin = () => {
    const { id } = useParams()
    const nav = useNavigate()
    const [listImages, setListImages] = useState<UploadFile[]>();
    const [enabled, setEnabled] = useState(true);

    const onSubmit = async () => {

        try {

            const body: BannerDto = {
                name: listImages !== undefined ? listImages[0].name : "",
                status: enabled

            }
            const res = !id ? await axios.post(ADS.CREATE, body) : await axios.put(`${ADS.UPDATE}/${id}`, body)
            if (res?.data?.status === 200) {

                nav("/setting/ads-admin")
            }

        } catch (error) {
            console.log({ error });
        }
    }

    const detail = async () => {

        try {

            const res = await axios.get(`${ADS.DETAIL}/${id}`)
            if (res.data.status === 200) {
                setListImages([{ uid: "0", name: res.data.data.name, url: res.data.data.name }])
                setEnabled(res.data.data.status)
            }
        } catch (error) {

            console.log({ error });

        }
    }

    useEffect(() => {
        if (id) {
            detail()
        }
    }, [id])
    return (
        <Page>
            <Header title="Thêm mới" />
            <div className="pt-[50px]">
                <div className="bg-white p-2 mb-3">
                    <UpLoadMulti count={1} setListImages={setListImages} listImages={listImages} />
                </div>
                <div className="mb-4">
                    <div className="p-2 text-[14px] text-gray-500">Cài đặt</div>
                    <div className="bg-white">
                        <div className="p-2 border-b-[1px] flex justify-between items-center">
                            <span className="text-[14px]">Ẩn/ Hiện</span>
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
                                        // setAddress({ ...address!, default: !enabled });
                                    }}
                                    className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"
                                ></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="px-2 pb-[40px]" onClick={() => onSubmit()}>
                    <button className="w-full py-2 bg-red-500 text-white" >Lưu</button>
                </div>
            </div>
        </Page>
    )
}