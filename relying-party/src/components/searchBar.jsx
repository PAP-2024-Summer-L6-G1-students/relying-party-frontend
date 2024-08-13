import React, {useState} from "react";
import '../components/SearchBar.css'
import Results from '../components/Results.jsx';

const SearchBar = ({ events }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const filteredEvents = events.filter((event) => 
        event.organizerName.toLowerCase().includes(searchInput.toLowerCase()) ||
        event.eventType.toLowerCase().includes(searchInput.toLowerCase()) ||
        event.location.toLowerCase().includes(searchInput.toLowerCase()) ||
        (event.virtual ? "Virtual" : "In-Person").toLowerCase().includes(searchInput.toLowerCase())
    ); 

    const handleApply = async (eventId) => {
        try {
            const identityProviderUserID = "ExampleAccountID"; // REPLACE THIS LINE WITH ACCOUNT ID
            const response = await fetch(`/accounts/${identityProviderUserID}/events/${eventId}/apply`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                console.log("Event successfully applied to.");
            } else {
                console.error("Failed to apply for event.");
            }
        } catch (error) {
            console.error("Error applying for event:", error);
        }
    };
    
    return (
        <div>
            <input 
                type="search"
                placeholder="Keywords"
                onChange={handleChange}
                value={searchInput} 
                className="search-input"
            />


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
                searchInput && <p>No results found.</p>
            )}
        </div>
        );
};

export default SearchBar;