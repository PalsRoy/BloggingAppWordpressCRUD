import axios from 'axios';

export const FETCH_POSTS= 'FETCH_POSTS';
const ROOT_URL= 'http://www.heuristickitchens.com/wp-json/wp/v2';
//const API_KEY= '?p=123';

export function fetchPosts(){
    const fetchUrl = `${ROOT_URL}/posts?page=1`;
    const request = axios.get(fetchUrl);

  return {
    type: FETCH_POSTS,
    payload:request
  };

}
