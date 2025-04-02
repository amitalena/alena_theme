// src/components/common/LoadingSpinner.jsx
import { CircularProgress, Box } from '@mui/material';

export const LoadingSpinner = ({ fullPage = false }) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight={fullPage ? '100vh' : 'auto'}
            width={fullPage ? '100vw' : 'auto'}
        >
            <CircularProgress />
        </Box>
    );
};