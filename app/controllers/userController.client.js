'use strict';

(function () {

   var profileId = document.querySelector('#profile-id') || null;
   var profileName = document.querySelector('#profile-name');
   var profileEmail = document.querySelector('#profile-email') || null;
   
   var apiUrl = appUrl + '/api/:id';
   
   console.log('apiUrl: ' + apiUrl);
   
   function updateHtmlElement (data, element, userProperty) {
      element.innerHTML = data[userProperty];
   }

   ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, function (data) {
      
      var userObject = JSON.parse(data).fb;
      console.log('data: ' + data);
      console.log('userObject: ' + JSON.stringify(userObject));

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
