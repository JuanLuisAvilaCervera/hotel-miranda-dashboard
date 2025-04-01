import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from 'react-redux'
import Store from './app/store'

import PrivateRoute from './page/Login/PrivateRoot';

import DashboardPage from './page/Dashboard/DashboardPage'
import RoomPage from './page/Rooms/RoomPage'
import BookingsPage from './page/Bookings/BookingsPage'
import ContactsPage from './page/Contacts/ContactsPage'
import Layout from './components/Layout/Layout.jsx';
import LoginPage from './page/Login/LoginPage';
import UsersPage from './page/Users/UsersPage';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route element={<PrivateRoute />} >
            <Route element={<Layout />}>

              <Route path="/dashboard" element={<DashboardPage />}/>
              <Route path="/rooms" element={<RoomPage />}/>
              <Route path='/bookings' element={<BookingsPage />}/>
              <Route path='/contacts' element={<ContactsPage />}/>
              <Route path= '/users' element={<UsersPage/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
