import React, { useContext, useEffect, useRef, useState } from 'react';
import { Page, Swiper } from 'zmp-ui';
import { ShoppingCartOutlined, MessageOutlined, SearchOutlined, WalletOutlined, DollarOutlined, ScanOutlined, StarOutlined, ArrowsAltOutlined } from "@ant-design/icons";
import { Product } from '../components/products/product';
import { Header } from '../components/headers/header';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { ProductType } from '../api/products/type';
import { formatPrice } from '../components/format-price';
import { CategoryProducts } from '../api/category-product/type';
import { BannerDto } from '../api/banner/type';
import { AdsDto } from '../api/ads/type';
import { API_URI } from '../api/api';
import { Avatar } from 'antd';
import { UserDto } from '../api/user/type';
import { LoadingIndex } from '../components/loading/loading-index';

interface AppcontentType {

  setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>,
  products: (skip: number, limit: number, status: string | boolean) => void
  dataProducts: ProductType[]
  categoryProducts: (skip: number, limit: number, status?: string) => void
  dataCategoryProducts: CategoryProducts[]
  banner: (skip: number, limit: number, status?: string) => void
  dataBanner: BannerDto[]
  ads: (skip: number, limit: number, status: string) => void
  dataAds: AdsDto[]
  user: UserDto
  dataTotalCart: number
  openChatScreen: () => void
  favorite: () => void
  closeMiniApp: () => void
  loadIndex: boolean
}

const HomePage: React.FunctionComponent = () => {

  const { loadIndex, setShowBottomTab, products, dataProducts, categoryProducts, dataCategoryProducts, banner, dataBanner, ads, dataAds, user, dataTotalCart, openChatScreen, favorite, closeMiniApp }: AppcontentType = useContext(AppContext);
  const nav = useNavigate()
  const listInnerRef: any = useRef();

  const [skip, setSkip] = useState<number>(0)

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setSkip(skip + 1)
        // This will be triggered after hitting the last element.
        // API call should be made here while implementing pagination.
      }
    }
  };

  useEffect(() => {
    categoryProducts(0, 8, "true")
    setShowBottomTab(true)
    banner(0, 100, "true")
    ads(0, 3, "true")
  }, [])

  useEffect(() => {
    products(skip, 6, true)
  }, [skip])

  useEffect
  return (
    <Page className='pb-[50px]' onScroll={onScroll} ref={listInnerRef}>
      {!loadIndex ?
        <>
          {/* <Header showNav={false} /> */}
          <div className='fixed w-full py-2 z-10 px-[15px] flex justify-between gap-[20px] items-center bg-white bg-opacity-80' style={{ background: "linear-gradient(0deg, rgb(255, 252, 252), rgb(254, 240, 203))", opacity: "90%" }}>
            <div className='flex gap-2 items-center'>
              <Avatar size={40} icon={<img src={!user?.avatar ? "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/406899010_122099126408136396_5840920013932669763_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qb_c2qtCOLEAb7ygji8&_nc_ht=scontent.fhan2-3.fna&oh=00_AfDTsJjIRgMi72FIPrP9vrGogyIVoxdpbersdJIRouROew&oe=661BDA02" : user.avatar} />} />
              <div>
                <p className='text-[14px] font-[500]'>{!user?.name ? "Tạp hóa xin chào," : `Chào, ${user?.name}`}</p>
                <p className='text-[12px] font-[400]'>Ngày mới tốt lành</p>
              </div>
            </div>
          </div>

          <div>
            <div className='pt-[70px] px-[20px] pb-[30px]' style={{ background: "linear-gradient(0deg, rgb(255, 252, 252), rgb(250, 230, 239))" }}>
              <div className='mb-5 flex gap-5 items-center' >
                <div className='relative flex-1' onClick={() => nav("/search")}>
                  <div className='absolute top-0 bottom-0 left-2 flex items-center justify-center'>
                    <SearchOutlined />
                  </div>
                  <input type="text" placeholder="Tìm kiếm sản phẩm" className='py-2 pl-[30px] pr-2 w-full bg-white rounded-full' onClick={() => nav("/search")} />
                </div>
                <div >
                  <div className="relative" onClick={() => nav("/cart")}>
                    <ShoppingCartOutlined className=' text-red-500 text-[20px]' />
                    {!dataTotalCart || dataTotalCart !== 0 && <div className="text-[10px] absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-[15px] h-[15px] flex items-center justify-center font-bold">{dataTotalCart > 9 ? `${dataTotalCart}+` : dataTotalCart}</div>}
                  </div>
                  {/* <MessageOutlined className='text-red-500 text-[16px]' /> */}
                </div>
              </div>
              <Swiper className=''>
                {dataBanner && dataBanner.length > 0 && dataBanner.map(item => (
                  <Swiper.Slide key={item._id}>
                    <img
                      className="slide-img h-[200px] md:h-[350px] w-full rounded-3xl object-cover"
                      src={`${API_URI}/${item.name}`}
                      alt={`${item._id}`}
                    />
                  </Swiper.Slide>
                ))}
              </Swiper>
            </div>
            <div className='relative bg-green-400 pb-2 mb-3'>
              <div className='absolute -top-[20px] left-0 right-0 px-[20px] md:flex md:justify-center'>
                <div className='flex bg-white rounded pl-2 pr-5 py-2 justify-between md:w-[350px]'>
                  <div className='flex items-center'>
                    <ScanOutlined />
                    <div className='ml-[10px] pl-[10px] border-l-[1px] '>
                      <div className='flex items-center gap-2'><WalletOutlined className='text-red-400 text-[16px]' /> <span className='text-[14px] font-[500]'>Ví ZaloPay</span></div>
                      <span className='text-[12px] text-gray-500 line-clamp-1'>Chức năng đang phát triển</span>
                    </div>
                  </div>
                  <div className='ml-[10px] pl-[10px] border-l-[1px] '>
                    <div className='flex items-center gap-2'><DollarOutlined className='text-yellow-500 text-[16px]' /> <span className='text-[14px] font-[500]'>0 điểm</span></div>
                    <span className='text-[12px] text-gray-500 line-clamp-1'>Chức năng đang phát triển</span>
                  </div>
                </div>
              </div>
              <div className='overflow-hidden overflow-x-auto'>
                <div className='pb-2'>
                  <div className='pt-[60px] grid grid-cols-12 gap-2  overflow-x-auto '>
                    {dataCategoryProducts && dataCategoryProducts.length > 0 && dataCategoryProducts.map(item => (
                      <div className='col-span-3 text-center flex justify-center flex-col items-center' key={item._id} onClick={() => nav(`/list-product-category/${item.name}/${item._id}`)}>
                        <div>
                          <img src={`${API_URI}/${item?.image}`} alt="" className='w-[45px] h-[45px] rounded-lg' />
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
                    <img src={`${API_URI}/${item.name}`} alt="" className='h-[80px] w-full object-cover rounded' />
                  </div> : <div className='col-span-6' key={item._id}>
                    <img src={`${API_URI}/${item.name}`} alt="" className='h-[80px] w-full object-cover rounded' />
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
          <div className='rounded-t-3xl rounded-b-3xl absolute bottom-[100px] border-red-500 border-[1px] right-[20px] bg-white py-3'>
            <div className='px-2'>
              <div className='border-red-500 border-b-[1px] pb-2 mb-2'>
                <MessageOutlined className='text-[20px]' onClick={() => openChatScreen()} />
              </div>
              <div className='border-red-500 border-b-[1px] pb-2 mb-2'>
                <StarOutlined className='text-[20px]' onClick={() => favorite()} />
              </div>
              <div>
                <ArrowsAltOutlined className='text-[20px]' onClick={() => closeMiniApp()} />
              </div>
            </div>
          </div>
        </>
        : <LoadingIndex />}

    </Page>
  );
}

export default HomePage;