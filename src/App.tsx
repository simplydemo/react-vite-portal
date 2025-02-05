import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container, Box } from '@mui/material';
import TopMenu from './components/TopMenu';
import SideNav from './components/SideNav';
import Content from './components/Content';
import {theme} from './styles/theme';

const App: React.FC = () => {
    const [selectedMenu, setSelectedMenu] = useState<string>('home');

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Container maxWidth={false} disableGutters sx={{ width: '1280px', mx: 'auto' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                        <Box sx={{ marginBottom: '5px'}}>
                            <TopMenu onMenuSelect={setSelectedMenu} />
                        </Box>
                        <Box sx={{ display: 'flex', flex: 1 }}>
                            <Box sx={{ width: '240px' }}>
                                <SideNav selectedMenu={selectedMenu} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <Content />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Router>
        </ThemeProvider>
    );
};

export default App;
