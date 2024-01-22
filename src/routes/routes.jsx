import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Men from '../pages/Men/Men';
import Women from '../pages/Women/Women';
import Kids from '../pages/Kids/Kids';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/sign_up',
                element: <SignUp />
            },
            {
                path: '/men',
             element: <Men></Men>   
            },
            {
                path: '/women',
                element: <Women></Women>
            },
            {
                path: '/kids',
                element:<Kids></Kids>
            }
        ]
    }
])

export default routes;