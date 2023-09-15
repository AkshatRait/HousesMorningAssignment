import React from 'react';

const HomeDisplay = ({ houses }) => {
  return (
    <div>
      <h1>HOUSE LIST</h1>
      <ul>
        {houses.map((house, index) => (
          <li key={index}>
            <div>Name: {house.name}</div>
            <div>Address: {house.address}</div>
            <div>Price: {house.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeDisplay;
