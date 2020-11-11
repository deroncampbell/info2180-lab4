$(document).ready(function(){
  $("#btn_search").click(function(){
  var search_txt = $('#search_box').val();
   $.ajax({
    type: "GET",
    url: "superheroes.php?query="+search_txt,
    success: function (res) {
     $('#result').html(res)
    }
  })
});
});
