import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Results.css';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Results(props) {
    const [applied, setApplied] = useState(false);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: 'short', day: 'numeric' };
        const formattedDate = date.toLocaleDateString(undefined, options);
        const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `${formattedDate} at ${time}`;
    };

    let virtualString = "Virtual";
    if (props.virtual === false) {
        virtualString = "In-Person";
    }

    let favoriteIcon = <FavoriteBorderIcon sx={{ color: 'red', fontSize: 35 }} />;
    if (props.favorited === true) {
        favoriteIcon = <FavoriteIcon sx={{ color: 'red', fontSize: 35 }} />;
    }

    const handleApplyClick = () => {
        setApplied(true);
        props.onApply(); // Call the parent's onApply function if needed
    };

    return (
        <>
            <div className="results-box">
                <h2 className='organization'>{props.organization}</h2>

                <div className='options'>
                    <IconButton color="primary" aria-label="add to favorite events" onClick={props.onFavorite}>
                        {favoriteIcon}
                    </IconButton>
                    <button
                        className={`apply ${applied ? 'applied' : ''}`}
                        onClick={handleApplyClick}
                        disabled={applied}
                    >
                        {applied ? 'Applied' : 'Apply'}
                    </button>
                </div>

                <h4 className='description'>
                    Description: {props.description} <br />
                    {formatDate(props.startDate)} to {formatDate(props.endDate)} <br />
                    <br />
                    Virtual: {virtualString} <br />
                    Location: {props.location} <br />
                    Event Type: {props.eventType} <br />
                    Max Participants: {props.maxParticipants} <br />
                    <br />
                    Contact Info: <br />
                    {props.orgEmail} <br />
                    {props.orgPhone} <br />
                </h4>
            </div>
        </>
    );
}