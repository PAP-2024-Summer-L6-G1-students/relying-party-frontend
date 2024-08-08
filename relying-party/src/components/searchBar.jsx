import React, {useState} from "react";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [showSearch, setShowSearch] = useState(true);

    const events = [
        // environmental conservation
        { eventName: "Beach Clean Up", eventType: "Environmental Conservation"},
        { eventName: "Park Restoration Project", eventType: "Environmental Conservation"},
        { eventName: "Tree Planting", eventType: "Environmental Conservation"},
        // food service & distribution 
        { eventName: "Community Food Drive", eventType: "Food Service "},
        { eventName: "Homeless Shelter Meal Prep", eventType: "Food Service "},
        { eventName: "Foodbank Distribution", eventType: "Food Service"},
        // community support & assistance
        { eventName: "Senior Center Support", eventType: "Community Support"},
        { eventName: "Camp Counselor for Kids", eventType: "Community Support"},
        { eventName: "Teach Tech", eventType: "Community Support"},
        // animal care & support 
        { eventName: "Animal Shelter Volunteer", eventType: "Animal Care"},
        { eventName: "Save Our Marine Life", eventType: "Animal Care"},
        { eventName: "Foster Pets", eventType: "Animal Care"},
        // education and tutoring 
        { eventName: "Literacy Tutoring Program", eventType: "Education & Tutoring"},
        { eventName: "Arts and Crafts Workshop", eventType: "Education & Tutoring"},
        { eventName: "Financial Literacy Workshop", eventType: "Education & Tutoring"},
        // health and medical assistance 
        { eventName: "Blood Donation Drive", eventType: "Health and Medical Assistance"},
        { eventName: "Women's Menstrual Drive", eventType: "Health and Medical Assistance"},
        { eventName: "Diaster Relief", eventType: "Health and Medical Assistance"}
    ];

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const toggleResults = () => {
        setShowSearch(!showSearch);
    };

    const filteredEvents = events.filter((event) => 
        event.eventName.toLowerCase().includes(searchInput.toLowerCase()) ||
        event.eventName.toLowerCase().includes(searchInput.toLowerCase()) ||
        event.eventType.toLowerCase().includes(searchInput.toLowerCase()) ||
        event.eventType.toLowerCase().includes(searchInput.toLowerCase())
    );
    
    return (
    <div>
        <input 
            type="search"
            placeholder="Search for events"
            onChange={handleChange}
            value={searchInput} 
        />
        <button onClick={toggleResults}>Show Results</button>

        {/* {showSearch && (
            <div className="results">
                <div className="results-content">
                    <span className="close" onClick={toggleResults}>&times;</span>
                    <h2>Search results</h2>
                </div>
        )} */}

        
        {/* <table>
            <tr>
                <th>Event Name</th>
                <th> Volunteer Type </th>
            </tr>
            <tbody>
                {filteredEvents.map((event, index) => (
                    <tr key={index}>
                        <td>{event.eventName}</td>
                        <td>{event.eventType} </td>
                    </tr>
                ))}
            </tbody>
        </table> */}
    </div>
    );
};
export default SearchBar