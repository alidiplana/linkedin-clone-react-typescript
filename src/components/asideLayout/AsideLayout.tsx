import "./asideLayout.css";
import AdImage from "../../assets/add.png";

const AsideLayout: React.FC = () => {
  return (
    <div className="aside-container">
      <div className="aside-container__card1">
        <p className="aside-container__title">Today's top courses</p>
        <p className="aside-container__heading">
          1. Practices for Regulating Your...
        </p>
        <p className="aside-container__subHeading">Jay Fields</p>
        <p className="aside-container__heading">2. Digital Transformation</p>
        <p className="aside-container__subHeading">Peter High</p>
        <p className="aside-container__heading">
          3. 15 Secrets Successful People ...
        </p>
        <p className="aside-container__subHeading">getAbstract</p>
        <p className="show-more">Show more on LinkedIn Learning</p>
      </div>
      <div className="aside-container__card2">
        <img className="aside-container__card2-image" src={AdImage} alt="ad"/>
      </div>
    </div>
  );
};

export default AsideLayout;
