import Results from '../components/Results.jsx';
import { useState, useEffect } from 'react';

export default function EventsFavorited() {
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

    return (
        // This header is just to setupt the links, can delete later
        <>
            <div id="events-favoritedpage">
                <h1>This is the events favorited page</h1>
            </div>
            {
                events.map((event, index) => (
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
                ))
            }
        </>

    )
}