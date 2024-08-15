import './Events.css';

export default function Events({ header, paragraph, location, category, startDateTime, endDateTime }) {
    const formatDateTime = (isoString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
        return new Date(isoString).toLocaleString(undefined, options);
    };

    return (
        <div className="event">
            <h4>{header}</h4>
            <p>{paragraph}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Start:</strong> {formatDateTime(startDateTime)}</p>
            <p><strong>End:</strong> {formatDateTime(endDateTime)}</p>
        </div>
    );
}