import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChooseCar from './plugins/chooseCar';
import {data} from './constants/data';

Enzyme.configure({ adapter: new Adapter() });

describe('Filter car results based on parameters passed', () => {
  it('should filter by price', () => {
    const expectedData = 
    [
      {
        carName: 'Toyota Corolla',
        noPassengers: 5,
        manufacturer: 'Toyota',
        description: '1 Large suitcase, 2 Small suitcase',
        imageUrl: 'toyota_corolla',
        transmission: 'Automatic Transmission',
        airConditioning: true,
        fuel: '12 km/l',
        topSeller:false,
        price: 200,
        type: 'standard',
        vehicleType: 'Economy',
        location:
        [
            'lagos',
            'abuja',
            'port-Harcourt'
        ]
      }
    ];

    const wrapper = shallow(<ChooseCar />);
    const instance = wrapper.instance();
    const minPrice = 100;
    const maxPrice = 200;
    instance.filterByPrice(minPrice,maxPrice);
    expect(wrapper.state('data')).toEqual(expectedData);
  });

  it('should filter by no of Passengers', () => {
    const expectedData = [];
    const wrapper = shallow(<ChooseCar />);
    const instance = wrapper.instance();
    const minPassengers = 1;
    const maxPassengers = 4;
    instance.filterByNoPassengers(minPassengers,maxPassengers);
    expect(wrapper.state('data')).toEqual(expectedData);
  });

  it('should filter by manufacturer and unfilter by manufacturer', () => {
    const expectedData = [
      {
        carName: 'Land Rover',
        noPassengers: 5,
        manufacturer: 'Land Rover',
        description: '3 Large suitcase, 2 Small suitcase',
        imageUrl: 'land_rover',
        transmission: 'Automatic Transmission',
        airConditioning: true,
        fuel: '10 km/l',
        topSeller:false,
        price: 500,
        type: 'premium',
        vehicleType: 'Sport',
        location:
        [
            'abuja'
        ]
      }
    ];
    const wrapper = shallow(<ChooseCar />);
    const instance = wrapper.instance();
    const checked = true;
    const manufacturer = 'Land Rover';
    instance.filterByManufacturer(checked,manufacturer);
    expect(wrapper.state('data')).toEqual(expectedData);
    const unChecked = false;
    instance.filterByManufacturer(unChecked,manufacturer);
    const updatedData = data;
    expect(wrapper.state('data')).toEqual(updatedData);
  });

  it('should filter by vehicle type and unfilter by vehicle type', () => {
    const expectedData = [
      {
        carName: 'Honda Civic',
        noPassengers: 5,
        manufacturer: 'Honda',
        description: '1 Large suitcase, 1 Small suitcase',
        imageUrl: 'honda_civic',
        transmission: 'Automatic Transmission',
        airConditioning: true,
        fuel: '12 km/l',
        topSeller:false,
        price: 300,
        type: 'standard',
        vehicleType: 'Compact',
        location:
        [
            'lagos',
            'abuja',
            'port-Harcourt'
        ]
    }
    ];
    const wrapper = shallow(<ChooseCar />);
    const instance = wrapper.instance();
    const checked = true;
    const vehicleType = 'Compact';
    instance.filterByVehicleType(checked,vehicleType);
    expect(wrapper.state('data')).toEqual(expectedData);
    const unChecked = false;
    instance.filterByVehicleType(unChecked,vehicleType);
    const updatedData = data;
    expect(wrapper.state('data')).toEqual(updatedData);
  });
});
