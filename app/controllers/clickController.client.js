'use strict';

(function () {

   var addClickButton = document.querySelector('#add-click');
   var deleteClickButton = document.querySelector('#reset-click');
   
   var clickNbr = document.querySelector('#click-nbr');
   
   var apiUrl = appUrl + '/api/:id/clicks';

   function updateClickCount (data) {
      var clicksObject = JSON.parse(data);
      clickNbr.innerHTML = clicksObject.clicks;
   }

   ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount));

   addClickButton.addEventListener('click', function () {
      ajaxFunctions.ajaxRequest('POST', apiUrl, function () {
         ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
         console.log('apiUrl: ' + apiUrl)
      });

   }, false);

   deleteClickButton.addEventListener('click', function () {
      ajaxFunctions.ajaxRequest('DELETE', apiUrl, function () {
         ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
      });
   }, false);

})();
