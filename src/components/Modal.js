import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keyup', this.handleClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleClose);
  }
  handleClose = event => {
    if (event.code === 'Escape') {
      return this.props.hideModal();
    }
  };

  render() {
    const { hideModal, largeImg } = this.props;

    return (
      <div className={css.overlay} onClick={hideModal}>
        <div className={css.modal}>
          <img src={largeImg} alt="" />
        </div>
      </div>
    );
  }
}
