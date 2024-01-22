import { Helmet } from "react-helmet";
import Breadcrumbs from "../components/Breadcrumbs";
import LoginForm from "../sections/LoginForm";

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login | The August</title>
            </Helmet>

            <Breadcrumbs title='Login' />

            {/* sections */}
            <LoginForm />
        </>
    );
};

export default Login;