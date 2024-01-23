import { Helmet } from "react-helmet";
import HeroBanner from "../../sections/HeroBanner";
import KidItem from "../../components/KidItem";


const Kids = () => {
    return (
      <div>
        <Helmet>
          <title>The August - Fashion Platform</title>
        </Helmet>

            <HeroBanner />
            <KidItem></KidItem>
      </div>
    );
};

export default Kids;