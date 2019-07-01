import React, {Component} from 'react';
import { connect } from 'react-redux';
import CreateRequest from '../plugins/createRequest';
import ChooseCar from '../plugins/chooseCar';
import Extras from '../plugins/extras';
import Book from '../plugins/carBooking';

class Dashboard extends Component {
    render(){
        return (
            <div>
                {
                    this.props.progress ===1
                    &&
                    <CreateRequest />
                }
                {
                    this.props.progress ===2
                    &&
                    <ChooseCar />
                }
                {
                    this.props.progress ===3
                    &&
                    <Extras />
                }
                {
                    this.props.progress ===4
                    &&
                    <Book />
                }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps)(Dashboard);