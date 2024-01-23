import { Helmet } from "react-helmet";
import HeroBanner from "../../sections/HeroBanner";
import WomenItem from "../../components/WomenItem";


const Women = () => {
    return (
      <div>
        <Helmet>
          <title>The August - Fashion Platform</title>
        </Helmet>

        <HeroBanner />
        <WomenItem></WomenItem>
      </div>
    );
};

export default Women;