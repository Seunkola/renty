import React, {Component} from 'react';
import { connect } from "react-redux";
import setProgresss from '../actions/setProgress';

class Extras extends Component {
    render(){
        return (
            <div className="extras">
                <h1>NO EXTRA OPTION AVAILABLABLE</h1>
                <button onClick={() => this.props.setProgress(4)}>Continue</button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state
  });
  
const mapDispatchToProps = dispatch => ({
    setProgress: (payload) => dispatch(setProgresss(payload)),
});
export default connect(mapStateToProps,mapDispatchToProps)(Extras);