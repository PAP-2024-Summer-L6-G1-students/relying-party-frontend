import './EventInfo.css';
import EventOverview from '../components/EventOverview';
import EventDetails from '../components/EventDetails';
import MainLayout from '../layouts/MainLayout';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import react, { useState } from 'react';

export default function EventInfo() {
  // State to manage color of icon
  const [color, setColor] = useState('white');
  const changeColor = () => {
    setColor(prevColor => (prevColor === 'white' ? 'red' : 'white')); // Chnage the color
  }
  return (
    <div id='event-info'>
      <div className='event-overview'>
        <h3>Event Overview</h3>
        <button className='apply-btn'>Apply</button>
        <Link onClick={changeColor} className='heart-icon'>
          <FavoriteIcon style={{color: color, fontSize: '40px'}}/>
        </Link>
      </div>
      <EventOverview />
      <hr className='horizontal-line'/>
      <EventDetails />
    </div>
  )
}


