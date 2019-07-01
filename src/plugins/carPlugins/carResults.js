import React,{Component} from 'react';
import Car from './car';
import { sortBy } from 'lodash';

class CarResults extends Component {
    state = {
        currentPage: 1,
        carsPerPage: 4
    }

    pageNext = event => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render(){
        const {data,sortKey,onSort} = this.props;
        const sortedList = sortBy(data, sortKey);
        const {currentPage,carsPerPage} = this.state;
        const indexOfLastCar = currentPage * carsPerPage;
        const indexOfFirstCar = indexOfLastCar - carsPerPage;
        const currentCars = sortedList.slice(indexOfFirstCar, indexOfLastCar);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(sortedList.length / carsPerPage); i++) {
        pageNumbers.push(i);
        }

        return(
            <div className="result-main">
                <div className="info">
                    <div className="info-header header">
                        <i className="fas fa-info-circle"></i>
                        Results
                        <div className="sort">
                            <p>SORT BY</p>
                            <div>
                                <button onClick={() => onSort('price')}>Price</button>
                                |
                                <button onClick={() => onSort('vehicleType')} id="type">Type</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="results">
                    {currentCars.map((car,index) => 
                    <Car 
                        key={index}
                        carName={car.carName}
                        vehicleType={car.vehicleType}
                        topSeller={car.topSeller}
                        noPassengers={car.noPassengers}
                        description={car.description}
                        transmission={car.transmission}
                        airConditioning={car.airConditioning}
                        fuel={car.fuel}
                        price={car.price}
                    />)}
                </div>
                <ul className="page-numbers">
                {pageNumbers.map(number => 
                    <li
                        className={currentPage===number && 'currentPage'}
                        key={number}
                        id={number}
                        onClick={this.pageNext}
                        >
                        {number}
                    </li>
                )}
                </ul>
            </div>
        )
    }
}

export default CarResults;