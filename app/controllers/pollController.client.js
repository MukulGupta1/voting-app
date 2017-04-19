'use strict';

(function () {
   
   var title = document.querySelector('#title')
   var pollTitle = document.querySelector('#pollTitle')
   var question = document.querySelector('#question');
   var optionOne = document.querySelector('#optionOne');
   var optionTwo = document.querySelector('#optionTwo');
   var optionThree = document.querySelector('#optionThree');
   var submitButton = document.querySelector('#submitButton')
   
   var apiUrl = appUrl + '/api/:id/polls';

   function addPoll () {
      console.log('Poll added')
   }

   // submitButton.addEventListener('click', function () {
   //    ajaxFunctions.ajaxRequest('POST', apiUrl, addPoll())
   //    });

   // }, false);

   // deleteButton.addEventListener('click', function () {
   //    ajaxFunctions.ajaxRequest('DELETE', apiUrl, function () {
   //       ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
   //    });
   // }, false);

})();
