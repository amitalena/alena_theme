import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ py: 1, width: '100%', bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="body1" align="center">
                © {new Date().getFullYear()} My App. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;