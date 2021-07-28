import { BsFillPeopleFill } from "react-icons/bs";
import {
  RiContactsBookLine,
  RiUserFollowLine,
  RiPagesLine,
} from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { MdEventAvailable } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { BiHash } from "react-icons/bi";
import adImage from "../../../assets/add.png";
import dp from "../../../assets/2.jpg";
import wallpaper from "../../../assets/wallpaper.jpeg";
import eventdp from "../../../assets/eventdp.png";
import "./myNetwork.css";

const MyNetwork = () => {
  return (
    <div className="layout">
      <div className="top-spacing"></div>
      <div className="my-network">
        <div className="my-network-container">
          <div className="my-network__summary">
            <div className="my-network__summary-heading">Manage my network</div>
            <div className="my-network__summary-entity">
              <div className="my-network__summary-entity-title-info">
                <BsFillPeopleFill
                  size={25}
                  className="my-network__summary-entity-title-styling"
                />
                <div className="my-network__summary-entity-title-styling">
                  Connections
                </div>
              </div>
              <div className="my-network__summary-entity-title-styling">
                630
              </div>
            </div>

            <div className="my-network__summary-entity">
              <div className="my-network__summary-entity-title-info">
                <RiContactsBookLine
                  size={25}
                  className="my-network__summary-entity-title-styling"
                />
                <div className="my-network__summary-entity-title-styling">
                  Contacts
                </div>
              </div>
              <div className="my-network__summary-entity-title-styling">32</div>
            </div>

            <div className="my-network__summary-entity">
              <div className="my-network__summary-entity-title-info">
                <RiUserFollowLine
                  size={25}
                  className="my-network__summary-entity-title-styling"
                />
                <div className="my-network__summary-entity-title-styling">
                  People I Follow
                </div>
              </div>
              <div className="my-network__summary-entity-title-styling">9</div>
            </div>

            <div className="my-network__summary-entity">
              <div className="my-network__summary-entity-title-info">
                <TiGroup
                  size={25}
                  className="my-network__summary-entity-title-styling"
                />
                <div className="my-network__summary-entity-title-styling">
                  Groups
                </div>
              </div>
              <div className="my-network__summary-entity-title-styling">15</div>
            </div>

            <div className="my-network__summary-entity">
              <div className="my-network__summary-entity-title-info">
                <MdEventAvailable
                  size={25}
                  className="my-network__summary-entity-title-styling"
                />
                <div className="my-network__summary-entity-title-styling">
                  Events
                </div>
              </div>
              <div className="my-network__summary-entity-title-styling"></div>
            </div>

            <div className="my-network__summary-entity">
              <div className="my-network__summary-entity-title-info">
                <RiPagesLine
                  size={25}
                  className="my-network__summary-entity-title-styling"
                />
                <div className="my-network__summary-entity-title-styling">
                  Pages
                </div>
              </div>
              <div className="my-network__summary-entity-title-styling">
                101
              </div>
            </div>

            <div className="my-network__summary-entity">
              <div className="my-network__summary-entity-title-info">
                <FaRegNewspaper
                  size={25}
                  className="my-network__summary-entity-title-styling"
                />
                <div className="my-network__summary-entity-title-styling">
                  Newsletters
                </div>
              </div>
              <div className="my-network__summary-entity-title-styling"></div>
            </div>

            <div className="my-network__summary-entity">
              <div className="my-network__summary-entity-title-info">
                <BiHash
                  size={25}
                  className="my-network__summary-entity-title-styling"
                />
                <div className="my-network__summary-entity-title-styling">
                  Hashtags
                </div>
              </div>
              <div className="my-network__summary-entity-title-styling">24</div>
            </div>
          </div>
          <div className="my-network__image-container">
            <img className="my-network__image" src={adImage} alt="ad" />
          </div>
        </div>
        <div className="my-network__main">
          <div className="my-network__main-invitation-container">
            <div className="my-network__main-invitation-heading-container">
              <p>Invitations</p>
              <p className="my-network__main-invitation-subheading">Manage</p>
            </div>
            <div className="my-network__main-invitation-card">
              <div className="my-network__main-invitation-card-left">
                <img
                  className="my-network__main-invitation-card-image"
                  src={dp}
                  alt="Muhammad Ali"
                />
                <div className="my-network__main-invitation-card-description">
                  <div className="my-network__main-invitation-card-description-title">
                    Muhammad Nadeem
                  </div>
                  <div className="my-network__main-invitation-card-description-subtitle">
                    Student at Preston University
                  </div>
                </div>
              </div>
              <div className="my-network__main-invitation-card-description-buttons">
                <button className="my-network__main-invitation-card-description-button1-style">
                  Ignore
                </button>
                <button className="my-network__main-invitation-card-description-button2-style">
                  Accept
                </button>
              </div>
            </div>
          </div>
          <div className="my-network__main-events">
            <div
              style={{ border: "unset" }}
              className="my-network__main-invitation-heading-container"
            >
              <p>Online events for you</p>
              <p className="my-network__main-invitation-subheading">See all</p>
            </div>
            <div className="my-network__main-events-grid">
              <div className="my-network__main-events-grid-card">
                <img
                  className="my-network__main-events-grid-card-image"
                  src={wallpaper}
                  alt="ali"
                />
                <img
                  className="my-network__main-events-grid-card-image-dp"
                  src={eventdp}
                  alt="event"
                />
                <h3 className="my-network__main-events-grid-card-heading">
                  The Black Is Tech Conference 2021
                </h3>
                <p className="my-network__main-events-grid-card-date">Mon, Sep 20 - Sat, Sep 25 </p>
                <p className="my-network__main-events-grid-card-attendees">6,306 attendees</p>
              </div>
              <div className="my-network__main-events-grid-card">
                <img
                  className="my-network__main-events-grid-card-image"
                  src={wallpaper}
                  alt="ali"
                />
                <img
                  className="my-network__main-events-grid-card-image-dp"
                  src={eventdp}
                  alt="event"
                />
                <h3 className="my-network__main-events-grid-card-heading">
                  The Black Is Tech Conference 2021
                </h3>
                <p className="my-network__main-events-grid-card-date">Mon, Sep 20 - Sat, Sep 25 </p>
                <p className="my-network__main-events-grid-card-attendees">6,306 attendees</p>
              </div>
              <div className="my-network__main-events-grid-card">
                <img
                  className="my-network__main-events-grid-card-image"
                  src={wallpaper}
                  alt="ali"
                />
                <img
                  className="my-network__main-events-grid-card-image-dp"
                  src={eventdp}
                  alt="event"
                />
                <h3 className="my-network__main-events-grid-card-heading">
                  The Black Is Tech Conference 2021
                </h3>
                <p className="my-network__main-events-grid-card-date">Mon, Sep 20 - Sat, Sep 25 </p>
                <p className="my-network__main-events-grid-card-attendees">6,306 attendees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNetwork;
