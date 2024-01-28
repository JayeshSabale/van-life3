import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanInfo() {

  const  currentVan  = useOutletContext();

  return (
    <section className='host-van-detail-info'>
      <h4>Name: <span>{currentVan[0].name}</span></h4>
      <h4>Category: <span>{currentVan[0].type}</span></h4>
      <h4>Description: <span>{currentVan[0].description}</span></h4>
      <h4>Visibility: <span>Public</span></h4>
    </section>
  )
}

export default HostVanInfo