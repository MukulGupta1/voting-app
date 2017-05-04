'use strict';

(function() {

  var apiUrl = appUrl + '/api/polls' + window.location.pathname.substring(12);
  var ctx = document.getElementById("myChart");
  var question = document.getElementById('poll_title');

  function updatePollGraph(data) {
    var pollObject = JSON.parse(data);
    console.log(JSON.stringify(pollObject));
    question.innerHTML = pollObject.question;

    var labels = [];
    var values = [];

    var dataArr = [];
    dataArr.push({option: pollObject['option_one'], value: pollObject['option_one_val']});
    dataArr.push({option: pollObject['option_two'], value: pollObject['option_two_val']});
    dataArr.push({option: pollObject['option_three'], value: pollObject['option_three_val']});

    console.log(dataArr);

    dataArr.forEach(function(val){
      labels.push(val.option);
      values.push(val.value);

    })


    var data = {
      labels: labels,
      datasets: [
          {
              data: values,
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
    };

    var myPieChart = new Chart(ctx,{
      type: 'pie',
      data: data,
    });

  }

  ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updatePollGraph));

})();
