import React, {useState} from 'react';
import SearchBar from '../components/searchBar';
import CheckboxLabels from '../components/CheckboxFilter';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FindEventsPage = () => {
    return(
        
        <div>
            <Header/>
            <h1> Find Volunteer Opportunities</h1>
            <p>Welcome to the Find Events Page where you can search for volunteer opportunities that fits your schedule!</p>
            <h2> Select What Suits You </h2>
            <CheckboxLabels/>
        
            <SearchBar/>
            <Footer/>
        </div>
        
    );
};
export default FindEventsPage;