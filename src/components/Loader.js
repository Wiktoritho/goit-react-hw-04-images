import { Component } from 'react';
import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';

export class Loader extends Component {
  render() {
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
}