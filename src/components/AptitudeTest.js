import React from 'react'
import { useParams } from 'react-router-dom';

const AptitudeTest = () => {
    const { id } = useParams();


    console.log(id);

    return (
    <div>AptitudeTest {id}</div>
  )
}

export default AptitudeTest