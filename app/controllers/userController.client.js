'use strict';

(function () {

   var profileName = document.querySelector('#profile-name');
   var profileId = document.querySelector('#profile-id') || null;
   var profileEmail = document.querySelector('#profile-email') || null;
   var apiUrl = appUrl + '/api/:id';
   
   function updateHtmlElement (data, element, userProperty) {
      element.innerHTML = data[userProperty];
   }

   ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, function (data) {
      
      var userObject = JSON.parse(data);
      console.log('data: ' + data);

      if (profileId !== null) {
         updateHtmlElement(userObject, profileId, 'id');   
      }
      
      if (profileName !== null) {
         updateHtmlElement(userObject, profileName, 'name');   
      }

      if (profileEmail !== null) {
         updateHtmlElement(userObject, profileEmail, 'email');   
      }
   }));
})();
