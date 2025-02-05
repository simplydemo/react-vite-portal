import React from 'react';
import {List, ListItem, ListItemText} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';

interface SideNavProps {
    selectedMenu: string;
}

interface SubMenuItem {
    text: string;
    path: string;
}

const SideNav: React.FC<SideNavProps> = ({selectedMenu}) => {
    const navigate = useNavigate();

    const getSubMenuItems = (): SubMenuItem[] => {
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
            case 'samples':
                return [
                    {text: 'CalendarPicker', path: '/samples/CalendarPicker'},
                    {text: 'Signup', path: '/samples/SignupDemo'},
                ];
            default:
                return [];
        }
    };

    const handleItemClick = (path: string) => {
        navigate(path); // 라우팅 처리
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
                <ListItem key={item.text}
                          component={Link}
                          to={item.path}
                          onClick={() => handleItemClick(item.path)} // 클릭 이벤트 추가
                >
                    <ListItemText primary={item.text}/>
                </ListItem>
            ))}
        </List>
    );
};

export default SideNav;