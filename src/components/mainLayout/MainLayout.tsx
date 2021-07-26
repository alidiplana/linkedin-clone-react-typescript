import FeedsList from "./components/FeedsList";
import ShareFeedBox from "./components/ShareFeedBox";
import './mainLayout.css';

const MainLayout: React.FC = () => {
  return (
    <div>
      <ShareFeedBox />
      <FeedsList />
    </div>
  );
};

export default MainLayout;