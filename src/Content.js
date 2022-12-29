import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Store } from './pages/Store';
import { Cart } from './pages/Cart';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { ProfileEdit } from './pages/ProfileEdit';
import { Payment } from './pages/Payment';

export const Content = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Store />}
      />
      <Route
        path='/payment'
        element={<Payment />}
      />
      <Route
        path='/profile/edit'
        element={<ProfileEdit />}
      />
      <Route
        path='/cart'
        element={<Cart />}
      />
      <Route
        path='/login'
        element={<Login />}
      />
      <Route
        path='/profile'
        element={<Profile />}
      />
    </Routes>
  );
};
