import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY } from '../global/variables';
import { DisplayFavArray, FavouritesArray, YourFavourites } from '../components/sections/AddToFavourites';
import { Movie } from '../components/sections/Movie';
import { setStorage, getStorage, removeFromStorage } from '../utilities/storageMaker';
import SubHeader from './sections/SubHeader';



class Favourites extends React.Component {

   
       
render() {
   return (
      <main>
         <div className="filter-menu">
            <SubHeader />
         </div>
         <div className="section-01">
            <h1>Favourites Page</h1>
            <DisplayFavArray/>
         </div> 
     </main>  
    )
   }
   

}
export default Favourites;
