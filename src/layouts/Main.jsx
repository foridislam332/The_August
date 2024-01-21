import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import StayTop from "../components/StayTop";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../hooks/useAuth";
import PageLoading from "../components/PageLoading";

const Main = () => {
    const { loading } = useAuth();

    if (loading) {
        return <PageLoading />
    }

    return (
        <>
            <StayTop />

            {/* header */}
            <Header />

            {/* main */}
            <main>
                <Outlet />
            </main>

            {/* footer */}
            <Footer />
            <ToastContainer />
        </>
    );
};

export default Main;