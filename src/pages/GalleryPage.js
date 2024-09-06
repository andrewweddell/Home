// src/pages/GalleryPage.js
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const GalleryWrapper = styled.div`
  padding: 120px 40px 40px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 72px;
  font-weight: bold;
  margin-bottom: 40px;
  line-height: 1.1;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const GalleryImageWrapper = styled.div`
  aspect-ratio: 1 / 1;
  overflow: hidden;
  cursor: pointer;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CarouselWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  background: none;
  border: none;
  color: white;
  font-size: 65px;
  cursor: pointer;
  z-index: 1001;
`;

const CarouselContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  position: relative;

  .carousel .slide {
    background: transparent;
  }

  .carousel .slide .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }

  .carousel .slide img {
    max-height: calc(80vh - 24px);
    max-width: calc(100% - 24px);
    object-fit: contain;
    border: 12px solid white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }

  .carousel .control-arrow {
    font-size: 24px;
    background: rgba(255, 255, 255, 0.2);
    height: 60px;
    width: 60px;
    border-radius: 50%;
    top: 50%;
    margin-top: -30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .carousel .control-prev.control-arrow {
    left: -80px;
  }

  .carousel .control-next.control-arrow {
    right: -80px;
  }

  .carousel .control-arrow:before {
    border: none;
    display: none;
  }

  .carousel .control-prev.control-arrow:after {
    content: '‹';
    color: white;
  }

  .carousel .control-next.control-arrow:after {
    content: '›';
    color: white;
  }

  .carousel .control-arrow:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;


const GalleryPage = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  // Replace these with your actual gallery images
  const images = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    // Add more image paths as needed
  ];

  const openCarousel = (index) => {
    setStartIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = useCallback(() => {
    setIsCarouselOpen(false);
  }, []);

  return (
    <GalleryWrapper>
      <Title>Gallery</Title>
      <GalleryGrid>
        {images.map((src, index) => (
          <GalleryImageWrapper key={index} onClick={() => openCarousel(index)}>
            <GalleryImage src={src} alt={`Gallery image ${index + 1}`} />
          </GalleryImageWrapper>
        ))}
      </GalleryGrid>
      {isCarouselOpen && (
        <CarouselWrapper onClick={closeCarousel}>
          <CloseButton onClick={closeCarousel}>×</CloseButton>
          <CarouselContainer onClick={(e) => e.stopPropagation()}>
            <Carousel 
              selectedItem={startIndex}
              showThumbs={false}
              infiniteLoop={true}
              useKeyboardArrows={true}
              showStatus={false}
            >
              {images.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Gallery image ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </CarouselContainer>
        </CarouselWrapper>
      )}
    </GalleryWrapper>
  );
};

export default GalleryPage;