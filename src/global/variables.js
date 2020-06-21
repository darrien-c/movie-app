/* Example request 
https://api.themoviedb.org/3/movie/550?api_key=8378ecab4c3b33dc26547ee009cd485e 

Popular:
https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

Top Rated:
https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1

Now Playing:
https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1

Upcoming:
https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1

Get Images:
https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US*/

export const API_KEY = '8378ecab4c3b33dc26547ee009cd485e';
export const API_URL      = 'https://api.themoviedb.org/3/';

export const API_URL_POPULAR = 'https://api.themoviedb.org/3/movie/popular?api_key=8378ecab4c3b33dc26547ee009cd485e&language=en-US&page=1';

export const API_URL_TOPRATED = 'https://api.themoviedb.org/3/movie/top_rated?api_key=8378ecab4c3b33dc26547ee009cd485e&language=en-US&page=1';

export const API_URL_NOWPLAYING = 'https://api.themoviedb.org/3/movie/now_playing?api_key=8378ecab4c3b33dc26547ee009cd485e&language=en-US&page=1';

export const API_URL_UPCOMING = 'https://api.themoviedb.org/3/movie/upcoming?api_key=8378ecab4c3b33dc26547ee009cd485e&language=en-US&page=1';

export const IMAGE_URL    = 'https://image.tmdb.org/t/p/';

export const STORAGE_FAVOURITE_MOVIES = 'favs';

export const APP_FOLDER_NAME = '/movie-app';