import { Helmet } from "react-helmet";
import HeroBanner from "../sections/HeroBanner";
import Item from "../components/Item";
import Category from "../components/FilterItems/Category";
import Style from "../components/FilterItems/Style";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>The August - Fashion Platform</title>
            </Helmet>

            <HeroBanner />
            <Item></Item>
        </>
    );
};

export default Home;