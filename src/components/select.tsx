import React, { useState } from 'react';
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
  value?: string[]
  multiSelect?: string[]
}
const SelecMulti = ({ setMultiSelect, dataSelect, placeholder, typeSelect, multiSelect }: Props) => {

  return (
    <>
      <Space style={{ width: '100%' }} direction="vertical">
        {typeSelect === "multiple" ? <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder={placeholder}
          onChange={setMultiSelect}
          options={dataSelect}
          value={multiSelect}
        
        /> : <Select
          allowClear
          style={{ width: '100%' }}
          placeholder={placeholder}
          onChange={setMultiSelect}
          options={dataSelect}
          value={multiSelect}
        />}

      </Space>
    </>

  )
}

export default SelecMulti;