// actual block of the cat (think hog lab where each hog has a section for itself)
import React, { useEffect, useState } from "react";
// import { apiKey } from "./Key"

//TO-DO: add default image when image is not fetched

function CatCard(props) {
  const { breed } = props

  const apiKey = "live_r3WyRPywctETHObbk4mYZUBbhyehNrYxzTUdGqVzi2zeJMouvxB3V9MMOpIBLXQ5"
  const [catImg, setCatImg] = useState('')
  const imgByBreedUrl = "https://api.thecatapi.com/v1/images/search?breed_ids=" + breed.id

  useEffect(() => {
    fetch(imgByBreedUrl, {
      method: "GET",
      headers: {
        'x-api-key': apiKey
      }
    })
      .then(r => r.json())
      .then(img => setCatImg(img[0].url))
  },[])

  return (
      <div>
        <h1>{breed.name}</h1>
        <p>{breed.description}</p>
        <img style={{width: 300}}src={catImg}/>

      </div>
    );
  }

export default CatCard;
