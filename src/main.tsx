import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from 'react-redux'
import Store from './app/store'

import DashboardPage from './page/Dashboard/DashboardPage'
import RoomPage from './page/Rooms/RoomsList'
import BookingsList from './page/Bookings/BookingsList'
import ContactsPage from './page/Contacts/ContactsPage'
import UsersPage from './page/Users/UsersList';
import { BookingsAdd } from './page/Bookings/BookingsAdd'
import Layout from './components/Layout/Layout'
import { BookingsDetail } from './page/Bookings/BookingDetails'
import { BookingUpdate } from './page/Bookings/BookingUpdate'
import { AuthProvider } from './page/Login/useAuth'
import { UserCreate } from './page/Users/UserCreate'



createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={Store}>
      <AuthProvider>
      <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<DashboardPage />}/>

              <Route path="/rooms" element={<RoomPage />}/>
              <Route path='/bookings' element={<BookingsList />}/>
              <Route path='/bookingsdetail' element={<BookingsDetail />}/>
              <Route path='/updateBooking'element={<BookingUpdate/>}/>
              <Route path='/newbookings' element={<BookingsAdd />}/>
              
              <Route path='/contacts' element={<ContactsPage />}/>
              <Route path= '/users' element={<UsersPage/>}/>
              <Route path='/createuser' element={<UserCreate />}/>
            </Route>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
     </Provider>
  </StrictMode>
)
