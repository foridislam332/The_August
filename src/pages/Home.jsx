import { Helmet } from "react-helmet";
import HeroBanner from "../sections/HeroBanner";
import WomenItem from "../components/WomenItem";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>The August - Fashion Platform</title>
            </Helmet>

            <HeroBanner />
            <WomenItem></WomenItem>
        </>
    );
};

export default Home;