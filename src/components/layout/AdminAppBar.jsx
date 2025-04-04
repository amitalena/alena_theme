import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BG from '../../assets/background.png'
import Sidebar from './Sidebar';

const drawerWidth = 220;


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
            },
        },
    ],
}));

export default function AdminAppBar({ children }) {
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar sx={{
                py: 1,
                backgroundImage: "linear-gradient(to left,#87dbaa,#18842A)",
                backgroundColor: "transparent",
            }} elevation={0} position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        size='small'
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={[
                            {
                                marginRight: 5,
                            },
                            open && { display: 'none' },
                        ]}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap component="div">
                        Alena Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Sidebar open={open} handleDrawerClose={handleDrawerOpen} />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 2,
                    overflowX: 'hidden',
                    width: open ? `calc(100vw - ${drawerWidth}px)` : "95vw",
                    height: "92vh",
                    backgroundImage: `url(${BG})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}