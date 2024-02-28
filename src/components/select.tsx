import React, { useContext, useEffect, useState } from 'react';
import { Select, Space } from 'antd';
import { CategoryProducts } from '../api/category-product/type';
import { AppContext } from '../context/AppContext';

interface AppcontentType {

  categoryProducts: () => void
  dataCategoryProducts: CategoryProducts[]

}

export type CategoryProductsType = {

  label: string
  value: string
}

export type Props = {

  setMultiSelect: React.Dispatch<React.SetStateAction<string[] | undefined>>
}
const SelecMulti = ({setMultiSelect} : Props) => {

  const { categoryProducts, dataCategoryProducts }: AppcontentType = useContext(AppContext);

  const [dataSelect, setDataSelect] = useState<CategoryProductsType[]>()

  const pushData = () => {
    const data = dataCategoryProducts.map((item) => ({
      label: item.name,
      value: item._id,
    }))
    setDataSelect(data)
  }


  const handleChange = (value: string[]) => {
    
    setMultiSelect(value)
  };

  useEffect(() => {

    categoryProducts()
  }, [])

  useEffect(() => {

    if(dataCategoryProducts && dataCategoryProducts.length > 0) {

      pushData()
    }
  }, [dataCategoryProducts])

  return (
    <Space style={{ width: '100%' }} direction="vertical">
     {dataCategoryProducts && dataCategoryProducts.length > 0 &&  <Select
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