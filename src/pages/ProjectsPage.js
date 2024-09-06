// src/pages/ProjectsPage.js
import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const ProjectsWrapper = styled.div`
  padding: 80px 40px 40px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 90px;
  font-weight: bold;
  margin-bottom: 40px;
  line-height: 1.0;
`;

const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 60px;
`;

const FilterButton = styled.button`
  padding: 5px 15px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: ${props => props.active ? 'black' : 'white'};
  color: ${props => props.active ? 'white' : 'black'};
  cursor: pointer;
  font-size: 14px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

const ProjectsPage = () => {
  return (
    <ProjectsWrapper>
      <Title>Insurance, cycling, photography & Tech</Title>
      <FilterBar>
        <FilterButton active>All</FilterButton>
        <FilterButton>Books</FilterButton>
        <FilterButton>Commission</FilterButton>
        <FilterButton>Editorial</FilterButton>
        <FilterButton>Fine Art</FilterButton>
        <FilterButton>Movie</FilterButton>
        <FilterButton>Portraits</FilterButton>
      </FilterBar>
      <ProjectGrid>
        <ProjectCard 
          title="NEW CITY, OLD BLUES @ The Gordon Parks Foundation"
          image="/images/new-city-old-blues.jpg" // Update with correct path
        />
        <ProjectCard 
          title="Stephen Curry"
          image="/images/stephen-curry.jpg" // Update with correct path
        />
        <ProjectCard 
          title="Stephen Curry"
          image="/images/stephen-curry.jpg" // Update with correct path
        />
        <ProjectCard 
          title="Stephen Curry"
          image="/images/stephen-curry.jpg" // Update with correct path
        />
        <ProjectCard 
          title="Stephen Curry"
          image="/images/stephen-curry.jpg" // Update with correct path
        />
        
        {/* Add more ProjectCards as needed */}
      </ProjectGrid>
    </ProjectsWrapper>
  );
};

export default ProjectsPage;