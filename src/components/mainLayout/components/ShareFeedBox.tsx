import displayPicture from "../../../assets/2.jpg";
import "./shareFeedBox.css";
import { BsCardImage } from "react-icons/bs";
import { RiCalendarEventLine } from "react-icons/ri";
import {IoVideocamOutline} from 'react-icons/io5';
import { GrArticle} from 'react-icons/gr';

const ShareFeedBox:React.FC = () => {
  return (
    <div className="share-box-feed-entry">
      <div className="share-box-feed-entry__card1">
        <img className="card1-image" src={displayPicture} alt="Muhammad Ali" />
        <input className="card1-search" placeholder="Start a post" />
      </div>
      <div className="share-box-feed-entry__card2">
        <div className="share-box-feed-entry__card2-container">
          <BsCardImage
            size={20}
            className="card2-container-image"
          />
          <p>Photo</p>
        </div>
        <div className="share-box-feed-entry__card2-container">
          <IoVideocamOutline size={20} className="card2-container-image" />
          <p>Video</p>
        </div>
        <div className="share-box-feed-entry__card2-container">
          <RiCalendarEventLine size={20} className="card2-container-image" />
          <p>Event</p>
        </div>
        <div className="share-box-feed-entry__card2-container">
          <GrArticle size={20} className="card2-container-image" />
          <p>Write Article</p>
        </div>
      </div>
    </div>
  );
};

export default ShareFeedBox;
