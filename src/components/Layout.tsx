import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 1rem;
  background-color: \${props => props.theme.colors.background};
`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <LayoutWrapper>
            <Content>
                <MainContent>{children}</MainContent>
            </Content>
        </LayoutWrapper>
    );
};

export default Layout;
