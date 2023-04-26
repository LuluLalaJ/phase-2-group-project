import { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = props => {
    const [favorites, setFavorites] = useState([]);
    const favoriteUrl = "http://localhost:8000/favBreeds/"

    function addFavoriteBreeds(breed, imgByBreedUrl) {
        // Check if the breed is already in the favorites list
        for (let i = 0; i < favorites.length; i++) {
          if (favorites[i].breedId === breed.id) {
            // Breed is already in the favorites list, so exit the function
            return;
          }
        }
        const favObj = {
            breedId: breed.id,
            name: breed.name,
            image: imgByBreedUrl
        }

        const postRequest = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(favObj)
        }
        fetch(favoriteUrl, postRequest)
            .then(r => r.json())
            .then(data => setFavorites([...favorites, data]))
    }


    function deleteFav(deletedId) {
        fetch(favoriteUrl + deletedId, {
            method: "DELETE",
        })
            .then((r) => {
                if (r.ok) {
                    setFavorites(favorites.filter((fav) => fav.id !== deletedId))
                }
            })
            .catch((error) => console.error(error))
    }

    return (
        <FavoriteContext.Provider value={{ favorites, setFavorites, favoriteUrl, addFavoriteBreeds, deleteFav }}>
            {props.children}
        </FavoriteContext.Provider>
    );
};

export default FavoriteProvider;
