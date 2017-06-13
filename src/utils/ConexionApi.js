function setSessionStorage(key, value) {
   sessionStorage.setItem(key, value);
}

function getSessionStorage(key) {
   return sessionStorage.getItem(key);
}

function validateSessionToKen(ToKen) {
   if(ToKen === getSessionStorage('ToKen'))
   {
      return true;
   } else {
      return false;
   }
}

export { setSessionStorage, getSessionStorage, validateSessionToKen };