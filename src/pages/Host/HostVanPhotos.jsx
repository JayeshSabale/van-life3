import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
  const currentVan = useOutletContext();

  return <div><img src={currentVan[0].imageUrl} className="host-van-detail-image" alt={`photo of ${currentVan[0].name}`} /></div>;
}

export default HostVanPhotos;
