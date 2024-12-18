import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PokemonsList from './components/PokemonsList';
import PokemonPage from './components/PokemonPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <PokemonsList />,
    },
    {
        path: '/pokemon/:id',
        element: <PokemonPage />,
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}