import App from '@/App';
import LobbyPage from '@/pages/LobbyPage';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <LobbyPage />,
            },
        ],
    },
]);

export default router;
