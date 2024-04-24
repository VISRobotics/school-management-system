// src/components/Footer.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'background.paper' }}>
            <Typography variant="body2" color="text.secondary" align="center">
                © {new Date().getFullYear()} School Management System
            </Typography>
        </Box>
    );
};

export default Footer;
