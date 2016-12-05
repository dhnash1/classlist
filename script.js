/*make an AJAX call from the client side app.js, using an .ajax method and
 access the json data through the url above. When successful, it should bring
  the data back down for use. You will then need to combine that with what you
   have learned about parsing objects and arrays to complete the challenge.

   What I would like to see on the DOM, is one person at a time represented -
   the info for the first person in the json data. One the screen should also be
    Prev and Next buttons, that when pressed, show the information for the
    appropriate person. These should wrap - prev when on the first person
    should wrap around to show the last person and vice versa. Also on the DOM
    should be a display showing the number of people and which is being
    currently viewed (eg. 2/20)

When a person is displayed, show their name (first & last) and their info. Only
 one person should be shown at any given time.*/

console.log('sourced');
var count = 0;
$(document).ready(function(){
  console.log("Running...");
    $.ajax({
      url:'http://devjana.net/support/tau_students.json',
      dataType:"JSON",
      success: function(data){
        console.log("heres what i have: " + data.tau);
      for (var i = 0; i < data.tau.length; i++) {
        console.log(data.tau);
        var tau = data.tau;
        $('#sel').append("<option value='" + [i] + "'>" + tau[i].first_name + "</option>");
        info(count);
      }//end for loop
        $("#go").on('click', function(){
          var bawx = $('#sel').val();
          console.log(bawx);
          info(bawx);
          count = bawx;
        });
        $("#next").on('click', function(){
          console.log('next');
          nx();
          info(count);
        });//end on next click
        $("#prev").on('click', function(){
          console.log('next');
          pv();
          info(count);
        });//end on prev click
        function info(x){
          if (tau[x].first_name == 'Deforis') {
            $('#pic').html("<img src='https://pbs.twimg.com/profile_images/3628547439/068f8a9897846991d4eb7b664c44783e_400x400.jpeg'>");
          }else{
            $("#pic").html("<img src ='" + tau[x].picUrl + "'>");
          }//end else
            $('#info').html("<p>" + tau[x].first_name + " " + tau[x].last_name + "</p>");
            $('#amount').html((x * 1 + 1) + "/" + tau.length);
            $('#desc').html("<p>" + tau[x].info + "</p>");
        }//end info

      }//end success
    });//end ajax
    function nx(x){
      count = count * 1 + 1;
      console.log(count);
      if(count > 14){
        count = 0;
      }// end if
    }// end nx
    function pv(x){
      count = count * 1 - 1;
      console.log(count);
      if (count < 0 ){
        count = 14;
      }// end if
    }//end pv
});//end doc ready
