import './LandingPage.css';
import Events from '../components/Events';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export default function LandingPage() {
  const imagePath = '/volunteerimage.jpg'
  return (
    <div id='landing-page'>
      <h2>Trending Events</h2>
      <Events header={"Example Event 1"} paragraph={"This is an example of event description. All events will have a description field in the database which can be used here"}/>
      <Events header={"Example Event 2"} paragraph={"This is an example of event description. All events will have a description field in the database which can be used here"}/>
      <h2>Today's Inspiration</h2>
      <div className='image-container'>
        <img className='image' src={imagePath} alt="Image of a group of volunteers" />
        <h3 className='text-over-image'>Example volunteer story title</h3>
        <div className='read-more-container'>
          <p className='read-more'>READ MORE</p>
          <a href="" className='arrow-icon'><ArrowCircleRightOutlinedIcon/></a>
        </div>
      </div>
    </div>
  );
}

