// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import ProjectsPage from './pages/ProjectsPage';
import GalleryPage from './pages/GalleryPage';
import { Container } from './components/Layout';
import GlobalStyle from './globalStyles';

const MainContent = styled.main`
  padding-top: 50px; // Adjust this value based on your header height
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <MainContent>
        <Container>
          <Routes>
            <Route path="/" element={<ProjectsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            {/* Add routes for other pages as needed */}
          </Routes>
        </Container>
      </MainContent>
    </Router>
  );
}

export default App;