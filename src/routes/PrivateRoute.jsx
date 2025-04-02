import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../utils/useAuth';
import MainLayout from '../components/layout/MainLayout';

const PrivateRoute = () => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated() ? (
        <MainLayout>
            <Outlet />
        </MainLayout>
    ) : (
        <Navigate to="/login" replace />
    );
};

export default PrivateRoute;