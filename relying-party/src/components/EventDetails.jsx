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
                <input type="text" placeholder='Start Date:'className='start-date'/>
                <input type="text" placeholder='End Time:' className='end-date'/>
                <input type="text" placeholder='Location:' className='location'/>
                <input type="text" placeholder='End Date:' className='end-time'/>
                <input type="text" placeholder='Start Time:' className='start-time'/>
                <input type="text" placeholder='URL:'className='url'/>
            </div>
        </div>
    )
}