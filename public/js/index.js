

var reportButton=$("#report-btn");

// Search
var lookupButton=$("#lookup-btn");

// Contents of top five end up in here
var div=$("#trending-report");

$(reportButton).on("click", function(event){

//collect info from the input element
var reportInput=$("#report-company");

  $.ajax({
      method: "POST",
      url: "/api/report",
      data: reportInput
    })
      .then(function() {
      // Things happen
      });
});

$(lookupButton).on("click", function(event){

//collect info from the input element
var lookupCompany=$("#lookup-company");

  $.ajax({
      method: "GET",
      url: "/api/report",
      data: lookupCompany
    })
      .then(function() {
      // Things happen
      });
});
