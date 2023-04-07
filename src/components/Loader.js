import { React } from 'react';
import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
    return (
      <Circles
        height="250"
        width="250"
        color="white"
        ariaLabel="loading"
        wrapperStyle={{}}
        wrapperClass={css.spinner}
        visible={true}
      />
    );
}