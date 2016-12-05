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
          danger(bawx);
          count = bawx;
        });
        $("#next").on('click', function(){
          nx();
          info(count);
          danger(count);
        });//end on next click
        $("#prev").on('click', function(){
          pv();
          info(count);
          danger(count);
        });//end on prev click
        function info(x){
          if (tau[x].first_name == 'Deforis') {
            $('#pic').html("<img src='https://pbs.twimg.com/profile_images/3628547439/068f8a9897846991d4eb7b664c44783e_400x400.jpeg'>");
            $('#desc').html("<p>" + tau[x].info + "</p>" + "<p> Is also a real villian </p>");
          }else{
            $("#pic").html("<img src ='" + tau[x].picUrl + "'>");
            $('#desc').html("<p>" + tau[x].info + "</p>");
          }//end else
            $('#info').html("<p>" + tau[x].first_name + " " + tau[x].last_name + "</p>");
            $('#amount').html((x * 1 + 1) + "/" + tau.length);
        }//end info
        function danger(x){
          if(tau[x].first_name == "Jacob"){
            $('.click').addClass("btn-danger");
          }else{
            $('.click').removeClass("btn-danger");
          }
        }//end danger
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
