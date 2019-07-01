import React, {Component} from 'react';
import SearchCar from './carPlugins/searchCar';
import {data} from '../constants/data';
import CarFilter from './carPlugins/carFilter';
import CarResults from './carPlugins/carResults'

class ChooseCar extends Component {
    state = {
        data: data,
        location: '',
        searchParameters: [],
        vehicleTypeSearchParameters: [],
        sortKey: 'price'
    }
    onSort = sortKey => {
        this.setState({ sortKey });
    }
    filterByPrice = (minPrice, maxPrice) => {
        this.setState({
            data: data
        });
        const filteredData = this.state.data.filter(car => car.price >= minPrice && car.price <= maxPrice);
        this.setState({
            data: filteredData
        });
    }
    filterByNoPassengers = (minPassengers, maxPassengers) => {
        this.setState({
            data: data
        });
        const filteredData = this.state.data.filter(car => car.noPassengers >= minPassengers && car.noPassengers <= maxPassengers);
        this.setState({
            data: filteredData
        });
    }
    filterByManufacturer = (checked,manufacturer) => {
        if(checked){
            const searchParameters = this.state.searchParameters;
            if(searchParameters.length===0){
                const filteredData = data.filter(car => car.manufacturer === manufacturer);
                this.setState({
                    data: filteredData,
                    searchParameters: [...searchParameters,manufacturer]
                });
            }
            else{
                let array=[];
                const updateParameters = [...searchParameters,manufacturer]
                updateParameters.forEach(element => {
                    const datas = data.filter(car => car.manufacturer === element);
                    array=[...array,...datas];
                });
                this.setState({
                    data: array,
                    searchParameters: updateParameters
                }); 
            }
        }
        else {
            const searchParameters = this.state.searchParameters;
            const updateParameters = searchParameters.filter(item => item !== manufacturer);
            if(updateParameters.length>0){
                let array=[];
                updateParameters.forEach(element => {
                    const datas = this.state.data.filter(car => car.manufacturer === element);
                    array=[...array,...datas];
                });
                this.setState({
                    data: array,
                    searchParameters: updateParameters
                }); 
            }
            else{
                this.setState({
                    data: data,
                    searchParameters: []
                });
            } 
        }
    }
    filterByVehicleType = (checked,vehicleType) => {
        if(checked){
            const searchParameters = this.state.vehicleTypeSearchParameters;
            if(searchParameters.length===0){
                const filteredData = data.filter(car => car.vehicleType === vehicleType);
                this.setState({
                    data: filteredData,
                    vehicleTypeSearchParameters: [...searchParameters,vehicleType]
                });
            }
            else{
                let array=[];
                const updateParameters = [...searchParameters,vehicleType]
                updateParameters.forEach(element => {
                    const datas = data.filter(car => car.vehicleType === element);
                    array=[...array,...datas];
                });
                this.setState({
                    data: array,
                    vehicleTypeSearchParameters: updateParameters
                }); 
            }
        }
        else{
            const searchParameters = this.state.vehicleTypeSearchParameters;
            const updateParameters = searchParameters.filter(item => item !== vehicleType);
            if(updateParameters.length>0){
                let array=[];
                updateParameters.forEach(element => {
                    const datas = this.state.data.filter(car => car.vehicleType === element);
                    array=[...array,...datas];
                });
                this.setState({
                    data: array,
                    vehicleTypeSearchParameters: updateParameters
                });
            }
            else{
                this.setState({
                    data: data,
                    vehicleTypeSearchParameters: []
                });
            }  
        }
    }
    render(){
        return(
            <div className="home">
                <section id="block">
                    <SearchCar />
                    <div className="container large main-filter">
                        <CarFilter 
                            data={data}
                            filterByPrice={this.filterByPrice} 
                            filterByNoPassengers={this.filterByNoPassengers}
                            filterByManufacturer={this.filterByManufacturer}
                            filterByVehicleType={this.filterByVehicleType}
                        />
                        <CarResults data={this.state.data} sortKey={this.state.sortKey} onSort={this.onSort} />
                    </div>
                </section>
            </div>
        )
    }
}

export default ChooseCar;