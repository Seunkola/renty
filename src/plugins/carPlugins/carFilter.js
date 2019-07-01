import React, {Component} from 'react';
import InputRange from 'react-input-range';

class CarFilter extends Component {
    state = {
        priceValue: { min: 100, max: 500},
        passengersValue: {min: 1, max: 5},
        checked: false,
        vehicleChecked: false,
        checkedManufacturers: [],
        checkedVehicleType:[],
        manCheckedcounter: 0
    }

    manufacturerCount = (data, manufacturer) => {
        const filteredData = data.filter(car => car.manufacturer === manufacturer);
        return filteredData.length;
    }

    vehicleTypeCount = (data, vehicleType) => {
        const filteredData = data.filter(car => car.vehicleType === vehicleType);
        return filteredData.length;
    }

    manufacturerChecked = (manufacturer,event) => {
        const update = [manufacturer];
        const checkedManufacturers = this.state.checkedManufacturers;
        this.setState({ 
            checked: event.target.checked,
            checkedManufacturers: [...checkedManufacturers,...update]
        });
    }

    vehicleTypeChecked = (vehicleType,event) => {
        const update = [vehicleType];
        const checkedVehicleType = this.state.checkedVehicleType;
        this.setState({
            vehicleChecked: event.target.checked,
            checkedVehicleType: [...checkedVehicleType,...update]
        });
    }

    render(){
        const data = this.props.data;
        const uniqueManufacturersData = data.reduce((acc,current) => {
            const manufacturer = acc.find(car => car.manufacturer === current.manufacturer);
            if(!manufacturer){
                return acc.concat([current]);
            }else{
                return acc
            }
        },[]);
        const uniqueVehicleTypeData = data.reduce((acc,current) => {
            const vehicleType = acc.find(car => car.vehicleType === current.vehicleType);
            if(!vehicleType){
                return acc.concat([current]);
            }else{
                return acc
            }
        },[]);
        return(
            <div className="filter-main">
                <div className="info">
                    <div className="info-header header">
                        <i className="fas fa-info-circle"></i>
                        Info
                    </div>
                    <div className="info-description">
                        <p>
                            <strong>Please Note:</strong>The Vehicles shown are examples.Specific model with a car class may vary
                            in availability and features, such as passenger seat, luggage capacity and mileage.
                        </p>
                    </div>
                </div>
                <div className="filter-results">
                    <div className="filter-header header">
                        <i className="fas fa-filter"></i>
                        Filter
                    </div>
                    <div className="price-range range">
                        <p className="subTitle">PRICE RANGE</p>
                        <div>
                            <InputRange
                                maxValue={1500}
                                minValue={50}
                                step={50}
                                formatLabel={value => `$${value}`}
                                value={this.state.priceValue}
                                onChange={priceValue => {
                                    this.setState({ priceValue });
                                    this.props.filterByPrice(priceValue.min,priceValue.max);
                                }}
                            />
                        </div>
                    </div>
                    <div className="manufacturers">
                        <p className="subTitle">MANUFACTURERS</p>
                        <div>
                        {
                            uniqueManufacturersData.map(car =>
                            <label key={car.carName}>
                                <input
                                    type="checkbox"
                                    checked={this.state.checkedManufacturers[car.manufacturer] && this.state.checked}
                                    onChange={event => {
                                        this.manufacturerChecked(car.manufacturer,event);
                                        this.props.filterByManufacturer(event.target.checked,car.manufacturer);
                                    }}
                                />
                                <span>{car.manufacturer}</span>
                                <div>
                                    {this.manufacturerCount(data,car.manufacturer)}
                                </div>
                            </label>
                        )}
                        </div>
                    </div>
                    <div className="noPassengers range">
                        <p className="subTitle">NO OF PASSENGERS</p>
                        <div>
                            <InputRange
                                maxValue={5}
                                minValue={1}
                                step={1}
                                value={this.state.passengersValue}
                                onChange={passengersValue => {
                                    this.setState({ passengersValue });
                                    this.props.filterByNoPassengers(passengersValue.min, passengersValue.max);
                                }}
                            />
                        </div>
                    </div>
                    <div className="vehicle-type">
                        <p className="subTitle">VEHICLE TYPE</p>
                        <div>
                        {
                            uniqueVehicleTypeData.map(car =>
                            <label key={car.carName}>
                                <input
                                    type="checkbox"
                                    checked={this.state.checkedVehicleType[car.vehicleType] && this.state.vehicleChecked}
                                    onChange={
                                        event => {
                                            this.vehicleTypeChecked(car.vehicleType,event);
                                            this.props.filterByVehicleType(event.target.checked,car.vehicleType);
                                        }
                                    }
                                />
                                <span>{car.vehicleType}</span>
                                <div>
                                    {this.vehicleTypeCount(data,car.vehicleType)}
                                </div>
                            </label>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarFilter;