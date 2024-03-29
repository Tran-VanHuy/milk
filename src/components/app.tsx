import React from 'react';
import { Route } from 'react-router-dom'
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui';
import { RecoilRoot } from 'recoil';
import HomePage from '../pages';
import { ProductDetail } from '../pages/products/product-detail';
import { OverReview } from '../pages/order/order-review';
import BottomNavigationPage from './bottom-tab';
import { AppProvider } from '../context/AppContext';
import { Profile } from '../pages/profile';
import { Address } from '../pages/address/address';
import { NewAddress } from '../pages/address/new-address';
import { Notificaiton } from '../pages/notification/notification';
import { Favourite } from '../pages/favourite';
import { News } from '../pages/news';
import { Setting } from '../pages/setting';
import { ListProductAdmin } from '../pages/products/list-product-admin';
import { CreateProductAdmin } from '../pages/products/create-product-admin';
import { ListVoucherAdmin } from '../pages/voucher/voucher';
import { CreateVoucherAdmin } from '../pages/voucher/create-voucher-admin';
import { CategoriesAdmin } from '../pages/categories/categories-admin';
import { CreateCategoryAdmin } from '../pages/categories/create-categories-admin';
import { BannerAdmin } from '../pages/banner/banner-admin';
import { CreateBannerAdmin } from '../pages/banner/create-banner-admin';
import { AdsAdmin } from '../pages/ads/ads-admin';
import { CreateAdsAdmin } from '../pages/ads/create-ads-admin';
import { Cart } from '../pages/cart';
import { OrderSuccess } from '../pages/order/order-success';
import { ListOrderReview } from '../pages/order/list-order-review';
import { StatusOrder } from '../pages/order/status-order';
import { Search } from '../pages/search';
import { NotificationAdmin } from '../pages/notification/notification-admin';
import { CreateNotificationAdmin } from '../pages/notification/create-notification-admin';
import { ListProductCategory } from '../pages/products/list-product-category';



const MyApp = () => {
  return (
    <AppProvider>
      <RecoilRoot>
        <App>
          <SnackbarProvider>
            <ZMPRouter>
              <AnimationRoutes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/product/:id" element={<ProductDetail></ProductDetail>}></Route>
                <Route path="/order-review" element={<OverReview></OverReview>}></Route>
                <Route path="/list-order-review" element={<ListOrderReview></ListOrderReview>}></Route>
                <Route path="/status-order/:nameStatusOrder" element={<StatusOrder></StatusOrder>}></Route>
                <Route path="/order/success" element={<OrderSuccess></OrderSuccess>}></Route>
                <Route path="/profile" element={<Profile></Profile>}></Route>
                <Route path="/address" element={<Address></Address>}></Route>
                <Route path="/new-address" element={<NewAddress></NewAddress>}></Route>
                <Route path="/new-address/:_id/:userId" element={<NewAddress></NewAddress>}></Route>
                <Route path="/notification" element={<Notificaiton></Notificaiton>}></Route>
                <Route path="/favourite" element={<Favourite></Favourite>}></Route>
                <Route path="/news" element={<News></News>}></Route>
                <Route path="/setting" element={<Setting></Setting>}></Route>
                <Route path="/list-product-category/:title/:id" element={<ListProductCategory></ListProductCategory>}></Route>
                <Route path="/setting/list-product-admin" element={<ListProductAdmin></ListProductAdmin>}></Route>
                <Route path="/setting/list-product-admin/create" element={<CreateProductAdmin></CreateProductAdmin>}></Route>
                <Route path="/setting/list-voucher" element={<ListVoucherAdmin></ListVoucherAdmin>}></Route>
                <Route path="/setting/list-voucher/create" element={<CreateVoucherAdmin></CreateVoucherAdmin>}></Route>
                <Route path="/setting/list-voucher/update/:id" element={<CreateVoucherAdmin></CreateVoucherAdmin>}></Route>
                <Route path="/setting/categories-admin" element={<CategoriesAdmin></CategoriesAdmin>}></Route>
                <Route path="/setting/categories-admin/create" element={<CreateCategoryAdmin></CreateCategoryAdmin>}></Route>
                <Route path="/setting/categories-admin/update/:id" element={<CreateCategoryAdmin></CreateCategoryAdmin>}></Route>
                <Route path="/setting/banner-admin" element={<BannerAdmin></BannerAdmin>}></Route>
                <Route path="/setting/banner-admin/create" element={<CreateBannerAdmin></CreateBannerAdmin>}></Route>
                <Route path="/setting/banner-admin/update/:id" element={<CreateBannerAdmin></CreateBannerAdmin>}></Route>
                <Route path="/setting/ads-admin" element={<AdsAdmin></AdsAdmin>}></Route>
                <Route path="/setting/ads-admin/create/" element={<CreateAdsAdmin></CreateAdsAdmin>}></Route>
                <Route path="/setting/ads-admin/update/:id" element={<CreateAdsAdmin></CreateAdsAdmin>}></Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>
                <Route path="/search" element={<Search></Search>}></Route>
                <Route path="/notification-admin" element={<NotificationAdmin></NotificationAdmin>}></Route>
                <Route path="/notification-admin/create" element={<CreateNotificationAdmin></CreateNotificationAdmin>}></Route>
                <Route path="/notification-admin/update/:id" element={<CreateNotificationAdmin></CreateNotificationAdmin>}></Route>

              </AnimationRoutes>
              <BottomNavigationPage />
            </ZMPRouter>
          </SnackbarProvider>

        </App>
      </RecoilRoot>
    </AppProvider>

  );
}
export default MyApp;