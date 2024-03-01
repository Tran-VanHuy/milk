import React, { useContext, useEffect, useState } from 'react';
import { Select, Space } from 'antd';
import { CategoryProducts } from '../api/category-product/type';
import { AppContext } from '../context/AppContext';

interface AppcontentType {

  categoryProducts: () => void
  dataCategoryProducts: CategoryProducts[]

}

export type dataSelectType = {

  label: string
  value: string
}

export type Props = {

  setMultiSelect: React.Dispatch<React.SetStateAction<string[] | undefined>>
  dataSelect: dataSelectType[]
}
const SelecMulti = ({ setMultiSelect, dataSelect }: Props) => {


  const handleChange = (value: string[]) => {

    setMultiSelect(value)
  };

  return (
    <Space style={{ width: '100%' }} direction="vertical">
      {dataSelect && dataSelect.length > 0 && <Select
        mode="multiple"
        allowClear
        style={{ width: '100%' }}
        placeholder="Danh mục"
        onChange={handleChange}
        options={dataSelect}
      />}
    </Space>
  )
}

export default SelecMulti;