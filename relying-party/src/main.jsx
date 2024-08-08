import React from 'react'
import ReactDOM from 'react-dom/client'
import FindEventsPage from './components/FindEventsPage';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './main.css'
import SearchBar from './components/searchBar';
import App from './components/ExampleAccordions';
import CheckboxLabels from './components/CheckboxFilter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FindEventsPage/>
    <h2> Select What Suits You </h2>
    <CheckboxLabels/>
    

    <SearchBar/>
  </React.StrictMode>,
)



