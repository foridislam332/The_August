import { Helmet } from "react-helmet";
import Breadcrumbs from "../components/Breadcrumbs";
import SignUpFrom from "../sections/SignUpFrom";

const SignUp = () => {
    return (
        <>
            <Helmet>
                <title>Sign Up | The August</title>
            </Helmet>

            <Breadcrumbs title='Sign Up' />

            {/* sections */}
            <SignUpFrom />
        </>
    );
};

export default SignUp;