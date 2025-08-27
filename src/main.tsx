import './index.scss';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import router from '@config/routes';

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
