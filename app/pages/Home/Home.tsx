import AwardsBadge from 'components/Home/AwardsBadge';
import HorizontalScreen from 'components/Home/HorizontalScreen';
import { IntroPanel, AboutPanel } from 'pages/Home/panels';

const Home = () => {
  return (
    <>
      {/* <AwardsBadge /> */}
      <HorizontalScreen>
        <IntroPanel />
        <AboutPanel />
      </HorizontalScreen>
    </>
  );
};

export default Home;
