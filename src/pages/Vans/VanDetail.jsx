import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function VanDetail() {
  const [van, setVan] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`/api/vans/${params.id}`)
      .then((res) => res.data)
      .then((data) => setVan(data.vans))
      .catch((error) => console.error("Error fetching van data:", error));
  }, [params.id]); // Include params in the dependency array

  // console.log(van);

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default VanDetail;
