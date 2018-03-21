$(document).ready(function() {
  var dob = $("#birthday-1").val();

  var favoriteColor = $("#color").val();

  $("button#enter").click(function() {
    $("#thankYou").fadeToggle()
    event.preventDefault();
    });
});
