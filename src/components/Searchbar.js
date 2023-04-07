import { Component } from 'react';
import css from './Searchbar.module.css';

const INITIAL_VALUE = {
  inputQuery: '',
}

export class Searchbar extends Component {
  state = {
    ...INITIAL_VALUE,
  };

  handleChange = event => {
    const inputQuery = event.currentTarget.value;
    this.setState({ inputQuery });
  };

  
  handleSubmit = event => {
    event.preventDefault();
    const { inputQuery } = this.state;
    
    this.props.getPhotos(inputQuery)
    
  };

  render() {
    const { inputQuery } = this.state;


    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.btn + ' ' + css.search__btn}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            name="inputQuery"
            value={inputQuery}
            type="text"
            autoComplete="off"
            className={css.input}
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
