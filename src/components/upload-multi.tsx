import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import type { UploadFile, UploadProps } from 'antd';
import { API_URI, UPLOAD } from '../api/api';



type Props = {
    setListImages: React.Dispatch<React.SetStateAction<UploadFile[]>>;
    count: number
    listImages?: UploadFile[]
};
const UpLoadMulti = ({ setListImages, count, listImages }: Props) => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [loading, setLoading] = useState<boolean>(false);


    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {

        setLoading(true)

        setFileList(newFileList);
        setTimeout(() => {
            setLoading(false)
        }, 100)
    }


    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    useEffect(() => {
        if (fileList.length > 0) {

            setFileList(fileList.map((item) => ({
                uid: item?.uid,
                name: API_URI + "/" + item.name,
                status: item.status,
                url: item?.response?.data?.path ? API_URI + "/" + item?.response?.data?.path : API_URI + "/" + item.url
            })))

            setListImages(fileList.map((item) => ({
                uid: item?.uid,
                url: item?.response?.data?.path || item.url,
                name:  item?.response?.data?.path || item.url
            })))
        }
    }, [loading])

    useEffect(() => {

        if (listImages && listImages.length > 0) {
            console.log(listImages);

            setFileList(listImages.map(item => ({
                ...item,
                url: API_URI + "/" + item.url
            })))
        }
    }, [listImages])
    return (
        <>
            <Upload
                action={UPLOAD.CREATE}
                listType="picture-card"
                fileList={fileList}
                onChange={handleChange}
            >
                {fileList.length >= (count || 1) ? null : uploadButton}
            </Upload>
        </>
    );
};

export default UpLoadMulti;