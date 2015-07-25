var items = [];

$.getJSON("planetarynames.json", function(data){
  $.each( data, function( key, val ) {
    items.push( "<li id='" + val.Feature_ID + "'>" + val.Feature_Name + "</li>" );
  });
  $('body').append("<ul id='names'>" + items.join("") + "</ul>");
});

$('#random').click(function(e) {
  e.preventDefault();
  $('#output').html(items[Math.floor(Math.random()*items.length)]);
});

$(document).ajaxComplete(function() {
  $('#output').html(items[Math.floor(Math.random()*items.length)]);
});

function filter(element) {
    var value = $(element).val().toLowerCase();

    $("#names > li").each(function() {
        if ($(this).text().toLowerCase().search(value) > -1) {
            $(this).show();
        }
        else {
            $(this).hide();
        }
    });
}
