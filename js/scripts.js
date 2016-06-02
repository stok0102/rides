$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var height = parseInt($("#height").val());

    if (height >= 54) {
      $("li").css("background", "transparent" )
      $(".tall").css("background", "#AAD5E3");
    }

    else if (height < 54) {
      $("li").css("background", "transparent")
      $(".short").css("background", "#B9E3AA");
    }

    else {
      alert("Your height is not a number. Try again.")
    }
  });
});
