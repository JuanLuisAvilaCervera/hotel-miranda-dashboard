import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from 'react-redux'
// import Store from './app/store'

import DashboardPage from './page/DashboardPage';
import LoginPage from './page/LoginPage'
import Layout from './components/Layout/Layout'
import PrivateRoute from './components/Login/PrivateRoot'
import RoomPage from './page/RoomPage'
import BookingsPage from './page/BookingsPage'
import ContactsPage from './page/ContactsPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={Store}> */}
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route element={<Layout/>}>
            {/* <Route element={<PrivateRoute />} > */}
                <Route path="/" element={<DashboardPage />}/>
                <Route path="/rooms" element={<RoomPage />}/>
                <Route path='/bookings' element={<BookingsPage />}/>
                <Route path='/contacts' element={<ContactsPage />}/>
            {/* </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    {/* </Provider> */}
  </StrictMode>,
)
