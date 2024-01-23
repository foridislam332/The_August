import { Helmet } from "react-helmet";
import HeroBanner from "../../sections/HeroBanner";
import MenItem from "../../components/MenItem";


const Men = () => {
    return (
      <div>
        <Helmet>
          <title>The August - Fashion Platform</title>
        </Helmet>

            <HeroBanner />
            <MenItem></MenItem>
      </div>
    );
};

export default Men;