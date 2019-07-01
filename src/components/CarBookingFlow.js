import React, {Component} from 'react';
import Flow from '../plugins/flow';
import '../assets/styles/booking.css';
import { connect } from 'react-redux';

class CarBookingFlow extends Component {
    render(){
        return(
            <div className="bookingFlow">
                <ul>
                    <Flow 
                        flowNumber={1} 
                        isCompleted={this.props.progress > 1 ? true : false} 
                        title={'Create Request'} 
                        isActive={this.props.progress ===1 ? true : false} 
                    />
                    <Flow 
                        flowNumber={2} 
                        isCompleted={this.props.progress > 2 ? true : false} 
                        title={'Choose a Car'} 
                        isActive={this.props.progress ===2 ? true : false}
                    />
                    <Flow 
                        flowNumber={3} 
                        isCompleted={this.props.progress > 3 ? true : false} 
                        title={'Choose Extras'} 
                        isActive={this.props.progress ===3 ? true : false} 
                    />
                    <Flow 
                        flowNumber={4} 
                        isCompleted={this.props.progress > 4 ? true : false} 
                        title={'Review & Book'} 
                        isActive={this.props.progress ===4 ? true : false} 
                    />
                </ul>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state
});
export default connect(mapStateToProps)(CarBookingFlow);