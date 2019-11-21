jQuery.fn.serializeObject = function() {
  var arrayData, objectData;
  arrayData = this.serializeArray();
  objectData = {};

  $.each(arrayData, function() {
    var value;

    if (this.value != null) {
      value = this.value;
    } else {
      value = '';
    }

    if (objectData[this.name] != null) {
      if (!objectData[this.name].push) {
        objectData[this.name] = [objectData[this.name]];
      }

      objectData[this.name].push(value);
    } else {
      objectData[this.name] = value;
    }
  });

  return objectData;
};


add_item_to_cart = function(item_id, item_price) {
  $(item_id).val(Number($(item_id).val()) + 1);
 
  $('#cash').val(parseFloat(Number($('#cash').val()) + Number(item_price)).toFixed(2));

};

$(document).ready(function() {




var $form = $('form#bestellung'),
    url = 'https://script.google.com/macros/s/AKfycbyQpH1KXpDZhknQwCRX5EeUqtLj2t2tITDuIUSQdWUE6iTrHO-5/exec'

$('#bezahlt').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "POST",
    dataType: "json",
    data: $form.serializeObject()
  });
  console.log($form.serializeObject());
  document.getElementById("bestellung").reset(); 
});

$('#frei').on('click', function(e) {
  $('#cash').val(parseFloat(Number('0.00').toFixed(2)));
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "POST",
    dataType: "json",
    data: $form.serializeObject()
  });
  console.log($form.serializeObject());
  document.getElementById("bestellung").reset(); 
});

})
