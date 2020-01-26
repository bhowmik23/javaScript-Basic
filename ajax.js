function loaddata()
{
 var name=document.getElementById( "username" );
	
 if(name)
 {
  $.ajax({
  type: 'post',
  url: 'adddatawithoutloading.html',
  data: {
   user_name:name,
  },
  success: function (response) {
   // We get the element having id of display_info and put the response inside it
   $( '#display_info' ).html(response);
  }
  });
 }
	
 else
 {
  $( '#display_info' ).html("Please Enter Some Words");
 }
}