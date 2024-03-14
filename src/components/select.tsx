import React from 'react';
import { Select, Space } from 'antd';

export type dataSelectType = {

  label: string
  value: string
}

export type Props = {

  setMultiSelect: React.Dispatch<React.SetStateAction<string[] | undefined>>
  dataSelect: dataSelectType[]
  placeholder: string
  typeSelect: string
}
const SelecMulti = ({ setMultiSelect, dataSelect, placeholder, typeSelect }: Props) => {


  const handleChange = (value: string[]) => {

    setMultiSelect(value)
  };

  return (
    <>
      <Space style={{ width: '100%' }} direction="vertical">
        {typeSelect === "multiple" ? <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder={placeholder}
          onChange={handleChange}
          options={dataSelect}
        /> : <Select
          allowClear
          style={{ width: '100%' }}
          placeholder={placeholder}
          onChange={handleChange}
          options={dataSelect}
        />}

      </Space>
    </>

  )
}

export default SelecMulti;