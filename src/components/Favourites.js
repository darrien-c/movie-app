import React, { useEffect, useState } from 'react';
import { API_URL } from '../global/variables';
import { DisplayFavArray, FavouritesArray } from '../components/sections/AddToFavourites';
import { Movie } from '../components/sections/Movie';




class Favourites extends React.Component {



render() {

   return (
     <div>
      <h1>Favourites Page</h1>
      <DisplayFavArray /> 
      
     </div>   
    )
 
   }

}
export default Favourites;
