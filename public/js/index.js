
// Report Button
var reportButton = $("#report-btn");

// Lookup Button
var lookupButton = $("#lookup-btn");

// Contents of top five end up in here
var div = $("#trending-report");

$(reportButton).on("click", function (event) {

  $.ajax({
    method: "POST",
    url: "/api/report",
    data: companyResult
  })
    .then(function (data) {

      // Clear textfield
      $("#report-company").val('');

      // Company info has been added to that database
      console.log(data)
    });
});

$(lookupButton).on("click", function (event) {

  //collect info from the input element
  var lookupCompany = {
    company_name: $("#lookup-company").val()
  };

  $.ajax({
    method: "POST",
    url: "/api/lookup",
    data: lookupCompany
  })
    .then(function (data) {

      // Clear teetfield
      $("#lookup-company").val('');

      // Data is the company info
      console.log(data)
    });
});


var autocompleteReport;
var autocompleteLookup;

var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

var companyResult = {};

function initAutocomplete() {

  console.log("initAutocomplete()")

  // Create the autocomplete object
  autocompleteReport = new google.maps.places.Autocomplete(
    document.getElementById('report-company'), { types: ['establishment'] });

  autocompleteLookup = new google.maps.places.Autocomplete(
    document.getElementById('lookup-company'), { types: ['establishment'] });

  // Avoid paying for data that you don't need by restricting the set of
  // place fields that are returned to just the address components.
  autocompleteReport.setFields('address_components');
  autocompleteLookup.setFields('address_components');

  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  autocompleteReport.addListener('place_changed', getCompanyReportedName);
  autocompleteLookup.addListener('place_changed', getCompanyLookupName);
}

function getCompanyReportedName() {

  var place = autocompleteReport.getPlace();

  document.getElementById("report-company").value = '';
  document.getElementById("report-company").value = place.name;

  fillInAddress(place)
}

function getCompanyLookupName() {

  var place = autocompleteLookup.getPlace();

  document.getElementById("lookup-company").value = '';
  document.getElementById("lookup-company").value = place.name;

  fillInAddress(place)
}

function fillInAddress(place) {
  // Get the place details from the autocomplete object.
  //var place = autocomplete.getPlace();

  //console.log("place:", place);
  companyResult['company_name'] = place.name;

  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];

    //console.log("addressType:", addressType);

    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];

      companyResult[addressType] = val;
    }
  }
  //console.log("companyResult", companyResult);
}
