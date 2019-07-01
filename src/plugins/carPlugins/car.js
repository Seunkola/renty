import React, {Component} from 'react';
import { connect } from "react-redux";
import setProgresss from '../../actions/setProgress';
import setCar from '../../actions/setCar';
import PropTypes from "prop-types";
import aveo from '../../assets/images/aveo.jpg';
import ford from '../../assets/images/ford_escape.jpg';
import hondaAccord from '../../assets/images/honda_accord.jpg';
import hondaCivic from '../../assets/images/honda_civic.jpg';
import landRover from '../../assets/images/land_rover.jpg';
import toyotaCorolla from '../../assets/images/toyota_corolla.jpg';

class Car extends Component {
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
        const {
            carName,vehicleType,topSeller,noPassengers,description,transmission,airConditioning,fuel,price
        }= this.props
        return(
            <div>
                <div className="car-details">
                    <img src={this.getImage(carName)} alt="car"/>
                    <div className="details">
                        <div>
                            <p className="car-name">{carName}</p>
                            <p className="divider">|</p>
                            <p className="carvehicle-type">{vehicleType}</p>
                            <p className="divider">|</p>
                            {
                                topSeller
                                &&
                                <p className="top-seller">Top Seller</p>
                            }
                        </div>
                        <ul>
                            <li><i></i>{noPassengers}</li>
                            <li><i></i>{description}</li>
                            <li><i></i>{transmission}</li>
                            <li><i></i>{airConditioning && 'Air Conditioning'}</li>
                            <li><i></i>{fuel}</li>
                        </ul>
                    </div>
                    <button>[+] View Car Details</button>
                </div>
                <div className="price">
                    <p><strong>{`$${price}`}</strong></p>
                    <p>Unlimited Free miles included</p>
                    <button onClick={() => {
                        this.props.setProgress(3);
                        this.props.setCar(carName);
                    }}>Select</button>
                </div>
            </div>
        )
    }
}

Car.propTypes = {
    carName: PropTypes.string.isRequired,
    vehicleType: PropTypes.string.isRequired,
    topSeller: PropTypes.bool.isRequired,
    noPassengers: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    transmission:PropTypes.string.isRequired,
    airConditioning: PropTypes.bool.isRequired,
    fuel: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
const mapStateToProps = state => ({
    ...state
  });
  
const mapDispatchToProps = dispatch => ({
    setProgress: (payload) => dispatch(setProgresss(payload)),
    setCar: (payload) => dispatch(setCar(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(Car);