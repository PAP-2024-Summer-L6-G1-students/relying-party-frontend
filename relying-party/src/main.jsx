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
import LoginReceiver from './pages/LoginReceiver.jsx';

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
          <MainLayout headerTitle = 'Profile'>
            <Profile />
          </MainLayout>
        }></Route>
        <Route path='/Profile/EventsApplied' element={
          <MainLayout headerTitle = 'Events Applied'>
            <EventsApplied />
          </MainLayout>
        }></Route>
        <Route path='/Profile/EventsCreated' element={
          <MainLayout headerTitle = 'Events Created'>
            <EventsCreated />
          </MainLayout>
        }></Route>
        <Route path='/Profile/EventsFavorited' element={
          <MainLayout headerTitle = 'Events Favorited'>
            <EventsFavorited />
          </MainLayout>
        }></Route>
        <Route path='/' element={<MainLayout headerTitle = 'Landing'><LandingPage /> </MainLayout>}></Route>
        <Route path='/Signin' element={<SignIn />}></Route>
        <Route path='/CreateEvent' element={<MainLayout headerTitle = 'Create Events'><CreateEventPage /> </MainLayout>}></Route>
        <Route path='/FindEvents' element={<MainLayout headerTitle = "Find Events"><FindEventsPage /></MainLayout>}></Route>
        <Route path='/Results' element={<Results />}></Route>  
        <Route path='/Profile' element={<Profile />}></Route>  
        <Route path='/login-receiver/:authorization' element={<LoginReceiver />}></Route>

      </Routes>
    </Router>

  </React.StrictMode>,
)



