function setSessionStorage(key, value) {
   sessionStorage.setItem(key, value);
}

function getSessionStorage(key) {
   return sessionStorage.getItem(key);
}

function validateSessionToKen(ajaxToKen) {
   if(getSessionStorage('ToKen') === ajaxToKen)
   {
      return true;
   } else {
      return false;
   }
}

function isLogin(ajaxToKen) {
   return validateSessionToKen(ajaxToKen);
}

function logOut() {
   sessionStorage.removeItem('ToKen');
}

export { setSessionStorage, getSessionStorage, validateSessionToKen, isLogin, logOut };