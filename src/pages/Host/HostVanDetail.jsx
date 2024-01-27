import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/host/vans/${id}`)
      .then((response) => setCurrentVan(response.data.vans))
      .catch((error) => console.log(error));
  }, [id]);

  if (!currentVan) {
    return <h1>Loading ...</h1>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back of all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img
            src={currentVan[0].imageUrl}
            alt={`photo of ${currentVan[0].name}`}
          />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan[0].type}`}>
              {currentVan[0].type}
            </i>
            <h3>{currentVan[0].name}</h3>
            <p>${currentVan[0].price}/day</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HostVanDetail;
