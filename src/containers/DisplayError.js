import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tags from '../components/errs/Tags';
import { getDisplayError } from '../actions/errorActions';
import { selectDisplay } from '../selectors/errSelectors';
import { DisplayStyle } from '../styles/DisplayError.style';
 
class DisplayError extends PureComponent {
  static propTypes = {
    displayErr: PropTypes.object,
    fetchDisplay: PropTypes.func.isRequired,
    newTagSearch: PropTypes.func,
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const errId = this.props.match.params.errId;
    if(errId) this.props.fetchDisplay(errId);
  }

  render() {

    let newErrMessage = <h2>Your new Error</h2>;
    if(this.props.match.params.errId) newErrMessage = <h2 hidden></h2>;
    
    const { displayErr } = this.props;
    if(displayErr) {
      return (
        <DisplayStyle>
          {newErrMessage}
          <h2>Title:</h2>
          <p>{displayErr.title}</p>
          <h2>Description:</h2>
          <p>{displayErr.description}</p>
          <h2>Solution:</h2>
          <p>{displayErr.solution}</p>
          <h2>Tags:</h2>
          <div className="tagList"><Tags tags={displayErr.tags} /></div>
          <section className="helpfull">
            <div>
              <button className="good" >This was helpful</button>
              <span className="good">{displayErr.good}</span>
            </div>
            <div>
              <button className="bad" >This was bad advice</button>
              <span className="bad">{displayErr.bad}</span>
            </div>
          </section>
        </DisplayStyle>
      );
    }
    return <h1>loading</h1>;
  }
}

const mapStateToProps = state => ({
  displayErr: selectDisplay(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchDisplay(errId) {
    dispatch(getDisplayError(errId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayError);
