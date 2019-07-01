import React,{Component} from 'react';
import { connect } from "react-redux";
import {data} from '../constants/data';
import aveo from '../assets/images/aveo.jpg';
import ford from '../assets/images/ford_escape.jpg';
import hondaAccord from '../assets/images/honda_accord.jpg';
import hondaCivic from '../assets/images/honda_civic.jpg';
import landRover from '../assets/images/land_rover.jpg';
import toyotaCorolla from '../assets/images/toyota_corolla.jpg';

class Book extends Component {
    state = {
        bookingConfirmed: false
    }
    filterByCarName = (data,carName) => {
        const filteredData = data.filter(car => car.carName === carName);
        return filteredData
    }
    getImage = carName => {
        if(carName === 'Aveo') {
            return aveo;
        }else if(carName === 'Ford Escape') {
            return ford;
        }else if(carName === 'Honda Accord'){
            return hondaAccord;
        }else if(carName === 'Honda Civic') {
            return hondaCivic;
        }
        else if(carName === 'Land Rover') {
            return landRover;
        }
        else if(carName === 'Toyota Corolla') {
            return toyotaCorolla;
        }
    }
    render(){
        return(
            <div>
            {
                this.filterByCarName(data,this.props.Car).map(car => 
                <div className="booking">
                    <img src={this.getImage(car.carName)} alt="car"/>
                    <h1>{car.carName}</h1>
                    <h2>{`$${car.price}`}</h2>
                </div>
                )
            }
            {
                this.state.bookingConfirmed
                ?
                <h1 id="thanks">Thanks for booking a car with us</h1>
                :
                <button id="confirm-booking" onClick={() => this.setState({ bookingConfirmed: true })}>Confirm Booking</button>
            }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(Book)