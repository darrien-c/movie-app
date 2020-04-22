import { STORAGE_FAVOURITE_MOVIES } from '../global/variables';


export const isItemInStorage = (newItem) => {
    let currentMovies = getStorage();
    if(!currentMovies){
        return [];
    }
    if(currentMovies.find(currentMovie => currentMovie.id === newItem.id)){
        return true;
    }
    return currentMovies;
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

export const removeFromStorage = (movie, storageItem = STORAGE_FAVOURITE_MOVIES) => {
    let items = getStorage();
    const isFavourite = (current) => current.movie === movie;
    let indexOfItemToRemove = items.findIndex(isFavourite);
    items.splice(indexOfItemToRemove, 1);
    let itemsForStorage = JSON.stringify(items);
    localStorage.setItem(storageItem, itemsForStorage);
    return items;
} 