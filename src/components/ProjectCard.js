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
  font-size: 16px;
  font-weight: normal;
  margin: 0;
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