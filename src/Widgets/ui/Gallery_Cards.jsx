import React from 'react';
import img from '../assets/gallery.png';
import img2 from '../assets/gallery2.png';
import '../styles/gallery-cards.scss'

const photoGallery = {
  photos: [
    {
      title: "Sunset Over the Ocean",
      img: img,
    },
    {
      title: "Mountain Landscape",
      img: img2,
    },
    {
      title: "Beach Sunrise",
      img: img,
    },
    {
      title: "Forest Trail",
      img: img2,
    }
  ]
};

const GalleryCards = () => {
  return (
    <div className='container'>
      <h1 className="h1-gallery-cards">СТАТЬИ И РЕКОМЕНДАЦИИ</h1>
      <div className="gallery-block">
        {photoGallery.photos.map((photo, index) => (
          <div className='row' key={index}>
            <div className="col-3">
              <div className="gallery-item">
                <img src={photo.img} className='gallery-block-img' alt={photo.title} />
              </div>
              <div className="gallery-item">
                <p className="gallery-block-title">{photo.title}</p>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryCards;
