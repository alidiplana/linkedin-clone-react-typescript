import Avatar from "@material-ui/core/Avatar";
import "./sidebarLayout.css";

const Sidebar:React.FC  = () => {
  return (
    <div className="sidebar-container">
      <div className="scaffold-layout__sidebar-card1">
        <div className="card-styling" style={{ width: "100%" }}>
          <img
            width="100%"
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
          <Avatar
            className="image"
            src="../../assets/2.jpg"
            alt="Muhammad Ali"
          />
          <p className="card-styling__name">Muhammad Ali</p>
          <p className="card-styling__title">Software Engineer at Emumba</p>
        </div>
        <div className="profile-view">
          <div className="profile-view__row">
            <p className="profile-view__row-paragraph">
              Who viewed your profile
            </p>
            <p className="profile-view__row-number">51</p>
          </div>
          <div className="profile-view__row">
            <p className="profile-view__row-paragraph">Views of your post</p>
            <p className="profile-view__row-number">1,111</p>
          </div>
        </div>
        <div className="premium-box">
          <p className="premium-box__paragraph">
            Access exclusive tools & insights
          </p>
          <p className="premium-box__paragraph-bold">Try Premium for free</p>
        </div>
        <div className="my-items">
          <p className="premium-box__paragraph-bold">My items</p>
        </div>
      </div>
      <div className="scaffold-layout__sidebar-card2">
        <div className="margin-left">
          <div className="heading-tab">
            <p className="heading-styling">Recent</p>
            <div className="sub-heading-container">
              <div className="sub-heading-tab">
                <p className="sub-heading-tab-styling">#</p>
                <p className="sub-heading-tab-styling">flutter</p>
              </div>
              <div className="sub-heading-tab">
                <p className="sub-heading-tab-styling">#</p>
                <p className="sub-heading-tab-styling">angular</p>
              </div>
              <div className="sub-heading-tab">
                <p className="sub-heading-tab-styling">#</p>
                <p className="sub-heading-tab-styling">management</p>
              </div>
              <div className="sub-heading-tab">
                <p className="sub-heading-tab-styling">#</p>
                <p className="sub-heading-tab-styling">human resources</p>
              </div>
              <div className="sub-heading-tab">
                <p className="sub-heading-tab-styling">#</p>
                <p className="sub-heading-tab-styling">future</p>
              </div>
            </div>
          </div>
          <div className="groups-container">
            <p className="group-heading">Groups</p>
            <p className="group-content">Mechanical Design Engineer</p>
            <p className="group-content">Learn UI UX</p>
            <p className="group-content">World, the Worldwide Logo</p>
          </div>
          <div className="groups-container">
            <p className="group-heading">Events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
