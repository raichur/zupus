$.getJSON("planetarynames.json", function(data){
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + val.Feature_ID + "'>" + val.Feature_Name + "</li>" );
  });
  $('body').append("<ul>" + items.join("") + "</ul>");
});
