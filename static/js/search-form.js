var last_searched;
var gathered_country_data = {};

$(document).ready(function(){
	var intializeFormComponents = function(){
		///////////////////////////////////////////
		/////////Initialize Side bar///////////////
		///////////////////////////////////////////
		$('#search-form .ui.sidebar').first()
  		.sidebar('show');

		$('.search-form-side-button.button')
		  .removeClass('disabled')
		;

		$('.search-form-side-button.button').click(function(){
			$('#search-form .ui.sidebar')
				.sidebar('toggle')
			;
		});
    
    $('#info-sidebar').hide();


		////////////////////////////////////////////
		/////////Initalize radio buttons////////////
		////////////////////////////////////////////
		$('.ui.checkbox')
	  		.checkbox()
		;
    
    // Populate Country List
    sorted_countries = _.sortBy(country_codes_db, 'name');
    sorted_countries.forEach(function(country) {
      var o = new Option(country.name, country.code);
      $(o).html(country.name);
      $("#country_select").append(o);
    });
    findLocation();
    $('#country_select').selectize();

	};

	intializeFormComponents()

  $("#country_select").change(function(){
    var country = $("#country_select")[0].selectize.getValue();
    var country_color = {};
    country_color[country_codes2to3[country]] = "#00FFF5";
    map.updateChoropleth(country_color);
    if (last_searched){
      var old_country_color = {};
      old_country_color[last_searched] = map.options["fills"][last_searched];
      map.updateChoropleth(old_country_color);
    }
    last_searched = country_codes2to3[country];

  });
  
  $("#search_button").on('click', function() {
    options = {};
    options.country = $("#country_select")[0].selectize.getValue();
    options.accomodation = $("input:radio[name ='accomodation']:checked").val();
    options.food = $("input:radio[name ='food']:checked").val();
    options.smoking = $("#smoking_checkbox").is(":checked");
    options.drinking = $("#drinking_checkbox").is(":checked");
    options.duration = $("#day_input_value").val();
    search(options);
  });

  $("#day_input_value").change(function(){
    $("#day_slider").val(($("#day_input_value").val()))
  });


  $("#day_slider").change(function(){
    console.log($("#day_slider").val());
    // $('#country_select')[0].selectize.setValue(result.countryCode)
    $("#day_input_value").val(($("#day_slider").val()));
  });
});

function search(options) {
  $.post('/search', options, function (response) {
    response = JSON.parse(response);
    gathered_country_data = response;

    // console.log(response);
    //TODO: display response
    $.each(response, function(country_code, cost_data) {
      estimates = estimateTrip(cost_data, options.duration)
      gathered_country_data[country_code]["estimated_costs"] = estimates;
    });

    
    makeFills(gathered_country_data, options.country);
    makeColorful(map);


    // console.log("GATHER COUNTRY DATA::::");
    // console.log(gathered_country_data);
  });
}


function showSearch() {
  $("#info-sidebar").hide()
  $("#search-sidebar").show()
}

function showInfo(country_code) {
  $("#info-sidebar").show()
  $("#search-sidebar").hide()

  country_data = gathered_country_data[country_code];
  
  if ('beach' in country_data.activities) {
    $("#beach").show()
  } else {
    $("#beach").hide()
  }
  if ('shop' in country_data.activities) {
    $("#shop").show()
  } else {
    $("#shop").hide()
  }
  if ('hike' in country_data.activities) {
    $("#hike").show()
  } else {
    $("#hike").hide()
  }
  if ('wildlife' in country_data.activities) {
    $("#wildlife").show()
  } else {
    $("#wildlife").hide()
  }
  if ('art' in country_data.activities) {
    $("#art").show()
  } else {
    $("#art").hide()
  }
  if ('museum' in country_data.activities) {
    $("#museum").show()
  } else {
    $("#museum").hide()
  }  
  
}