import { useEffect, useState } from 'react';
import { Button } from 'components/Button';
import { ImageGallery } from 'components/ImageGallery';
import { Modal } from 'components/Modal';
import { Searchbar } from 'components/Searchbar';
import { fetchPhotosWithQuery, PER_PAGE } from 'components/Fetch';
import { Loader } from 'components/Loader';
import css from './App.module.css';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [allPages, setAllPages] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [largePhoto, setLargePhoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const onSubmit = event => {
    event.preventDefault();
    let inputValue = event.target.inputQuery.value;
    setQuery(inputValue.trim().toLowerCase());
    setIsLoading(true);
    setPhotos([]);
    setPage(1);
  };

  const handleClick = () => {
    setPage(prev => prev + 1);
    setIsLoading(true);
  };
  useEffect(() => {
    if (!query) return;
    const getPhotos = async query => {
      try {
        const response = await fetchPhotosWithQuery(query, page);
        setPhotos(prev => [...prev, ...response.hits]);
        setTotalHits(response.totalHits);
        setAllPages(Math.ceil(response.totalHits / PER_PAGE));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getPhotos(query, page);
  }, [query, page]);

  const showModal = largeImg => {
    setIsModal(true);
    setLargePhoto(largeImg);
  };
  const hideModal = () => {
    setIsModal(!isModal);
    setLargePhoto('');
  };
  return (
    <div className={css.main}>
      <Searchbar onSubmit={onSubmit} />
      {isLoading && <Loader />}
      <ImageGallery photos={photos} showModal={showModal} />
      {totalHits > 0 && page < allPages && page !== allPages && (
        <Button onClick={handleClick} />
      )}
      {isModal && <Modal hideModal={hideModal} largeImg={largePhoto} />}
    </div>
  );
};
