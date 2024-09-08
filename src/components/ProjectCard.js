// src/components/ProjectCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: none;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  object-fit: cover;
`;

const Title = styled.h2`
  font-family: 'Archivo Black', sans-serif;
  font-size: 22px; // Adjusted size for Archivo Black
  margin: 0;
  flex: 1;
`;

const ViewButton = styled.button`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  padding: 8px 16px;
  border: 1px solid black;
  background-color: white;
  color: black;
  cursor: pointer;
  font-size: 14px;
`;

const ProjectCard = ({ title, image }) => (
  <Card>
    <Image 
      src={image} 
      alt={title} 
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = '/placeholder-image.jpg'; // Provide a placeholder image
      }}
    />
    <Title>{title}</Title>
  </Card>
);

export default ProjectCard;