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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/EventInfo' element={
          <MainLayout>
            <EventInfo />
          </MainLayout>
        }></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
