import FavoriteIcon from '@mui/icons-material/Favorite';
import './Results.css'
import placeholderImage from '../../images/placeholder.png';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function Results(props) {
    let virtualString = "Virtual";
    if (props.virtual === false) {
        virtualString = "In-Person";
    }

    let favoriteIcon = <FavoriteBorderIcon sx={{color: 'red', fontSize: 35 }} />;
    if (props.favorited === true) {
        favoriteIcon = <FavoriteIcon sx={{ color: 'red', fontSize: 35 }} />;
    }
    return (
        <>
            <div className="results-box">
                <h2 className='organization'> {props.organization}</h2>

                <div className='options'>
                    <IconButton color="primary" aria-label="add to favorite events" onClick={props.onFavorite}>
                        {favoriteIcon}
                    </IconButton>
                    <button className='apply' onClick={props.onApply} >Apply</button>
                </div>
                <img className="placeholder" src={props.orgLogo ?? placeholderImage} alt={props.orgLogoAltText ?? "This is a placeholder for the companies logo"} />
                <h4 className='description'>Description: {props.description} <br /> {virtualString} | {props.startDate} | {props.eventType} </h4>
            </div>
        </>
    );
}