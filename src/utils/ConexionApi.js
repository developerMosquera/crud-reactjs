function setSessionStorage(key, value) {
   sessionStorage.setItem(key, value);
}

function getSessionStorage(key) {
   return sessionStorage.getItem(key);
}

export { setSessionStorage, getSessionStorage };