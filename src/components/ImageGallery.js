import { React } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ photos, showModal }) => {
  return (
    <ul className={css.gallery}>
      {photos.map(({ webformatURL, largeImageURL, id, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          showModal={showModal}
        />
      ))}
    </ul>
  );
};
