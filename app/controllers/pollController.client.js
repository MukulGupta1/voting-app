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
    console.log('pollObject: ' + JSON.stringify(pollObject));
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

  ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, getPollData));

})();
