import React from 'react';
import { useParams } from 'react-router-dom';

const StudyContent = () => {

    const { id } = useParams(); // Extract the id from the URL


  return (
    <div style={{ marginTop: "10rem" }}><h1>StudyContent {id}</h1></div>
  )
}

export default StudyContent