import React, { useState } from 'react';
import './CountryCard.css';

const CountryCard = ({ country }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="country-card-horizontal">
      <button 
        className={`like-button ${liked ? 'liked' : ''}`}
        onClick={handleLikeClick}
      >
        <i className="fas fa-heart"></i>
      </button>
      <div className="country-content">
        <img 
          src={country.flag_url} 
          alt={`${country.name} flag`} 
          className="country-flag"
        />
        <div className="country-info">
          <h2>{country.name}</h2>
          <p><strong>Academic Reputation:</strong></p>
          <ul>
            <li>QS World Ranking: {country.academic_reputation.university_rankings.QS_World_Ranking}</li>
            <li>Times Higher Education: {country.academic_reputation.university_rankings.Times_Higher_Education}</li>
            <li>Accreditation: {country.academic_reputation.accreditation}</li>
          </ul>
          <p><strong>Cost of Education:</strong> {country.cost_of_education.tuition_fees}</p>
          <p><strong>Living Expenses:</strong> {country.living_expenses.cost_of_living}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
