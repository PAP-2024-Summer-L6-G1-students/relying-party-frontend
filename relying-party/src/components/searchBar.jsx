import React, {useState} from "react";
import '../components/SearchBar.css'
import Results from '../components/Results.jsx';

const SearchBar = ({ events }) => {
    const [searchInput, setSearchInput] = useState("");
    // const [showSearch, setShowSearch] = useState(false);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    // const toggleResults = () => {
    //     setShowSearch(!showSearch);
    // };

    // filter events based on the search input 
    const filteredEvents = events.filter((event) => 
        event.organizerName.toLowerCase().includes(searchInput.toLowerCase()) ||
        event.eventType.toLowerCase().includes(searchInput.toLowerCase()) ||
        event.location.toLowerCase().includes(searchInput.toLowerCase()) ||
        (event.virtual ? "Virtual" : "In-Person").toLowerCase().includes(searchInput.toLowerCase())
    ); 

    
    return (
        <div>
            <input 
                type="search"
                placeholder="Keywords"
                onChange={handleChange}
                value={searchInput} 
                className="search-input"
            />

            {/* toggles show results and hide results  */}
            <button onClick={handleChange} className="search-button">
                Show Results 
            </button>


            {filteredEvents.length > 0 ? (
                <>
                {filteredEvents.map((event, index) => (
                    <Results
                        key={index}
                        organization={event.organizerName}
                        virtual={event.virtual}
                        favorited={event.favorited}
                        location={event.location}
                        maxParticipants={event.maxParticipants}
                        description={event.eventDescription}
                        startDate={event.startDateTime}
                        endDate={event.endDateTime}
                        eventType={event.eventType}
                        orgEmail={event.organizerEmail}
                        orgPhone={event.organizerPhone}
                        onFavorite={() => handleFavorite(event.id)}
                        onApply={() => handleApply(event.id)}
                    />
                ))}
                </>
            ) : (
                // displays this message only when there is input and no results 
                searchInput && <p>No results found.</p>
            )}
        </div>
        );
};

export default SearchBar;