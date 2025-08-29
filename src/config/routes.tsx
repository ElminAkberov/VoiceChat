import App from '@/App';
import LobbyPage from '@/pages/LobbyPage';
import RoomsPage from '@/pages/MeetingRooms';
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
            {
                path: '/rooms',
                element: <RoomsPage />,
            },
        ],
    },
]);

export default router;
