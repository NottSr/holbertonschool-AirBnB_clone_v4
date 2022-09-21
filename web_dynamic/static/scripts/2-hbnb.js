$(function () {
  function ToArray(amenities) {
    $('.amenities H4').text(Object.values(amenities).join(', '));
  }

  const allAmenities = {};
  $('.amenities input').on('change', function () {
    if ($(this).is(':checked')) {
      allAmenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete allAmenities[$(this).attr('data-id')];
    }
    ToArray(allAmenities);
  });
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      if (data.status === 'OK') {
        $("div#api_status").addClass("available")
      }
      else {
        $("div#api_status").removeClass("available")
      }
    }
  });
});
