import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanPricing() {
  const currentVan = useOutletContext();

  return <div><h3 className="host-van-price">${currentVan[0].price}</h3></div>;
}

export default HostVanPricing;
