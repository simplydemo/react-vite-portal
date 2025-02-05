import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import SignupDemo from "../samples/SignupDemo.tsx";
import SigninDemo from "../samples/SigninDemo.tsx";
import CalendarPickerDemo from "../samples/CalendarPickerDemo.tsx";
import DataGridDemo from "../samples/DataGridDemo.tsx";

const Content: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
                <Route path="/" element={<Typography>Home Page</Typography>} />
                <Route path="/about" element={<Typography>About Page</Typography>} />
                <Route path="/services" element={<Typography>Services Page</Typography>} />
                <Route path="/samples" element={<Typography>Samples</Typography>} />
                <Route path="/samples/Signup" element={<SignupDemo />} />
                <Route path="/samples/Signin" element={<SigninDemo />} />
                <Route path="/samples/CalendarPicker" element={<CalendarPickerDemo />} />
                <Route path="/samples/DataGrid" element={<DataGridDemo />} />
                {/* Add more routes for sub-pages */}
            </Routes>
        </Box>
    );
};

export default Content;