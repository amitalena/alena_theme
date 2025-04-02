import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import AdminAppBar from './AdminAppBar';
import { Box } from '@mui/material';

const MainLayout = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <AdminAppBar handleDrawerToggle={handleDrawerToggle} />
            <Box component={'main'}>
                <Outlet />
            </Box>
            <Footer />
        </>
    );
};

export default MainLayout;