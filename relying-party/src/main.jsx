import React from 'react'
import ReactDOM from 'react-dom/client'
import FindEventsPage from './pages/FindEventsPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignIn from './components/SignIn';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './main.css'

import LandingPage from './pages/LandingPage.jsx'

import MainLayout from './layouts/MainLayout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/Signin' element={<SignIn />}></Route>
        <Route path='/FindEvents' element={<FindEventsPage />}></Route>
    
      </Routes>
    </Router>
  </React.StrictMode>,
)



