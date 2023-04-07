import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    const { photos, showModal } = this.props;
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
  }
}