import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/searchBar';
import CheckboxLabels from '../components/CheckboxFilter';
import Footer from '../components/Footer';

const FindEventsPage = () => {
    const navigate = useNavigate();
    const handleSignInClick = () => {
        navigate('/signin');
    };
 
    // ------------ RETRIEVE EVENTS ------------------
    const [events, setEvents] = useState([]); // Use state to manage events data

    useEffect(() => {
        // Fetch events when component mounts
        fetch('http://localhost:3002/events')
            .then(response => response.json())
            .then(data => {
                setEvents(data); // Update state with fetched events
            })
            .catch(error => {
                console.error("There was an error fetching the events!", error);
            });
    }, []);
    // -----------------------------------------------
    
    return(
        <div>
            <h1> Find Volunteer Opportunities</h1>
            <p className='search-description'>The search bar is a powerful tool that allows users to quickly and efficiently discover volunteer opportunities tailored to their preferences. As users type keywords into the search bar, the website dynamically filters and displays events that match the input, searching through event names and volunteer types. This real-time search functionality ensures that users can immediately see relevant results without having to navigate through numerous listings, making it easier to find the perfect volunteer event.</p>
            <p className='reminder'> Must have an account with (name of website) to participate. </p>
            <h2> Search for Volunteer Opportunities </h2>
            <SearchBar events={events} />
            <Footer/>
        </div>
        
    );
};

export default FindEventsPage;