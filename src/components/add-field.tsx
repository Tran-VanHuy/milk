import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';

const onFinish = (values: any) => {
    console.log('Received values of form:', values);
};

const AddField: React.FC = () => (
    <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        autoComplete="off"
    >
        <Form.List name="users">
            {(fields, { add, remove }) => (
                <>
                  <Form.Item>
                        <Button type="dashed" className='text-red-500' onClick={() => add()} block icon={<PlusOutlined />}>
                            Thêm thông tin kích cỡ
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
                                <Input placeholder="Tên kích cỡ" />
                            </Form.Item>
                            <MinusCircleOutlined onClick={() => remove(name)} />
                          </div>
                            <div className='flex gap-2 items-center'>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'price']}
                                    rules={[{ required: true, message: 'Missing last name' }]}
                                >
                                    <Input placeholder="Giá tiền" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'discount']}
                                    rules={[{ required: true, message: 'Missing last name' }]}
                                >
                                    <Input placeholder="Giảm giá (%)" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'quanity']}
                                    rules={[{ required: true, message: 'Missing last name' }]}
                                >
                                    <Input placeholder="Số lượng"  />
                                </Form.Item>
                            </div>
                        </div>

                    ))}
                 </div>
                  
                </>
            )}
        </Form.List>
        {/* <Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item> */}
    </Form>
);

export default AddField;