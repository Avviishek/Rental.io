import React, { useState } from 'react';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import HouseIcon from '@mui/icons-material/House';
const Filters = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedPropertyType, setSelectedPropertyType] = useState('');

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handlePriceChange = (e) => {
    const minValue = parseInt(e.target.min);
    const maxValue = parseInt(e.target.max);
    const minValueEntered = parseInt(e.target.value.split(',')[0]);
    const maxValueEntered = parseInt(e.target.value.split(',')[1]);

    if (minValueEntered >= minValue && maxValueEntered <= maxValue) {
      setPriceRange([minValueEntered, maxValueEntered]);
    }
  };

  const handlePropertyTypeChange = (e) => {
    setSelectedPropertyType(e.target.value);
  };

  return (
    <div className="container mt-4" style={{backgroundColor:'#d3d3d3'}}>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
         Choose City
          <select
            id="location"
            className="form-select"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="">Select Location</option>
            <option value="new-york">Guwahati</option>
            <option value="los-angeles">Delhi</option>
            <option value="chicago">Noida</option>
            <option value="chicago">Silchar</option>
          </select>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <label htmlFor="date">Available from date:</label>
          <input
            id="date"
            type="date"
            className="form-control"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <label htmlFor="price">Price Range:</label>
          <input
            id="price"
            type="range"
            className="form-range"
            min="0"
            max="1000"
            step="10"
            value={`${priceRange[0]},${priceRange[1]}`}
            onChange={handlePriceChange}
          />
          <div className="d-flex justify-content-between">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
        Property Type
          <select
            id="propertyType"
            className="form-select"
            value={selectedPropertyType}
            onChange={handlePropertyTypeChange}
          >
            <option value="">Select Property Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
