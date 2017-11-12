import $ from 'jquery';

function setSessionStorage(key, value) {
   sessionStorage.setItem(key, value);
}

function getSessionStorage(key) {
   return sessionStorage.getItem(key);
}

function isLogin()
{
   var isLoginPromise = $.Deferred();
   $.ajax({
      url: 'http://192.168.1.56/api-crud-reactjs/',
      cache: false,
      method: "post",
      data: { CONTROLLER : 'login', METHOD: 'validateSession', TOKEN: getSessionStorage('ToKen'), USER: getSessionStorage('user') },
      success: function(data) {
         var result = JSON.parse(data);
         isLoginPromise.resolve(result);
      }
   });

   return isLoginPromise.promise();
}

function logOut() {
   sessionStorage.removeItem('userId');
   sessionStorage.removeItem('user');
   sessionStorage.removeItem('ToKen');
   sessionStorage.removeItem('nombres');
   sessionStorage.removeItem('apellidos');
}

export { setSessionStorage, getSessionStorage, isLogin, logOut };