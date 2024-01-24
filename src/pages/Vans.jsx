import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    axios.get("/api/vans")
      .then((response) => setVans(response.data.vans))
      .catch((error) => console.error("Error fetching vans data:", error));
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img alt={van.name} src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vans && vanElements}</div>
    </div>
  );
}
