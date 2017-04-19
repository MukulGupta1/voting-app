'use strict';

(function () {

   var addPollButton = document.querySelector('#add-poll');
   var viewPollsButton = document.querySelector('#view-polls');
   
   var pollNbr = document.querySelector('#poll-nbr');
   
   var apiUrl = appUrl + '/api/:id/pollCount';

   function updatePollCount (data) {
      var pollsObject = JSON.parse(data);
      pollNbr.innerHTML = pollsObject.polls;
   }

   ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updatePollCount));

})();
