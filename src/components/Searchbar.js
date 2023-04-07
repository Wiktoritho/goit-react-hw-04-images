import { React } from 'react';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={onSubmit}>
          <button type="submit" className={css.btn + ' ' + css.search__btn}>
            <span className={css.buttonLabel}>Search</span>
          </button>
          <input
            name="inputQuery"
            type="text"
            autoComplete="off"
            className={css.input}
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
}
