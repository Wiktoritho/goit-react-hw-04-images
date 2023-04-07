import { React } from 'react';
import css from './Button.module.css';

export const Button = ({ onClick }) => {
  
    return (
      <button type="button" className={css.btn + ' ' + css.loadMore__btn} onClick={onClick}>
        Load more
      </button>
    );
}
