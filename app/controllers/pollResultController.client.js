'use strict';

(function() {

  var chartDiv = document.querySelector('#chart_div');

  var apiUrl = appUrl + '/api/polls' + window.location.pathname.substring(12);

  console.log('apiUrl: ' + apiUrl);

  function getPollData(data) {
    var pollObject = JSON.parse(data);
    var dataArr = [];
    dataArr.push({option: pollObject['option_one'], value: pollObject['option_one_val']});
    dataArr.push({option: pollObject['option_two'], value: pollObject['option_two_val']});
    dataArr.push({option: pollObject['option_three'], value: pollObject['option_three_val']});

    console.log(dataArr);

    var x = d3.scaleLinear()
    .domain([0, 6])
    .range([0, 420]);

    d3.select(".chart")
      .selectAll("div")
        .data(dataArr)
      .enter().append("div")
        .style("width", function(d) { return x(d.value) + "px"; })
        .text(function(d) { return d.option; });
  }

  ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, getPollData));

})();
