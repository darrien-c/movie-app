import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY } from '../global/variables';
import { DisplayFavArray, FavouritesArray, YourFavourites } from '../components/sections/AddToFavourites';
import { Movie } from '../components/sections/Movie';
import { setStorage, getStorage, removeFromStorage } from '../utilities/storageMaker';




class Favourites extends React.Component {

   
       
render() {
   return (
     <div>
      <h1>Favourites Page</h1>
      <DisplayFavArray/>
    
     </div>   
    )
   }
   

}
export default Favourites;
