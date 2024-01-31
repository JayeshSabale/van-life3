import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HostVans() {
  const [hostVansData, setHostVansData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/host/vans")
      .then((response) => setHostVansData(response.data.vans))
      .catch((error) => console.error("Error fetching vans data:", error));
  }, []);

  const hostVansEls = hostVansData.map((van) => {
    return (
      <Link
        // to={`/host/vans/${van.id}`}
        to={van.id}
        key={van.id}
        className="host-van-link-wrapper"
      >
        <div className="host-van-single" key={van.id}>
          <img src={van.imageUrl} alt={`photo of ${van.name}`} />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {
          hostVansData.length > 0 ? (
            <section>
              {hostVansEls}
            </section>
          ) : (
            <h2>Loading...</h2>
          )
        }
      </div>
    </div>
  );
}

export default HostVans;
