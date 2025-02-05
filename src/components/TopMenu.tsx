import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface TopMenuProps {
    onMenuSelect: (menu: string) => void;
}

const TopMenu: React.FC<TopMenuProps> = ({ onMenuSelect }) => {
    return (
        <AppBar position="static" sx={{ height: '80px', marginTop: '10px' }}>
            <Toolbar variant="dense" sx={{ height: '100%' }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Portal Theme by React + Vite
                </Typography>
                <Button color="inherit" component={Link} to="/" onClick={() => onMenuSelect('home')}>
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/about" onClick={() => onMenuSelect('about')}>
                    About
                </Button>
                <Button color="inherit" component={Link} to="/services" onClick={() => onMenuSelect('services')}>
                    Services
                </Button>
                <Button color="inherit" component={Link} to="/samples" onClick={() => onMenuSelect('samples')}>
                    Samples
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default TopMenu;