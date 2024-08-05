import FavoriteIcon from '@mui/icons-material/Favorite';
import './Results.css'

export default function Results() {
    return (
        <>
            <div id="results-box">
                <h2 class='description'>Red Cross</h2>

                <div id='options'>
                    <FavoriteIcon sx={{ color: 'red', fontSize: 35 }} />
                    <button id='apply'>Apply</button>
                </div>
                <img class='placeholder' src="./images/placeholder.png" alt="placeholder for companies real image logo" />
                <h4 class='description'>Description: This event will raise awearness about blood drives happening in Seattle, WA <br></br>
                    Virtual | July 17th | Volunteer
                </h4>
            </div>

            <div id="results-box">
                <h2 class='description'>Humane Society</h2>

                <div id='options'>

                    <FavoriteIcon sx={{ color: 'red', fontSize: 35 }} />
                    <button id='apply'>Apply</button>
                </div>
                <img class='placeholder' src="./images/placeholder.png" alt="placeholder for companies real image logo" />
                <h4 class='description'>Description: This event will raise awearness about animal cruelty and how to prevent it happening in Seattle, WA <br></br>
                    In-Person | July 20th | Volunteer
                </h4>
            </div>

            <div id="results-box">
                <h2 class='description'>Non-Profit technology</h2>

                <div id='options'>
                    <FavoriteIcon sx={{ color: 'red', fontSize: 35 }} />
                    <button id='apply'>Apply</button>
                </div>
                <img class='placeholder' src="./images/placeholder.png" alt="placeholder for companies real image logo" />
                <h4 class='description'>Description: This event will raise awearness about leveraging technology in our society and how to advance its impact in Seattle, WA <br></br>
                    Hybrid | August 2nd | Volunteer
                </h4>
            </div>
        </>
    );
}