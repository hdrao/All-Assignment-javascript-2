import './imagegll.css';
import React, { useState } from 'react';

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // const images = [
  //   { src: 'https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZyZWV8ZW58MHx8MHx8fDA%3D', alt: 'Image 1' },
  //   { src: 'https://images.unsplash.com/photo-1428278819486-8f00bd7cdf80?w=294&dpr=1&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTAzNjU1NHx8ZW58MHx8fHx8', alt: 'Image 2' },
  //   { src: 'https://images.unsplash.com/photo-1539920951450-2b2d59cff66d?w=294&dpr=1&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8Njg3NjMwNXx8ZW58MHx8fHx8', alt: 'Image 3' },
  // ];

  const images = [
    { src: 'https://picsum.photos/200/300', alt: 'Mountain Landscape' },
    { src: 'https://picsum.photos/200/301', alt: 'Sunset over Ocean' },
    { src: 'https://picsum.photos/200/302', alt: 'City Skyline at Night' },
    { src: 'https://picsum.photos/200/303', alt: 'Flowers in a Field' },
    { src: 'https://picsum.photos/200/304', alt: 'Snowy Mountain Peak' },
    { src: 'https://picsum.photos/200/305', alt: 'Beach at Sunset' },
    { src: 'https://picsum.photos/200/306', alt: 'Forest with Tall Trees' },
    { src: 'https://picsum.photos/200/307', alt: 'River with Boats' },
    { src: 'https://picsum.photos/200/308', alt: 'Desert Landscape' },
    { src: 'https://picsum.photos/200/309', alt: 'Waterfall in a Jungle' },
    { src: 'https://picsum.photos/200/310', alt: 'Mountain Road' },
    { src: 'https://picsum.photos/200/311', alt: 'Sunrise over Hills' },
    { src: 'https://picsum.photos/200/312', alt: 'City Street at Night' },
    { src: 'https://picsum.photos/200/313', alt: 'Garden with Flowers' },
    { src: 'https://picsum.photos/200/314', alt: 'Snowy Forest' },
    { src: 'https://picsum.photos/200/315', alt: 'Beach with Palm Trees' },
    { src: 'https://picsum.photos/200/316', alt: 'Mountain Lake' },
    { src: 'https://picsum.photos/200/317', alt: 'Sunset over Mountains' },
    { src: 'https://picsum.photos/200/318', alt: 'City Park' },
    { src: 'https://picsum.photos/200/319', alt: 'River with Fish' },
    { src: 'https://picsum.photos/200/320', alt: 'Desert Sunset' },
    { src: 'https://picsum.photos/200/321', alt: 'Waterfall in a Cave' },
    { src: 'https://picsum.photos/200/322', alt: 'Mountain Village' },
    { src: 'https://picsum.photos/200/323', alt: 'Sunrise over Ocean' },
    { src: 'https://picsum.photos/200/324', alt: 'City Skyline' },
    { src: 'https://picsum.photos/200/325', alt: 'Garden with Fountain' },
    { src: 'https://picsum.photos/200/326', alt: 'Snowy Mountain Range' },
    { src: 'https://picsum.photos/200/327', alt: 'Beach with Surfboards' },
    { src: 'https://picsum.photos/200/328', alt: 'Mountain Peak' },
    { src: 'https://picsum.photos/200/329', alt: 'Sunset over Hills' }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          // alt={image.alt}
          onClick={() => handleImageClick(image)}
        />
      ))}
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{
                width: '100%',
                height: '93vh',
                objectFit: 'cover',
              }}
            />
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;