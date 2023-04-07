import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, largeImageURL, tags, showModal } = this.props;
    return (
      <li key={id} className={css.gallery__item}>
        <img
          key={id}
          name={largeImageURL}
          className={css.gallery__photo}
          loading="lazy"
          src={webformatURL}
          alt={tags}
          onClick={() => showModal(largeImageURL)}
        />
      </li>
    );
  }
}
