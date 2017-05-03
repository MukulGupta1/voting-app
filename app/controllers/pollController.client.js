'use strict';

(function() {


  var pollTitle = document.querySelector('#poll_title');
  var question = document.querySelector('#question');
  var optionOne = document.querySelector('#option_one');
  var optionTwo = document.querySelector('#option_two');
  var optionThree = document.querySelector('#option_three');
  var optionOneLabel = document.querySelector('#option_one_label');
  var optionTwoLabel = document.querySelector('#option_two_label');
  var optionThreeLabel = document.querySelector('#option_three_label');
  var optionOneVal, optionTwoVal, optionThreeVal;

  var chartDiv = document.querySelector('#chart_div');

  var apiUrl = appUrl + '/api' + window.location.pathname;

  console.log('apiUrl: ' + apiUrl);

  function getPollData(data) {
    var pollObject = JSON.parse(data);
    pollTitle.innerHTML = pollObject['title'];
    question.innerHTML = pollObject['question'];
    optionOneLabel.innerHTML = pollObject['option_one'];
    optionTwoLabel.innerHTML = pollObject['option_two'];
    optionThreeLabel.innerHTML = pollObject['option_three'];
    optionOneVal = pollObject['option_one_val'];
    optionTwoVal = pollObject['option_two_val'];
    optionThreeVal = pollObject['option_three_val'];

    var chartDataArr = [
      [pollObject['option_one'], optionOneVal],
      [pollObject['option_two'], optionTwoVal],
      [pollObject['option_three'], optionThreeVal]
    ]
    
    console.log('chartDataArr: ' + chartDataArr);
    console.log(typeof chartDataArr);
    
    updateChart(chartDataArr)

  }

  function updateChart(chartDataArr) {

    google.charts.load('current', {
      'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart(chartDataArr) {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');

      data.addRows(chartDataArr);

      var options = {
        'title': 'How Much Pizza I Ate Last Night',
        'width': 400,
        'height': 300
      };
      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }

  }


  ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, getPollData));








})();
