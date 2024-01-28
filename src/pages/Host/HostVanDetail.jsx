import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

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

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <section>
      <Link to=".." relative="path" className="back-button backButton">
        &larr; <span className="backButtonText">Back of all vans</span>
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

        <nav className="host-van-detail-nav">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            // to="/host"
            to="."
            end
          >
            Details
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="pricing"
          >
            Pricing
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="photos"
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={currentVan} />
      </div>
    </section>
  );
}

export default HostVanDetail;
