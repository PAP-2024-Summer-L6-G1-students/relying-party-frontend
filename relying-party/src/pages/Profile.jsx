import React, { useState, useEffect } from 'react';
import '../pages/Profile.css'
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


export default function Profile() {
    const [profile, setProfile] = useState({
        firstName: 'N/A', 
        lastName: 'N/A',
        address: 'N/A',
        phone: 'XXX-XXX-XXXX',
        birthday: 'XX/XX/XXXX',
        email: 'N/A',
        bio: 'N/A'
    });

    // On start up grabs user info from identity provider
    useEffect(()=>{
        async function gettingInfo() {
            const result = await fetch("https://localhost:3003/get-user-info", {credentials: 'include'});
            const resultData = await result.json();
            console.log(resultData);
            setProfile(resultData);
        }
        gettingInfo();
    } , []);


    return (

        <div className='profile-page'>
            <div className='profile-card'>
                <h3 className='profile-name'>Welcome {profile.firstName} {profile.lastName},</h3>
                <table className='profile-table'>
                    <tbody>
                        <tr>
                            <td className='profile-label'>Birthday: </td>
                            <td className='profile-info'>{profile.birthday}</td>
                        </tr>
                        <tr>
                            <td className='profile-label'>Address:</td>
                            <td className='profile-info'>{profile.address}</td>
                        </tr>
                        <tr>
                            <td className='profile-label'>Phone:</td>
                            <td className='profile-info'>{profile.phone}</td>
                        </tr>
                        <tr>
                            <td className='profile-label'>Email:</td>
                            <td className='profile-info'>{profile.email}</td>
                        </tr>
                        <tr>
                            <td className='profile-label'>Bio:</td>
                            <td className='profile-info'>{profile.bio}</td>
                        </tr>
                    </tbody>
                </table>

                <div className='event-link'>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                    Your Events
                    </AccordionSummary>
                    <AccordionDetails>
                        <Link to='EventsFavorited' className='link'>Events Favorited</Link>
                            <Link to='EventsApplied' className='link'>Events Applied</Link>
                            <Link to='EventsCreated' className='link'>Events Created</Link>
                    </AccordionDetails>
                </Accordion>

                </div>
            </div>
        </div>
    )
}