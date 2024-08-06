import FavoriteIcon from '@mui/icons-material/Favorite';
import './Results.css'
import placeholderImage from '../../images/placeholder.png';
export default function Results(props) {
    return (
        <>
            <div className="results-box">
                <h2 className='organization'>Red Cross</h2>
                {props.organization}

                <div className='options'>
                    <FavoriteIcon sx={{ color: 'red', fontSize: 35 }} />
                    <button className='apply'>Apply</button>
                </div>
                <img className="placeholder" src={placeholderImage} alt='placeholder for companies real image logo' />
                {props.placeholder}
                <h4 className='description'>Description: This event will raise awearness about blood drives happening in Seattle, WA <br />
                    Virtual | July 17th | Volunteer
                </h4>
                {props.description}
            </div>
        </>
    );
}