$(document).ready(function() {
    //on submit button
    $('#submit-info-button').on("click", function(){
        $('#myModal').modal({
            keyboard: false
          });
          var values = {};
  
    $.each($('#myForm').serializeArray(), function(i, field) {
    values[field.name] = field.value;
    });

});

});