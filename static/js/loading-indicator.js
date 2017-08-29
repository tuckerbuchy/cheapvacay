var ajax_counter = 0;

$.ajaxSetup({
  beforeSend:function(){
    ajax_counter++;
    $("#loading").show();
  },
  complete:function(){
    ajax_counter--;
    if(ajax_counter==0) {
      $("#loading").hide();
    }
  }
});