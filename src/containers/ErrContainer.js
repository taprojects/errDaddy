import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrList from '../components/errs/ErrList';
// import { getRecentErrs } from '';
// import DependScore from '../components/errs/DependScore';
import errs from '../../data/seedErrs';
import { log } from 'util';

class ErrContainer extends PureComponent {
  // static propTypes = {
  //   fetchRecent: PropTypes.func.isRequired
  // };

  // componentDidMount() {
  //   this.props.fetchRecent();
  // }

  render() {

    return (
      <>
        <ErrList errs={errs} />
        {/* <DependScore good={5} bad={25} /> */}
      </>
    );
  }
}

// const mapStateToProps = state => ({

// });

// const mapDispatchToProps = (dispatch) => ({
//   fetch(searchTerm) {
//     dispatch(getErrs(searchTerm));
//   }
// });

export default connect(
  // null,
  // mapDispatchToProps
)(ErrContainer);
