import "./home.css";
import Sidebar from "../sidebarLayout/SidebarLayout";
import AsideLayout from "../asideLayout/AsideLayout";
import MainLayout from "../mainLayout/MainLayout";

const Home: React.FC = () => {
  return (
    <div className="layout">
      <div className="home">
        <div className="top-spacing"></div>
        <div className="scaffold-layout">
          <div className="scaffold-layout__sidebar">
            <Sidebar />
          </div>
          <div className="scaffold-layout__main">
            <MainLayout />
          </div>
          <div className="scaffold-layout__aside">
            <AsideLayout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
