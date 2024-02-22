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