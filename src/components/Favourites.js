import React, { useEffect, useState } from 'react';
import { API_URL } from '../global/variables';
import { FavouritesArray, AddToFavourites } from '../components/sections/AddToFavourites';
import { Movie } from '../components/sections/Movie';

const Favourites = (props) => {





   return (
     <div>
      <h1>Favourites Page</h1>
      <FavouritesArray />
     </div>   
    )
 

}
export default Favourites;
