import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PagingStyle } from '../styles/Paging.style';

class Paging extends PureComponent {
  static propTypes = {
  };

  state = {
  };

  render() {

    return (
      <PagingStyle>
        <button id="prev-button">Previous</button>
        <input id="current-page" placeholder="1" />
        <button id="next-button">Next</button>
      </PagingStyle>
    );
  }
}

// const mapStateToProps = state => ({

// });

// const mapDispatchToProps = (dispatch) => ({
//   fetch() {
//     dispatch();
//   }
// });

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(Paging);
