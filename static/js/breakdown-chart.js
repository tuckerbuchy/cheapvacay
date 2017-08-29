
function generateBreakdownChart(country){

  if (_.isEmpty(gathered_country_data)) return;
  values = gathered_country_data[country]["estimated_costs"];

  country_name = $("#tooltip").attr("value");
  $("#tooltip").empty();
  $("#tooltip").append("<div id='tooltip_container'><label>"+country_name+"</label><div id='chart'></div></div>");

  values_c3 = []
  
  $("#total").text("$"+Math.round(gathered_country_data[country]["estimated_costs"]["total"]));

  console.log(values);
  if (values.rent){
    values_c3.push(['rent', values.rent]);
  }
  if (values.cigarettes){
    values_c3.push(['smoking', values.cigarettes]);
  }
  if (values.beer){
    values_c3.push(['drinking', values.beer]);
  }
  if (values.food){
    values_c3.push(['food', values.food]);
  }

if (values_c3.flight+values_c3.accomodation+values_c3.cigarettes+values_c3.drinking+values_c3.food == 0){
  values_c3.push(['nodata', 1]);
}

  var chart = c3.generate({
      data: {
          // iris data from R
          columns: values_c3,
          type : 'pie',
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      }
  });
}