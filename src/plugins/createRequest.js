import React, {Component} from 'react';
import { connect } from "react-redux";
import setProgresss from '../actions/setProgress';
import setLocation from '../actions/setLocation';
import '../assets/styles/createRequest.css';

class CreateRequest extends Component{
    state = {
       location: '',
       textAdded: false
    }

    handleLocationOnKeyDown = event => {
        if(['Enter', 'Tab'].includes(event.key)) {
          event.preventDefault();
          const text = this.state.location.trim();
    
          if(text) {
            this.setState({
              location: text,
              textAdded: true
            });
          }
        }
    }
    
    handleLocationChange = event => {
        this.setState({
          location: event.target.value
        });
    }

    handleLocationPaste = event => {
        event.preventDefault();
        const paste = event.clipboardData.getData('text');
        if(paste){
            this.setState({
                location: paste
            });
        }
    }

    handleLocationDelete = () => {
        this.setState({
            location: '',
            textAdded: false
        });
    }

    render(){
        return(
            <main className="wrapper">
                {
                    this.state.textAdded
                    &&
                    <div className="text-chip">
                        {this.state.location}
                        <button
                        type="button"
                        className="button"
                        onClick={() => this.handleLocationDelete()}
                        >
                        &times;
                        </button>
                    </div>
                }
                 <input 
                    className="input"
                    placeholder="Type or paste Location and press Enter"
                    value={this.state.location}
                    onChange={this.handleLocationChange}
                    onKeyDown={this.handleLocationOnKeyDown}
                    onPaste={this.handleLocationPaste}
                  />
                {
                    this.state.textAdded
                    &&
                    <button class="btn orange" type="button" onClick={ () => {
                        this.props.setProgress(2);
                        this.props.setLocation(this.state.location)
                    }}>
                            <span>Choose a Car</span>
                    </button>
                }
            </main>
        )
    }
}
const mapStateToProps = state => ({
    ...state
  });
  
const mapDispatchToProps = dispatch => ({
    setProgress: (payload) => dispatch(setProgresss(payload)),
    setLocation: (payload) => dispatch(setLocation(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(CreateRequest);