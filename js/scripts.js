$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function(blank){
      $("." + blank).text($("input#" + blank).val());
    });

    $("#story").show();

    event.preventDefault();
  });
});
