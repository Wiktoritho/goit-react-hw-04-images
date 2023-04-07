import { Component } from 'react';
import css from './Button.module.css';

export class Button extends Component {
  handleClick = () => {
    const { page } = this.props;
    const next = page + 1;
    this.props.onClick(next);
  };
  render() {
    return (
      <button type="button" className={css.btn + ' ' + css.loadMore__btn} onClick={this.handleClick}>
        Load more
      </button>
    );
  }
}
