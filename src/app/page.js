"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [temperaturas, setTemperaturas] = useState([]);

  const apiUrl = "http://localhost:8080/weatherforecast";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTemperaturas(data);
      })
      .catch((error) => {
        console.log("Error al obtener datos:", error);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Temperatura C°</th>
            <th>Temperatura F</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {temperaturas.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.temperatureC}°C</td>
              <td>{item.temperatureF}F</td>
              <td>{item.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
