import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import { UPLOAD } from '../api/api';
import { ListImages } from '../pages/create-product-admin';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];


type Props = {
    setListImages: React.Dispatch<React.SetStateAction<ListImages[]>>;
    count: number
};
const UpLoadMulti = ({ setListImages, count }: Props) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleCancel = () => setPreviewOpen(false);

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
                name: item.name,
                status: item.status,
                url: item?.response?.data?.path || item.url
            })))

            setListImages(fileList.map((item) => ({
                uid: item?.uid,
                name: item?.response?.data?.path || item.url
            })))
        }
    }, [loading])

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
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </>
    );
};

export default UpLoadMulti;