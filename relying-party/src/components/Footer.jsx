import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { Paper } from '@mui/material';
import './Footer.css'
export default function Footer() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <footer id="page-footer">
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "center" }} elevation={3}>
        <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeIcon onClick={() => window.location.replace('main.jsx')}/>}
          />
          <BottomNavigationAction
            label="Search"
            value="search"
            icon={<SearchIcon />}
          />
          <BottomNavigationAction
            label="Add Event"
            value="events"
            icon={<AddIcon />}
          />
          <BottomNavigationAction
            label="Profile"
            value="profile"
            icon={<PersonIcon />}
          />
        </BottomNavigation>
      </Paper>
    </footer>
  );
}

