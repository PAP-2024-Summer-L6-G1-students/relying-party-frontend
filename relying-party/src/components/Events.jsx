import './Events.css';

export default function Events({header, paragraph}) {
    return (
        <div className="event">
            <h4>{header}</h4>
            <p>{paragraph}</p>
        </div>
    );
}