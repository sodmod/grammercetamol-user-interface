import Cookies from "js-cookie";

// set data into cookie
export function setCookie(key, value, expires){
  Cookies.set(key, value, {expires});
}

// retrieve data from cookie
export function getCookie(key){
  return Cookies.get(key);
}

// retrive data key from local storage
export function getLocalStorage(key){
  return localStorage.getItem(key);
}

// retrieve data key from session storage
export function getSessionStorage(key){
  return sessionStorage.getItem(key);
}

// set data with a key value pair into local storage
export function setLocalStorage(key, value){
  localStorage.setItem(key, value);
}

// set data with a key value pair into session storage
export function setSessionStorage(key, value){
  sessionStorage.setItem(key, value);
}

// delete data from local storage
export function removeKeyFromLocalStorage(key){
  localStorage.removeItem(key);
}

// delete data from cookie
export function removeKeyFromCookie(key){
  Cookies.remove(key);
}

// clear data from session storage
export function clearSessionStorage(){
  sessionStorage.clear();
}

// convert data into lower case
// this method is specific
export function userInfoToLowerCase(data){
  return {
    firstname: data?.firstName,
    lastname: data?.lastName,
    othername: data?.otherName,
    username: data?.userName,
  };
}

export function getSpecificKey(data, key){
  const parsedString = JSON.parse(getLocalStorage(key))
  return {
    data: parsedString?.[data]
  }
}
