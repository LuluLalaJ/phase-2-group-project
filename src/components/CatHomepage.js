import React from "react";
import { Link } from "react-router-dom";
import "./CatHomepage.css"; 

function CatHomepage() {
  const homepageCatOneUrl = 'https://hips.hearstapps.com/hmg-prod/images/cute-photos-of-cats-curled-up-sleeping-1593184773.jpg'
  const homepageCatTwoUrl = 'https://i.pinimg.com/736x/09/32/44/093244e7abe002528ea913052e1a5a2c.jpg'
  const homepageCatThreeUrl = 'https://www.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-4-57b30a939dff5__605.jpg'

  return (
    <div className="homepage-container">
      <h1 className="homepage-header">You Are Purrfect</h1>
      <div className="homepage-images">
        <img src={homepageCatOneUrl} alt="cat1" />
        <img src={homepageCatTwoUrl} alt="cat2" />
        <img src={homepageCatThreeUrl} alt="cat3" />
      </div>
      <Link className="homepage-button" to="/breeds">View Breeds</Link>
    </div>
  );
}

export default CatHomepage;
