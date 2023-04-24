// actual block of the cat (think hog lab where each hog has a section for itself)
import React, { useEffect, useState } from "react";
// import { apiKey } from "./Key"
//TO-DO: add default image when image is not fetched

function CatCard(props) {
  const { breed } = props
  console.log('inside card', breed.id)

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
  },[breed])

  const rating = {
    1: "🐱",
    2: "🐱🐱",
    3: "🐱🐱🐱",
    4: "🐱🐱🐱🐱",
    5: "🐱🐱🐱🐱🐱"
  }

  return (
      <div>
        <h1>Name: {breed.name}</h1>
        <p>Description: {breed.description}</p>
        <img style={{width: 300}} src={catImg}/>
        <p>Temperament: {breed.temperament}</p>
        <ul>
          <li>Affection Level: {rating[breed.affection_level]}</li>
          <li>Child Friendly: {rating[breed.child_friendly]} </li>
          <li>Dog Friendly: {rating[breed.dog_friendly]}</li>
          <li>Energy Level: {rating[breed.energy_level]}</li>
          <li>Shedding Level: {rating[breed.shedding_level]}</li>
        </ul>
      </div>
    );
  }

export default CatCard;
