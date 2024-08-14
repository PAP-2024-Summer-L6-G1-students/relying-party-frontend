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

import CreateEventPage from './pages/CreateEventPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import MainLayout from './layouts/MainLayout.jsx';
import Results from './components/Results.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/Signin' element={<SignIn />}></Route>
        <Route path='/' element={<MainLayout><LandingPage /> </MainLayout>}></Route>
        <Route path='/CreateEvent' element={<MainLayout><CreateEventPage /> </MainLayout>}></Route>
        <Route path='/FindEvents' element={<FindEventsPage />}></Route>
        <Route path='/Results' element={<Results />}></Route>  
      </Routes>
    </Router>

  </React.StrictMode>,
)



