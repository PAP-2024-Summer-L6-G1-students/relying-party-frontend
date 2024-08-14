import React from 'react'
import ReactDOM from 'react-dom/client'
import FindEventsPage from './pages/FindEventsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './main.css'

import CreateEventPage from './pages/CreateEventPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import EventInfo from './pages/EventInfo.jsx'
import MainLayout from './layouts/MainLayout.jsx';
import Profile from './pages/Profile.jsx';
import EventsApplied from './pages/EventsApplied.jsx';
import EventsCreated from './pages/EventsCreated.jsx';
import EventsFavorited from './pages/EventsFavorited.jsx';
import Results from './components/Results.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
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
        <Route path='/'            element={<MainLayout headerTitle = 'Landing'><LandingPage /> </MainLayout>}></Route>
        <Route path='/Signin'      element={<SignIn />}></Route>
        <Route path='/CreateEvent' element={<MainLayout headerTitle = 'Create Event'><CreateEventPage /> </MainLayout>}></Route>
        <Route path='/FindEvents'  element={<MainLayout headerTitle = 'Find Events'><FindEventsPage /> </MainLayout>}></Route>
        <Route path='/Results'     element={<Results />}></Route>  
      </Routes>
    </Router>

  </React.StrictMode>,
)



