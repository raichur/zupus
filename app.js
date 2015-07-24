var items = [];

$.getJSON("planetarynames.json", function(data){
  $.each( data, function( key, val ) {
    items.push( "<li id='" + val.Feature_ID + "'>" + val.Feature_Name + "</li>" );
  });
  $('body').append("<ul>" + items.join("") + "</ul>");
});

$('#random').click(function(e) {
  e.preventDefault();
  $('#output').html(items[Math.floor(Math.random()*items.length)]);
});
