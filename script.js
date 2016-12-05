var count = 0;
$(document).ready(function(){
    $.ajax({
      url:'http://devjana.net/support/tau_students.json',
      dataType:"JSON",
      success: function(data){
      for (var i = 0; i < data.tau.length; i++) {
        var tau = data.tau;
        $('#sel').append("<option value='" + [i] + "'>" + tau[i].first_name + "</option>");
        info(count);
      }//end for loop
        $("#go").on('click', function(){
          var bawx = $('#sel').val();
          info(bawx);
          count = bawx;
        });
        $("#next").on('click', function(){
          nx();
          info(count);
        });//end on next click
        $("#prev").on('click', function(){
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
      if(count > 14){
        count = 0;
      }// end if
    }// end nx
    function pv(x){
      count = count * 1 - 1;
      if (count < 0 ){
        count = 14;
      }// end if
    }//end pv
});//end doc ready
//note to self: if I had more time, i would un-hard code these counter thingies here.
