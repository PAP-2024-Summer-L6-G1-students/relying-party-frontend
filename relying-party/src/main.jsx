import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './main.css'
import LandingPage from './pages/LandingPage.jsx'
import MainLayout from './layouts/MainLayout.jsx';
import Results from './components/Results.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout><LandingPage /> </MainLayout>}></Route>
        <Route path='/Results' element={
          <MainLayout>
            <Results
              organization={"Red Cross"}
              description={"This event will help raise awearness about blood drives happening in Seattle, Wa"}
              virtual={false}
              startDate={"July 17th"}
              eventType={"Health"}
              favorited={false}
              onFavorite={() => {
                console.log("Favorite button clicked");
              }}
              onApply={() => {
                console.log("Apply button clicked");
              }}
            />

            <Results organization={""} description={""} virtual={false} startDate={""}
              eventType={""} favorited={true} onFavorite={""} onApply={""} orgLogo={""} orgLogoAltText={""} />

            <Results organization={""} description={""} virtual={true} startDate={""}
              eventType={""} favorited={true} onFavorite={""} onApply={""} orgLogo={""} orgLogoAltText={""} />
          </MainLayout>
        }></Route>
      </Routes>
    </Router>

  </React.StrictMode>,
)
