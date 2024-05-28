import React from 'react';
import { useState } from 'react';

function Tours({tour,removeTour}) {
    const {id,tourImgLink,nameOftheTour,tourDesc} = tour;
    const [showContent, setShowContent] = useState(false);

  return (
    <div style={{
        width : "200px",
        border: "2px solid black",
        padding:"5px 5px 20px 5px"
        }} key={id}>
        <img src={tourImgLink} alt={nameOftheTour} />
        <title>{nameOftheTour}</title>
        <p>{showContent ? tourDesc : tourDesc.slice(0,100)}...<b onClick = {()=>{setShowContent(!showContent)}}>{showContent ? "Show Less" : "Read More "}</b></p>
        <button onClick={()=>{
             removeTour(id);
             } }>Not Interested</button>
      </div>
  )
}

export default Tours;