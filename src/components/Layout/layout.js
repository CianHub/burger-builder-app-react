import React, { Component } from 'react';
import { Wrapper } from '../Wrapper/wrapper';
import styles from './layout.module.css';
import { Navbar } from '../navbar/navbar';
import { Sidedrawer } from '../Sidedrawer/sidedrawer';

export class Layout extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    showSideDrawer: true
  };
  sideDrawerClosed = () => {
    this.setState({ showSideDrawer: false });
  };
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Sidedrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosed}
        />
        <main className={styles.Content}>{this.props.children}</main>
      </Wrapper>
    );
  }
}
