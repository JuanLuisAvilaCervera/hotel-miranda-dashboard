import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from 'react-redux'
import Store from './app/store'

import PrivateRoute from './page/Login/PrivateRoot';

import DashboardPage from './page/Dashboard/DashboardPage'
import RoomPage from './page/Rooms/RoomPage'
import BookingsList from './page/Bookings/BookingsList'
import ContactsPage from './page/Contacts/ContactsPage'
import LoginPage from './page/Login/LoginPage';
import UsersPage from './page/Users/UsersPage';
import { BookingsAdd } from './page/Bookings/BookingsAdd'
import Layout from './components/Layout/Layout'
import { BookingsDetail } from './page/Bookings/BookingDetails'
import { BookingUpdate } from './page/Bookings/BookingUpdate'



createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route element={<PrivateRoute />} >
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<DashboardPage />}/>

              <Route path="/rooms" element={<RoomPage />}/>
              <Route path='/bookings' element={<BookingsList />}/>
              <Route path='/bookingsdetail' element={<BookingsDetail />}/>
              <Route path='/updateBooking'element={<BookingUpdate/>}/>
              <Route path='/newbookings' element={<BookingsAdd />}/>
              
              <Route path='/contacts' element={<ContactsPage />}/>
              <Route path= '/users' element={<UsersPage/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
     </Provider>
  </StrictMode>
)
