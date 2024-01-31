import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import axios from "axios";

function VanDetail() {
  const [van, setVan] = useState([]);
  const params = useParams();
  const location = useLocation();
  console.log(location.state);

  useEffect(() => {
    axios
      .get(`/api/vans/${params.id}`)
      .then((res) => res.data)
      .then((data) => setVan(data.vans))
      .catch((error) => console.error("Error fetching van data:", error));
  }, [params.id]); // Include params in the dependency array

  // console.log(van);
  // const search = location.state && location.state.search || ""
  const search = location.state?.search || "";

  const type = search.slice(6, search.length);

  return (
    <div className="van-detail-container">
      <Link
        to={`..${search}`}
        relative="path"
        className="back-button backButton"
      >
        &larr; <span className="backButtonText">Back to {type} vans </span>
      </Link>
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
