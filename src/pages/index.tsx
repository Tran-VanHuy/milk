import React from 'react';
import { Page, Swiper } from 'zmp-ui';
import { ShoppingCartOutlined, MessageOutlined, SearchOutlined, QrcodeOutlined, WalletOutlined, DollarOutlined, ScanOutlined } from "@ant-design/icons";
import { Product } from '../components/products/product';
import { Header } from '../components/headers/header';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FunctionComponent = () => {

  const nav = useNavigate()
  return (
    <Page>
      <Header showNav={false} />
      <Swiper>
        <Swiper.Slide>
          <img
            className="slide-img h-[250px]"
            src="https://stc-zmp.zadn.vn/zmp-zaui/images/0e05d63a7a93a6cdff826.jpg"
            alt="slide-1"
          />
        </Swiper.Slide>
        <Swiper.Slide>
          <img
            className="slide-img h-[250px]"
            src="https://stc-zmp.zadn.vn/zmp-zaui/images/0f7c061caab576eb2fa45.jpg"
            alt="slide-2"
          />
        </Swiper.Slide>
        <Swiper.Slide>
          <img
            className="slide-img h-[250px]"
            src="https://stc-zmp.zadn.vn/zmp-zaui/images/321fb45f18f6c4a89de78.jpg"
            alt="slide-3"
          />
        </Swiper.Slide>
        <Swiper.Slide>
          <img
            className="slide-img h-[250px]"
            src="https://stc-zmp.zadn.vn/zmp-zaui/images/4f417921d58809d650997.jpg"
            alt="slide-4"
          />
        </Swiper.Slide>
        <Swiper.Slide>
          <img
            className="slide-img h-[250px]"
            src="https://stc-zmp.zadn.vn/zmp-zaui/images/677fad2e0187ddd984969.jpg"
            alt="slide-5"
          />
        </Swiper.Slide>
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
            <div className='pt-[70px] grid grid-cols-12 gap-2  overflow-x-auto'>
              <div className='col-span-3 text-center flex justify-center flex-col items-center'>
                <img src="https://cf.shopee.vn/file/vn-50009109-fbc98cb6dcc514259ff797e1b63c5937_xhdpi" alt="" className='w-[45px] h-[45px]' />
                <p className='text-[14px] text-white px-1'>0 - 2 tuổi</p>
              </div>
              <div className='col-span-3 text-center flex justify-center flex-col items-center'>
                <img src="https://cf.shopee.vn/file/vn-50009109-fbc98cb6dcc514259ff797e1b63c5937_xhdpi" alt="" className='w-[45px] h-[45px]' />
                <p className='text-[14px] text-white px-1'>Trên 2 tuổi</p>
              </div>
              <div className='col-span-3 text-center flex justify-center flex-col items-center'>
                <img src="https://cf.shopee.vn/file/vn-50009109-fbc98cb6dcc514259ff797e1b63c5937_xhdpi" alt="" className='w-[45px] h-[45px]' />
                <p className='text-[14px] text-white px-1'>0 - 2 tuổi</p>
              </div>
              <div className='col-span-3 text-center flex justify-center flex-col items-center'>
                <img src="https://cf.shopee.vn/file/vn-50009109-fbc98cb6dcc514259ff797e1b63c5937_xhdpi" alt="" className='w-[45px] h-[45px]' />
                <p className='text-[14px] text-white px-1'>0 - 2 tuổi</p>
              </div>
              <div className='col-span-3 text-center flex justify-center flex-col items-center'>
                <img src="https://cf.shopee.vn/file/vn-50009109-fbc98cb6dcc514259ff797e1b63c5937_xhdpi" alt="" className='w-[45px] h-[45px]' />
                <p className='text-[14px] text-white px-1'>0 - 2 tuổi</p>
              </div>
              <div className='col-span-3 text-center flex justify-center flex-col items-center'>
                <img src="https://cf.shopee.vn/file/vn-50009109-fbc98cb6dcc514259ff797e1b63c5937_xhdpi" alt="" className='w-[45px] h-[45px]' />
                <p className='text-[14px] text-white px-1'>0 - 2 tuổi</p>
              </div>
              <div className='col-span-3 text-center flex justify-center flex-col items-center'>
                <img src="https://cf.shopee.vn/file/vn-50009109-fbc98cb6dcc514259ff797e1b63c5937_xhdpi" alt="" className='w-[45px] h-[45px]' />
                <p className='text-[14px] text-white px-1'>0 - 2 tuổi</p>
              </div>
              <div className='col-span-3 text-center flex justify-center flex-col items-center'>
                <img src="https://cf.shopee.vn/file/vn-50009109-fbc98cb6dcc514259ff797e1b63c5937_xhdpi" alt="" className='w-[45px] h-[45px]' />
                <p className='text-[14px] text-white px-1'>0 - 2 tuổi</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[15px] grid grid-cols-12 px-2 gap-3'>
          <div className='col-span-3'>
            <img src="https://bizweb.dktcdn.net/100/297/257/files/re-vo-dich.jpg?v=1668743104628" alt="" className='h-[80px] w-full object-cover rounded' />
          </div>
          <div className='col-span-6'>
            <img src="https://bizweb.dktcdn.net/100/297/257/files/re-vo-dich.jpg?v=1668743104628" alt="" className='h-[80px] w-full object-cover rounded' />
          </div>
          <div className='col-span-3'>
            <img src="https://bizweb.dktcdn.net/100/297/257/files/re-vo-dich.jpg?v=1668743104628" alt="" className='h-[80px] w-full object-cover rounded' />
          </div>
        </div>
      </div>
      <div className='bg-white text-red-600 px-2 mb-2 py-1'>
        <b>GỢI Ý SẢN PHẨM</b>
      </div>
      <div className='px-2 pb-2'>
        <div className='grid grid-cols-2 gap-2'>
          <div className='col-span-1 bg-white' onClick={() => nav(`product/1`)}>
            <Product img='https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270' title='Giày chunky low second sunday' price='đ2.000' sale='Đã bán 12k' />
          </div>
          <div className='col-span-1 bg-white' onClick={() => nav(`product/1`)}>
            <Product img='https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270' title='Giày chunky low second sunday' price='đ2.000' sale='Đã bán 12k' />
          </div>
          <div className='col-span-1 bg-white' onClick={() => nav(`product/1`)}>
            <Product img='https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270' title='Giày chunky low second sunday' price='đ2.000' sale='Đã bán 12k' />
          </div>
          <div className='col-span-1 bg-white' onClick={() => nav(`product/1`)}>
            <Product img='https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270' title='Giày chunky low second sunday' price='đ2.000' sale='Đã bán 12k' />
          </div>
        </div>
      </div>
    </Page>
  );
}

export default HomePage;