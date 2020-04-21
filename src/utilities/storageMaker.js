import { STORAGE_FAVOURITE_MOVIES } from '../global/variables';


export const isItemInStorage = (newItem) => {
    let yourCurrentMovies = getStorage();
    if(!yourCurrentMovies){
        return [];
    }
    if(yourCurrentMovies.find(currentMovie => currentMovie.id === newItem.id)){
        return true;
    }
    return yourCurrentMovies;
}
export const setStorage = (newFavMovie, storageItem = STORAGE_FAVOURITE_MOVIES) => {
    if (storageItem === STORAGE_FAVOURITE_MOVIES){
        let arrayOfFavMovies;
        arrayOfFavMovies = getStorage();
        arrayOfFavMovies.push(newFavMovie);
        localStorage.setItem(storageItem, JSON.stringify(arrayOfFavMovies));
    }
}
export const getStorage = (storageItem = STORAGE_FAVOURITE_MOVIES) => {
    let item = localStorage.getItem(storageItem);
    if(item){
        item = JSON.parse(item);
        return item;
    }else if(storageItem === STORAGE_FAVOURITE_MOVIES){
        return [];
    }else{
        return false;
    } 
}