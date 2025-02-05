import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    TextField,
    Box,
    Menu,
    MenuItem,
    IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const SampleMUI: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [inputValue, setInputValue] = useState<string>('');

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            {/* AppBar with Menu */}
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleMenuOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Sample App
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            {/* Menu */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>

            {/* Content */}
            <Box sx={{ p: 2 }}>
                {/* Input Box */}
                <TextField
                    label="Sample Input"
                    variant="outlined"
                    value={inputValue}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />

                {/* Button */}
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Submit
                </Button>

                {/* DIV with custom styling */}
                <Box
                    sx={{
                        mt: 2,
                        p: 2,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        boxShadow: 1,
                    }}
                >
                    <Typography variant="body1">
                        This is a custom styled div using MUI's Box component.
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

export default SampleMUI;