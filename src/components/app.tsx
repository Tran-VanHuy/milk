import React from 'react';
import { Route } from 'react-router-dom'
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui';
import { RecoilRoot } from 'recoil';
import HomePage from '../pages';
import { ProductDetail } from '../pages/product-detail';
import { OverReview } from '../pages/order-review';
import BottomNavigationPage from './bottom-tab';
import { AppProvider } from '../context/AppContext';
import { Profile } from '../pages/profile';
import { Address } from '../pages/address';
import { NewAddress } from '../pages/new-address';
import { Notificaiton } from '../pages/notification';
import { Favourite } from '../pages/favourite';
import { News } from '../pages/news';
import { Setting } from '../pages/setting';
import { ListProductAdmin } from '../pages/list-product-admin';
import { CreateProductAdmin } from '../pages/create-product-admin';



const MyApp = () => {
  return (
    <AppProvider>
      <RecoilRoot>
        <App >
          <SnackbarProvider>
            <ZMPRouter>
              <AnimationRoutes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/product/:id" element={<ProductDetail></ProductDetail>}></Route>
                <Route path="/order-review" element={<OverReview></OverReview>}></Route>
                <Route path="/profile" element={<Profile></Profile>}></Route>
                <Route path="/address" element={<Address></Address>}></Route>
                <Route path="/new-address" element={<NewAddress></NewAddress>}></Route>
                <Route path="/new-address/:_id/:userId" element={<NewAddress></NewAddress>}></Route>
                <Route path="/notification" element={<Notificaiton></Notificaiton>}></Route>
                <Route path="/favourite" element={<Favourite></Favourite>}></Route>
                <Route path="/news" element={<News></News>}></Route>
                <Route path="/setting" element={<Setting></Setting>}></Route>
                <Route path="/setting/list-product-admin" element={<ListProductAdmin></ListProductAdmin>}></Route>
                <Route path="/setting/list-product-admin/create" element={<CreateProductAdmin></CreateProductAdmin>}></Route>
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