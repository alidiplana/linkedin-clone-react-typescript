import "./header.css";
import Logo from "../../assets/linkedin.png";
import { ImHome3 } from "react-icons/im";
import {
  BsFillPeopleFill,
  BsBriefcaseFill,
  BsGrid3X3Gap,
} from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { AiOutlineSearch } from "react-icons/ai";

const Header:React.FC = () => {
  return (
    <div className="header">
      <img className="header-image" src={Logo} alt="logo" />
      <div className="input-type">
        <AiOutlineSearch color="hsl(0, 0%, 50%)" className="search" size={20} />
        <input className="header-input" type="text" placeholder="Search" />
      </div>
      <div className="icon-styling">
        <ImHome3 color="hsl(0, 0%, 40%)" size="24" />
        <p className="text-styling">Home</p>
      </div>
      <div className="icon-styling">
        <BsFillPeopleFill color="hsl(0, 0%, 40%)" size="24" />
        <p className="text-styling">My Networks</p>
      </div>
      <div className="icon-styling">
        <BsBriefcaseFill color="hsl(0, 0%, 40%)" size="24" />
        <p className="text-styling">Jobs</p>
      </div>
      <div className="icon-styling">
        <RiMessage2Fill color="hsl(0, 0%, 40%)" size="24" />
        <p className="text-styling">Messaging</p>
      </div>
      <div className="icon-styling">
        <IoIosNotifications color="hsl(0, 0%, 40%)" size="24" />
        <p className="text-styling">Notification</p>
      </div>
      <div className="avatar-styling">
        <Avatar shape="circle"  size="large" icon={<UserOutlined color="hsl(0, 0%, 40%)"/>} />
        <p className="text-styling">Me</p>
      </div>
      <div className="header-right">
        <div className="icon-styling">
          <BsGrid3X3Gap color="hsl(0, 0%, 40%)" size="25"/>
          <p className="text-styling">Work</p>
        </div>
        <p className="paragraph">Try Premium for free</p>
      </div>
    </div>
  );
};

export default Header;
