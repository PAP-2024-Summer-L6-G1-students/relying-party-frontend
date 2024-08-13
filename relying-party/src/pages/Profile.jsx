import './Profile.css'
import { Link } from 'react-router-dom';


export default function Profile() {
    return (
        <div id='profile-page'>
            <Link to='ContactInfo' className='link'>Contact Info</Link>
            <Link to='EventsApplied' className='link'>Events Applied</Link>
            <Link to='EventsCreated' className='link'>Events Created</Link>
        </div>
    )
}