import React, {useState} from "react";
import '../components/SearchBar.css'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    const events = [
        // environmental conservation
        { eventName: "Beach Clean Up", eventType: "Environmental Conservation", location: "", virtual: "In-person"},
        { eventName: "Park Restoration Project", eventType: "Environmental Conservation", location: "", virtual: "In-person"},
        { eventName: "Tree Planting", eventType: "Environmental Conservation", location: "", virtual: "In-person"},
        // food service & distribution 
        { eventName: "Community Food Drive", eventType: "Food Service ", location: "", virtual: "In-person"},
        { eventName: "Homeless Shelter Meal Prep", eventType: "Food Service ", location: "", virtual: "In-person"},
        { eventName: "Foodbank Distribution", eventType: "Food Service", location: "", virtual: "In-person"},
        // community support & assistance
        { eventName: "Senior Center Support", eventType: "Community Support", location: "", virtual: "In-person"},
        { eventName: "Camp Counselor for Kids", eventType: "Community Support", location: "", virtual: "In-person"},
        { eventName: "Teach Tech", eventType: "Community Support", location: "", virtual: "Virtual"},
        // animal care & support 
        { eventName: "Animal Shelter Volunteer", eventType: "Animal Care", location: "", virtual: "In-person"},
        { eventName: "Save Our Marine Life", eventType: "Animal Care", location: "", virtual: "Virtual"},
        { eventName: "Foster Pets", eventType: "Animal Care", location: "", virtual: "In-person"},
        // education and tutoring 
        { eventName: "Literacy Tutoring Program", eventType: "Education & Tutoring", location: "", virtual: "Virtual"},
        { eventName: "Arts and Crafts Workshop", eventType: "Education & Tutoring", location: "", virtual: "In-person"},
        { eventName: "Financial Literacy Workshop", eventType: "Education & Tutoring", location: "", virtual: "Virtual"},
        // health and medical assistance 
        { eventName: "Blood Donation Drive", eventType: "Health and Medical Assistance", location: "", virtual: "In-person"},
        { eventName: "Women's Menstrual Drive", eventType: "Health and Medical Assistance", location: "", virtual: "In-person"},
        { eventName: "Diaster Relief", eventType: "Health and Medical Assistance", location: "", virtual: "In-person"}
    ];

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const toggleResults = () => {
        setShowSearch(!showSearch);
    };

    const filteredEvents = events.filter((event) => 
        event.eventName.toLowerCase().includes(searchInput.toLowerCase()) ||
        event.eventType.toLowerCase().includes(searchInput.toLowerCase()) ||
        event.location.toLowerCase().includes(searchInput.toLowerCase()) ||
        event.virtual.toLowerCase().includes(searchInput.toLowerCase()) 

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
        <button onClick={toggleResults} className="search-button">
            {showSearch ? "Hide Results" : "Show Results"}
        </button>

{showSearch && filteredEvents.length > 0 ? (
                <div className="grid-container">
                    {filteredEvents.map((event, index) => (
                        <div key={index} className="grid-item">
                            <h3>{event.eventName}</h3>
                            <p>{event.eventType}</p>
                        </div>
                    ))}
                </div>
            ) : (
                searchInput && <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchBar;