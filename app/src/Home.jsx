import React, { useState, useEffect } from 'react';

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3003/api/data');
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          console.log('Error al obtener los datos:', response.statusText);
        }
      } catch (error) {
        console.log('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Datos desde el backend:</h1>
      {data.length === 0 ? (
        <p>No hay datos disponibles</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};