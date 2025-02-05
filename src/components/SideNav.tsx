import React from 'react';
import {List, ListItem, ListItemText} from '@mui/material';
import {Link} from 'react-router-dom';

interface SideNavProps {
    selectedMenu: string;
}

const SideNav: React.FC<SideNavProps> = ({selectedMenu}) => {
    const getSubMenuItems = () => {
        switch (selectedMenu) {
            case 'home':
                return [
                    {text: 'Dashboard', path: '/dashboard'},
                    {text: 'Profile', path: '/profile'},
                ];
            case 'about':
                return [
                    {text: 'Company', path: '/about/company'},
                    {text: 'Team', path: '/about/team'},
                    {text: 'History', path: '/about/history'},
                ];
            case 'services':
                return [
                    {text: 'Consulting', path: '/services/consulting'},
                    {text: 'Development', path: '/services/development'},
                    {text: 'Support', path: '/services/support'},
                ];
            default:
                return [];
        }
    };

    return (
        <List sx={{
            width: '100%',
            maxWidth: 240,
            bgcolor: 'background.paper',
            borderRight: 1,
            borderColor: 'divider',
            height: '100%'
        }}>
            {getSubMenuItems().map((item) => (
                <ListItem key={item.text} component={Link} to={item.path}>
                    <ListItemText primary={item.text}/>
                </ListItem>
            ))}
        </List>
    );
};

export default SideNav;