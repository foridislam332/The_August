import { Helmet } from "react-helmet";
import HeroBanner from "../sections/HeroBanner";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>The August - Fashion Platform</title>
            </Helmet>

            <HeroBanner />
        </>
    );
};

export default Home;