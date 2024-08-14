import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './main.css'

import LandingPage from './pages/LandingPage.jsx'
import EventInfo from './pages/EventInfo.jsx'
import MainLayout from './layouts/MainLayout.jsx';
import Profile from './pages/Profile.jsx';
import EventsApplied from './pages/EventsApplied.jsx';
import EventsCreated from './pages/EventsCreated.jsx';
import EventsFavorited from './pages/EventsFavorited.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={
          <MainLayout>
            <LandingPage />
          </MainLayout>
        }></Route>
        <Route path='/EventInfo' element={
          <MainLayout>
            <EventInfo />
          </MainLayout>
        }></Route>
        <Route path='/Profile' element={
          <MainLayout>
            <Profile />
          </MainLayout>
        }></Route>
        <Route path='/Profile/EventsApplied' element={
          <MainLayout>
            <EventsApplied />
          </MainLayout>
        }></Route>
        <Route path='/Profile/EventsCreated' element={
          <MainLayout>
            <EventsCreated />
          </MainLayout>
        }></Route>
        <Route path='/Profile/EventsFavorited' element={
          <MainLayout>
            <EventsFavorited />
          </MainLayout>
        }></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
