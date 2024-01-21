import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../Hooks/useAuth';

// react icons
import { FaFacebook } from 'react-icons/fa';

const SocialLogin = () => {
  const { googleSignIn, facebookSignIn, setLoading } = useAuth();

  // navigate
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  // Google Login Handle
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        return navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false)
        if (error.message) {
          toast.error(error.message, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  // Facebook Login Handle
  const handleFacebookLogin = () => {
    facebookSignIn()
      .then(() => {
        return navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false)
        if (error.message) {
          toast.error(error.message, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center gap-2 text-xl border border-gray/40 hover:border-yellow bg-white rounded-md w-full h-12 shadow-lg hover:shadow-yellow/20 duration-300"
      >
        <img
          className="w-8"
          src="https://i.ibb.co/0f4JQNf/google.png"
          alt="google"
        />
        Google
      </button>

      <button
        onClick={handleFacebookLogin}
        className="flex items-center text-[#4267B2] justify-center gap-2 text-xl border border-gray/40 hover:border-yellow bg-white rounded-md w-full h-12 shadow-lg hover:shadow-yellow/20 duration-300"
      >
        <FaFacebook size="30" />
        Facebook
      </button>
    </div>
  );
};

export default SocialLogin;