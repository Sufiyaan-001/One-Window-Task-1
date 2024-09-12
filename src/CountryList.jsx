import React from 'react';
import CountryCard from './CountryCard';
import { countriesData } from './data'; 
import './CountryCard.css';

const CountryList = () => {
  return (
    <div className="country-list">
      {countriesData.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
