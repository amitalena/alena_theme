import { Box, CssBaseline, useTheme, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import AdminAppBar from './AdminAppBar';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;
const AdminLayout = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

    const handleDrawerToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AdminAppBar
                position="fixed"
                open={sidebarOpen}
                onDrawerToggle={handleDrawerToggle}
            />
            <AdminSidebar
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    transition: theme.transitions.create('margin', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                    marginLeft: { sm: `-${drawerWidth}px` },
                    ...(sidebarOpen && {
                        transition: theme.transitions.create('margin', {
                            easing: theme.transitions.easing.easeOut,
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                        marginLeft: 0,
                    }),
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar /> {/* For proper spacing below AppBar */}
                <Outlet />
            </Box>
        </Box>
    );
};

export default AdminLayout;