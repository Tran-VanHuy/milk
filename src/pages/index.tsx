import React from 'react';
import { Page, Swiper } from 'zmp-ui';
import { ShoppingCartOutlined, MessageOutlined, SearchOutlined } from "@ant-design/icons";

const HomePage: React.FunctionComponent = () => {


  return (
    <Page>
      <div className='fixed w-full top-3 z-10 px-[15px] flex justify-between gap-[20px] items-center'>
        <div className='flex-1 relative'>
          <div className='absolute top-0 bottom-0 left-2 flex items-center justify-center'>
            <SearchOutlined />
          </div>
          <input type="text" placeholder="Tìm kiếm sản phẩm" className='py-2 pl-[30px] pr-2 w-full' />
        </div>
        <div className=''>
          <ShoppingCartOutlined className='pr-[10px]' />
          <MessageOutlined />
        </div>
      </div>
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
          <div className='bg-white rounded px-2 py-4'>1</div>
        </div>
        <div className='overflow-hidden overflow-x-auto'>
          <div className='w-[1500px] pb-2'>
            <div className='pt-[60px] grid grid-cols-12 gap-3  overflow-x-auto'>
              <div className='col-span-1 text-center'>
                icon
                <p className='text-[14px] text-white'>Sữa 0 - 2 tuổi</p>
              </div>
              <div className='col-span-1 text-center'>
                icon
                <p className='text-[14px] text-white'>Sữa 0 - 5 tuổi</p>
              </div>
              <div className='col-span-1 text-center'>
                icon
                <p className='text-[14px] text-white'>Sữa trên 5 tuổi</p>
              </div>
              <div className='col-span-1 text-center'>
                icon
                <p className='text-[14px] text-white'>Sữa cho người già</p>
              </div>
              <div className='col-span-1 text-center'>
                icon
                <p className='text-[14px] text-white'>Sữa cho người tiểu đường</p>
              </div>
              <div className='col-span-1 text-center'>
                icon
                <p className='text-[14px] text-white'>Sữa cho trẻ biếng ăn</p>
              </div>
              <div className='col-span-1 text-center'>
                icon
                <p className='text-[14px] text-white'>Sứa cho trẻ suy dinh dưỡng</p>
              </div>
              <div className='col-span-1 text-center'>
                icon
                <p className='text-[14px] text-white'>Shoppe thời trang</p>
              </div>
              <div className='col-span-1 text-center'>
                icon
                <p className='text-[14px] text-white'>Shoppe thời trang</p>
              </div>
              <div className='col-span-1 text-center'>
                icon
                <p className='text-[14px] text-white'>Shoppe thời trang</p>
              </div>
              <div className='col-span-1 text-center'>
                icon
                <p className='text-[14px] text-white'>Shoppe thời trang</p>
              </div>
              <div className='col-span-1 text-center'>
                icon
                <p className='text-[14px] text-white'>Shoppe thời trang</p>
              </div>
              <div className='col-span-1 text-center'>
                icon
                <p className='text-[14px] text-white px-2'>Shoppe thời trang</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[20px] grid grid-cols-12 px-2 gap-3'>
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
      <div className='bg-white text-red-600 px-2 mb-2'>
        <b>GỢI Ý SẢN PHẨM</b>
      </div>
      <div className='px-2 pb-2'>
        <div className='grid grid-cols-2 gap-2'>
          <div className='col-span-1 bg-white'>
            <div className='relative'>
              <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270" alt="" />
            </div>
            <div className='p-2'>
              <p className='text-[14px] font-medium mb-1'>Giày chunky low second sunday</p>
              <div className='bg-yellow-600 inline px-2 py-[1px] text-[12px] text-white'> 1% Giảm</div>
              <div className='flex justify-between mt-1'>
                <p className='text-red-600 font-medium'>đ2.000</p>
                <p className='text-[10px] font-medium'> Đã bán 12k</p>
              </div>
            </div>
          </div>
          <div className='col-span-1 bg-white'>
            <div className='relative'>
              <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270" alt="" />
            </div>
            <div className='p-2'>
              <p className='text-[14px] font-medium mb-1'>Giày chunky low second sunday</p>
              <div className='bg-yellow-600 inline px-2 py-[1px] text-[12px] text-white'> 1% Giảm</div>
              <div className='flex justify-between mt-1'>
                <p className='text-red-600 font-medium'>đ2.000</p>
                <p className='text-[10px] font-medium'> Đã bán 12k</p>
              </div>
            </div>
          </div>
          <div className='col-span-1 bg-white'>
            <div className='relative'>
              <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270" alt="" />
            </div>
            <div className='p-2'>
              <p className='text-[14px] font-medium mb-1'>Giày chunky low second sunday</p>
              <div className='bg-yellow-600 inline px-2 py-[1px] text-[12px] text-white'> 1% Giảm</div>
              <div className='flex justify-between mt-1'>
                <p className='text-red-600 font-medium'>đ2.000</p>
                <p className='text-[10px] font-medium'> Đã bán 12k</p>
              </div>
            </div>
          </div>
          <div className='col-span-1 bg-white'>
            <div className='relative'>
              <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/466/874/products/7-1694767493719.jpg?v=1695012310270" alt="" />
            </div>
            <div className='p-2'>
              <p className='text-[14px] font-medium mb-1'>Giày chunky low second sunday</p>
              <div className='bg-yellow-600 inline px-2 py-[1px] text-[12px] text-white'> 1% Giảm</div>
              <div className='flex justify-between mt-1'>
                <p className='text-red-600 font-medium'>đ2.000</p>
                <p className='text-[10px] font-medium'> Đã bán 12k</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default HomePage;