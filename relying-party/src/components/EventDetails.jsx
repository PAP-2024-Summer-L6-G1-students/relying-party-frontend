import './EventDetails.css';
import React, { useState } from 'react';

export default function EventDetails() {
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }
    return (
        <div id='event-details-section'>
            <div className='event-details-cont'>
                <h3>Event Details</h3>
                <div>
                    <h3>Virtual Event:</h3>
                    <label>
                        <input 
                        type="radio" 
                        value="yes" 
                        checked={selectedOption === 'yes'} 
                        onChange={handleOptionChange}
                        />Yes
                    </label>
                    <label>
                        <input 
                        type="radio" 
                        value="no" 
                        checked={selectedOption === 'no'} 
                        onChange={handleOptionChange}
                        />No
                    </label>
                </div>
            </div>
            <div className='input-grid'>
                <div className='input-container'>
                    <label htmlFor="start-date" className='field-label'>Start Date:</label>
                    <input type="text" id='start-date' className='start-date'/>
                </div>
                <div className='input-container'>
                    <label htmlFor="start-time" className='field-label'>Start Time:</label>
                    <input type="text" id='start-time' className='start-time'/>
                </div>
                <div className='input-container'>
                    <label htmlFor="location" className='field-label'>Location:</label>
                    <input type="text" id='location' className='location'/>
                </div>
                <div className='input-container'>
                    <label htmlFor="end-date" className='field-label'>End Date:</label>
                    <input type="text" id='end-date' className='end-date'/>
                </div>
                <div className='input-container'>
                    <label htmlFor="end-time" className='field-label'>End Time:</label>
                    <input type="text" id='end-time' className='end-time'/>
                </div>
                <div className='input-container'>
                    <label htmlFor="url" className='field-label'>URL:</label>
                    <input type="text" id='url' className='url'/>
                </div>
            </div>
        </div>
    )
}