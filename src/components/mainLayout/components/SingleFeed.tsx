import dp from "../../../assets/2.jpg";
import { BiWorld } from "react-icons/bi";
import "./SingleFeed.css";

const singleFeed = () => {
  return (
    <div className="feed-container">
      <div className="feed-shared-actor">
        <img className="feed-shared-actor__image" src={dp} alt="Uzair Rizwan" />
        <div className="feed-shared-actor__info">
          <div className="feed-shared-actor__info-display-name">
            <p className="feed-shared-actor__info-name">Uzair Rizwan </p>
            <p className="feed-shared-actor__info-rank"> • 1st</p>
          </div>
          <p className="feed-shared-actor__info-designation">
            Data Scientist at Systems Limited
          </p>
          <div className="feed-shared-actor__info-time-container">
            <p className="feed-shared-actor__info-time">28m • </p>
            <BiWorld className="feed-shared-actor__info-icon" size={14} />
          </div>
        </div>
      </div>
      <div className="feed-shared-description">
        <p className="feed-shared-text">
          Alhamdulillah! By the grace of Allah (SWT), I'm really grateful to
          announce that I have joined Systems Limited as a Consultant - Data
          Scientist, in their AI department. Systems Limited is a global leader
          of next-generation IT services and BPO solutions. And I'm really
          looking forward to this exciting journey ahead. I'd like to thank all
          the people who have supported me throughout my career, especially my
          parents, family, friends & colleagues. Special thanks to Tariq
          Muhammad for believing in me, and Salman Ghani for his support
          throughout the recruitment process. It is indeed Allah (SWT), who has
          blessed me with such an amazing opportunity, for I myself is nothing.
          Looking forward to being a part of this amazing organization.
        </p>
      </div>
    </div>
  );
};

export default singleFeed;
