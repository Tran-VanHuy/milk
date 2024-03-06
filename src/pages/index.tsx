import React, { useContext, useEffect } from 'react';
import { Page, Swiper } from 'zmp-ui';
import { ShoppingCartOutlined, MessageOutlined, SearchOutlined, QrcodeOutlined, WalletOutlined, DollarOutlined, ScanOutlined } from "@ant-design/icons";
import { Product } from '../components/products/product';
import { Header } from '../components/headers/header';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { ProductType } from '../api/products/type';
import { formatPrice } from '../components/format-price';
import { CategoryProducts } from '../api/category-product/type';
import { BannerDto } from '../api/banner/type';
import { AdsDto } from '../api/ads/type';

interface AppcontentType {

  setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>,
  products: (limit: number, skip: number, status: string | boolean) => void
  dataProducts: ProductType[]
  categoryProducts: (skip: number, limit: number, status?: string) => void
  dataCategoryProducts: CategoryProducts[]
  banner: (skip: number, limit: number, status?: string) => void
  dataBanner: BannerDto[]
  ads: (skip: number, limit: number, status: string) => void
  dataAds: AdsDto[]
}

const HomePage: React.FunctionComponent = () => {

  const { setShowBottomTab, products, dataProducts, categoryProducts, dataCategoryProducts, banner, dataBanner, ads, dataAds }: AppcontentType = useContext(AppContext);
  console.log({ dataAds });

  const nav = useNavigate()

  useEffect(() => {
    categoryProducts(0, 8, "true")
    setShowBottomTab(true)
    products(0, 10, true)
    banner(0, 100, "true")
    ads(0, 3, "true")
  }, [])

  useEffect
  return (
    <Page className='pb-[50px]'>
      <Header showNav={false} />
      <div className='pt-[52px]'>
        <Swiper>
          {dataBanner && dataBanner.length > 0 && dataBanner.map(item => (
            <Swiper.Slide key={item._id}>
              <img
                className="slide-img h-[250px]"
                src={item.name}
                alt={`${item._id}`}
              />
            </Swiper.Slide>
          ))}
        </Swiper>
        <div className='relative bg-green-400 pb-2 mb-3'>
          <div className='absolute -top-[5px] left-0 right-0 px-[20px]'>
            <div className='flex bg-white rounded pl-2 pr-5 py-2 justify-between'>
              <div className='flex items-center'>
                <ScanOutlined />
                <div className='ml-[10px] pl-[10px] border-l-[1px] '>
                  <div className='flex items-center gap-2'><WalletOutlined className='text-red-400 text-[16px]' /> <span className='text-[14px] font-[500]'>Ví VNPay</span></div>
                  <span className='text-[12px] text-gray-500'>Chưa kích hoạt</span>
                </div>
              </div>
              <div className='ml-[10px] pl-[10px] border-l-[1px] '>
                <div className='flex items-center gap-2'><DollarOutlined className='text-yellow-500 text-[16px]' /> <span className='text-[14px] font-[500]'>0 điểm</span></div>
                <span className='text-[12px] text-gray-500'>Điểm danh mỗi ngày</span>
              </div>
            </div>
          </div>
          <div className='overflow-hidden overflow-x-auto'>
            <div className='pb-2'>
              <div className='pt-[70px] grid grid-cols-12 gap-2  overflow-x-auto '>
                {dataCategoryProducts && dataCategoryProducts.length > 0 && dataCategoryProducts.map(item => (
                  <div className='col-span-3 text-center flex justify-center flex-col items-center' key={item._id}>
                    <div>
                      <img src={item?.image} alt="" className='w-[45px] h-[45px] rounded-lg' />
                    </div>
                    <p className='text-[14px] text-white px-1'>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='mt-[15px] grid grid-cols-12 px-2 gap-3'>
            {dataAds && dataAds.length && dataAds.map((item, index) => (
              index !== 1 ? <div className='col-span-3' key={item._id}>
                <img src={item.name} alt="" className='h-[80px] w-full object-cover rounded' />
              </div> : <div className='col-span-6'>
                <img src="https://bizweb.dktcdn.net/100/297/257/files/re-vo-dich.jpg?v=1668743104628" alt="" className='h-[80px] w-full object-cover rounded' />
              </div>
            ))}
          </div>
        </div>
        <div className='bg-white text-red-600 px-2 mb-2 py-1'>
          <b>GỢI Ý SẢN PHẨM</b>
        </div>
        <div className='px-2 pb-2'>
          <div className='grid grid-cols-2 gap-2'>
            {dataProducts && dataProducts.length > 0 ? dataProducts.map((item) => (
              <div className='col-span-1 bg-white' key={item._id} onClick={() => nav(`product/${item._id}`)}>
                <Product img={item.images[0].name} title={item.name} price={formatPrice(item.price)} sale={`Đã bán ${item?.sale || 0}`} discount={item.discount} />
              </div>
            )) : null}


          </div>
        </div>
      </div>
    </Page>
  );
}

export default HomePage;