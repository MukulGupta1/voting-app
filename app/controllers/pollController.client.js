'use strict';

(function () {
   
   var pollList = document.querySelector('#poll_list');
   
   var apiUrl = appUrl + '/api/:id/polls';
   
   function getPollsData (data) {
      var pollsObject = JSON.parse(data);
      for (var i = 0; i < pollsObject.length; i++){
         // var objKey = pollsObject[i]._id.toString().splice(9,24);
         var objId = pollsObject[i]['_id'];
         var objVal = pollsObject[i]['title'];
         var btn = document.createElement('a');
         btn.setAttribute('id', 'btn-poll-' + i);
         btn.setAttribute('href', 'polls/' + objId);
         btn.setAttribute('class', 'btn');
         btn.setAttribute('style', 'text-decoration:none; margin:20px');
         btn.innerHTML = '' + objVal;
         pollList.appendChild(btn);
         
      }
   }
   
   ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, getPollsData));
   
})();
