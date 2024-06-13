import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the items!', error);
      });
  }, []);

  return (
    <div>
      <h1>Items for Trade</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Owner: {item.owner}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
