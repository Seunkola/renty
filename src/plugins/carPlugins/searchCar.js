import React,{Component} from 'react';
import { connect } from 'react-redux';

class SearchCar extends Component {
    state = {
        pickupDate: '',
        pickupTime: '',
        dropoffDate: '',
        dropoffTime: ''
    }

    componentDidMount(){
        this.setDefaultDate();
        this.setDefaultTime();
    }

    setDefaultDate = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 3);
        const date = currentDate.toISOString().substr(0,10);
        this.setState({
            pickupDate: date,
            dropoffDate: date
        });
    }

    setDefaultTime = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 3);
        const currentTime = currentDate.toTimeString().split(" ")[0];
        this.setState({
            pickupTime: currentTime,
            dropoffTime: currentTime
        })
    }

    pickupDateChange = event => {
        const date = event.target.value;
        this.setState({
            pickupDate: date
        });
    }

    dropoffDateChange = event => {
        const date = event.target.value;
        this.setState({
            dropoffDate:date
        });
    }

    pickupTimeChange = event => {
        const time = event.target.value;
        this.setState({
            pickupTime: time
        });
    }

    dropoffTimeChange = event => {
        const time = event.target.value;
        this.setState({
            dropoffTime: time
        });
    }
    render(){
        return(
            <div className="container large">
                <div className="bar"></div> 
                <h3>
                    <i className="fas fa-search"></i> 
                    Search For a Car:
                </h3>
                <div className="row">
                    <label>
                        LOCATION
                        <input
                            className="input"
                            value={this.props.location}
                        />
                    </label>
                    <label>
                        PICK-UP DATE
                        <input
                            className="input"
                            type="date"
                            value={this.state.pickupDate}
                            onChange={this.pickupDateChange}
                        />
                    </label>
                        <input
                            className="input"
                            type="time"
                            value={this.state.pickupTime}
                            onChange={this.pickupTimeChange}
                        />
                    <label>
                        DROP-OFF DATE
                        <input
                            className="input"
                            type="date"
                            value={this.state.dropoffDate}
                            onChange={this.dropoffDateChange}
                        />
                    </label>
                        <input
                            className="input"
                            type="time"
                            value={this.state.dropoffTime}
                            onChange={this.dropoffTimeChange}
                        />
                    <label>
                        CAR TYPE
                        <select>
                            <option value="Standard">Standard</option>
                            <option value="Premium">Premium</option>
                        </select>
                    </label>
                    <button className="buttons">
                        UPDATE
                        <i className="fa fa-refresh" aria-hidden="true"></i>
                    </button>
                </div>
                <label className="check">
                        <input
                            type="checkbox"
                        />
                        <span>Return at different Location</span>
                </label>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state
});
export default connect(mapStateToProps)(SearchCar);