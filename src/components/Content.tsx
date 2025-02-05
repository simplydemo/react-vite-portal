import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import CalendarPickerDemo from "../samples/CalendarPickerDemo.tsx";

const Content: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
                <Route path="/" element={<Typography>Home Page</Typography>} />
                <Route path="/about" element={<Typography>About Page</Typography>} />
                <Route path="/services" element={<Typography>Services Page</Typography>} />
                <Route path="/samples" element={<Typography>Samples</Typography>} />
                <Route path="/samples/CalendarPicker" element={<CalendarPickerDemo />} />
                {/* Add more routes for sub-pages */}
            </Routes>
        </Box>
    );
};

export default Content;