var map;
var g;
var hoverover;
var width;
var height;
var centered;


function arraymax( array ){
        return Math.max.apply( Math, array );
    }

var color_range = ['#79aeeb', '#725ced', '#c63ff0', '#f221a2', '#f50202'];

var sample_response_string = '{"AL"=>{"accomodation_cost"=>62.95, "smoking_cost"=>2.47, "drinking_cost"=>2.47}, "AR"=>{"accomodation_cost"=>63.05, "smoking_cost"=>2.0, "drinking_cost"=>2.0}, "BW"=>{"accomodation_cost"=>150.3, "smoking_cost"=>3.71, "drinking_cost"=>3.71}, "BV"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "BR"=>{"accomodation_cost"=>92.4, "smoking_cost"=>2.43, "drinking_cost"=>2.43}, "BG"=>{"accomodation_cost"=>59.3, "smoking_cost"=>3.25, "drinking_cost"=>3.25}, "TD"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "KM"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "AF"=>{"accomodation_cost"=>65.2, "smoking_cost"=>1.89, "drinking_cost"=>1.89}, "AX"=>{"accomodation_cost"=>115.94, "smoking_cost"=>7.05, "drinking_cost"=>7.05}, "DZ"=>{"accomodation_cost"=>78.66, "smoking_cost"=>1.8, "drinking_cost"=>1.8}, "AS"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "AD"=>{"accomodation_cost"=>155.8, "smoking_cost"=>3.84, "drinking_cost"=>3.84}, "AO"=>{"accomodation_cost"=>83.5, "smoking_cost"=>1.9, "drinking_cost"=>1.9}, "AI"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "AQ"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "AG"=>{"accomodation_cost"=>70.6, "smoking_cost"=>1.89, "drinking_cost"=>1.89}, "CK"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "HR"=>{"accomodation_cost"=>67.85, "smoking_cost"=>4.18, "drinking_cost"=>4.18}, "FO"=>{"accomodation_cost"=>92.4, "smoking_cost"=>10.32, "drinking_cost"=>10.32}, "GA"=>{"accomodation_cost"=>122.71, "smoking_cost"=>1.66, "drinking_cost"=>1.66}, "HN"=>{"accomodation_cost"=>271.04, "smoking_cost"=>1.75, "drinking_cost"=>1.75}, "HK"=>{"accomodation_cost"=>44.17, "smoking_cost"=>6.45, "drinking_cost"=>6.45}, "KW"=>{"accomodation_cost"=>78.24, "smoking_cost"=>2.25, "drinking_cost"=>2.25}, "LV"=>{"accomodation_cost"=>53.5, "smoking_cost"=>4.02, "drinking_cost"=>4.02}, "MG"=>{"accomodation_cost"=>44.22, "smoking_cost"=>4.0, "drinking_cost"=>4.0}, "MC"=>{"accomodation_cost"=>116.22, "smoking_cost"=>8.97, "drinking_cost"=>8.97}, "LC"=>{"accomodation_cost"=>92.74, "smoking_cost"=>2.59, "drinking_cost"=>2.59}, "WS"=>{"accomodation_cost"=>62.95, "smoking_cost"=>4.35, "drinking_cost"=>4.35}, "SS"=>{"accomodation_cost"=>53.5, "smoking_cost"=>nil, "drinking_cost"=>nil}, "UY"=>{"accomodation_cost"=>82.0, "smoking_cost"=>3.27, "drinking_cost"=>3.27}, "AM"=>{"accomodation_cost"=>81.61, "smoking_cost"=>1.41, "drinking_cost"=>1.41}, "AW"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "AU"=>{"accomodation_cost"=>97.22, "smoking_cost"=>17.56, "drinking_cost"=>17.56}, "AT"=>{"accomodation_cost"=>95.12, "smoking_cost"=>5.77, "drinking_cost"=>5.77}, "AZ"=>{"accomodation_cost"=>109.98, "smoking_cost"=>2.55, "drinking_cost"=>2.55}, "BS"=>{"accomodation_cost"=>106.09, "smoking_cost"=>5.6, "drinking_cost"=>5.6}, "BH"=>{"accomodation_cost"=>88.86, "smoking_cost"=>2.39, "drinking_cost"=>2.39}, "BD"=>{"accomodation_cost"=>92.74, "smoking_cost"=>2.33, "drinking_cost"=>2.33}, "BB"=>{"accomodation_cost"=>44.22, "smoking_cost"=>7.25, "drinking_cost"=>7.25}, "BY"=>{"accomodation_cost"=>77.21, "smoking_cost"=>1.58, "drinking_cost"=>1.58}, "BE"=>{"accomodation_cost"=>105.94, "smoking_cost"=>6.98, "drinking_cost"=>6.98}, "BZ"=>{"accomodation_cost"=>39.67, "smoking_cost"=>4.0, "drinking_cost"=>4.0}, "BJ"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "BM"=>{"accomodation_cost"=>70.09, "smoking_cost"=>10.25, "drinking_cost"=>10.25}, "BT"=>{"accomodation_cost"=>137.55, "smoking_cost"=>2.59, "drinking_cost"=>2.59}, "BO"=>{"accomodation_cost"=>83.66, "smoking_cost"=>1.88, "drinking_cost"=>1.88}, "BQ"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "BA"=>{"accomodation_cost"=>61.06, "smoking_cost"=>2.61, "drinking_cost"=>2.61}, "IO"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "BN"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "BF"=>{"accomodation_cost"=>83.66, "smoking_cost"=>nil, "drinking_cost"=>nil}, "BI"=>{"accomodation_cost"=>81.32, "smoking_cost"=>18.03, "drinking_cost"=>18.03}, "KH"=>{"accomodation_cost"=>33.2, "smoking_cost"=>1.2, "drinking_cost"=>1.2}, "CM"=>{"accomodation_cost"=>83.66, "smoking_cost"=>1.0, "drinking_cost"=>1.0}, "CA"=>{"accomodation_cost"=>97.22, "smoking_cost"=>9.78, "drinking_cost"=>9.78}, "CV"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "KY"=>{"accomodation_cost"=>88.86, "smoking_cost"=>9.57, "drinking_cost"=>9.57}, "CF"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "CL"=>{"accomodation_cost"=>91.5, "smoking_cost"=>4.24, "drinking_cost"=>4.24}, "CN"=>{"accomodation_cost"=>53.77, "smoking_cost"=>2.45, "drinking_cost"=>2.45}, "CX"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "CC"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "CO"=>{"accomodation_cost"=>81.32, "smoking_cost"=>1.81, "drinking_cost"=>1.81}, "CG"=>{"accomodation_cost"=>126.52, "smoking_cost"=>2.02, "drinking_cost"=>2.02}, "CD"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "CR"=>{"accomodation_cost"=>80.0, "smoking_cost"=>3.0, "drinking_cost"=>3.0}, "CI"=>{"accomodation_cost"=>106.09, "smoking_cost"=>1.46, "drinking_cost"=>1.46}, "CU"=>{"accomodation_cost"=>175.08, "smoking_cost"=>1.01, "drinking_cost"=>1.01}, "CW"=>{"accomodation_cost"=>137.55, "smoking_cost"=>5.47, "drinking_cost"=>5.47}, "CY"=>{"accomodation_cost"=>79.16, "smoking_cost"=>5.77, "drinking_cost"=>5.77}, "CZ"=>{"accomodation_cost"=>65.89, "smoking_cost"=>4.01, "drinking_cost"=>4.01}, "DK"=>{"accomodation_cost"=>126.52, "smoking_cost"=>7.4, "drinking_cost"=>7.4}, "DJ"=>{"accomodation_cost"=>70.09, "smoking_cost"=>1.1, "drinking_cost"=>1.1}, "DM"=>{"accomodation_cost"=>72.61, "smoking_cost"=>3.0, "drinking_cost"=>3.0}, "DO"=>{"accomodation_cost"=>88.5, "smoking_cost"=>3.21, "drinking_cost"=>3.21}, "EC"=>{"accomodation_cost"=>68.8, "smoking_cost"=>3.5, "drinking_cost"=>3.5}, "EG"=>{"accomodation_cost"=>72.5, "smoking_cost"=>2.38, "drinking_cost"=>2.38}, "SV"=>{"accomodation_cost"=>78.66, "smoking_cost"=>2.84, "drinking_cost"=>2.84}, "GQ"=>{"accomodation_cost"=>271.04, "smoking_cost"=>nil, "drinking_cost"=>nil}, "ER"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "EE"=>{"accomodation_cost"=>68.18, "smoking_cost"=>4.23, "drinking_cost"=>4.23}, "ET"=>{"accomodation_cost"=>78.91, "smoking_cost"=>2.0, "drinking_cost"=>2.0}, "FK"=>{"accomodation_cost"=>92.4, "smoking_cost"=>10.93, "drinking_cost"=>10.93}, "FJ"=>{"accomodation_cost"=>44.22, "smoking_cost"=>4.43, "drinking_cost"=>4.43}, "FI"=>{"accomodation_cost"=>118.12, "smoking_cost"=>7.05, "drinking_cost"=>7.05}, "FR"=>{"accomodation_cost"=>108.0, "smoking_cost"=>8.71, "drinking_cost"=>8.71}, "GF"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "PF"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "TF"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "GM"=>{"accomodation_cost"=>140.0, "smoking_cost"=>1.14, "drinking_cost"=>1.14}, "GE"=>{"accomodation_cost"=>140.0, "smoking_cost"=>1.72, "drinking_cost"=>1.72}, "DE"=>{"accomodation_cost"=>100.72, "smoking_cost"=>6.41, "drinking_cost"=>6.41}, "GH"=>{"accomodation_cost"=>110.52, "smoking_cost"=>3.1, "drinking_cost"=>3.1}, "GI"=>{"accomodation_cost"=>106.09, "smoking_cost"=>3.86, "drinking_cost"=>3.86}, "GR"=>{"accomodation_cost"=>66.99, "smoking_cost"=>5.12, "drinking_cost"=>5.12}, "GL"=>{"accomodation_cost"=>122.71, "smoking_cost"=>12.22, "drinking_cost"=>12.22}, "GD"=>{"accomodation_cost"=>153.42, "smoking_cost"=>5.17, "drinking_cost"=>5.17}, "GP"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "GU"=>{"accomodation_cost"=>88.35, "smoking_cost"=>7.0, "drinking_cost"=>7.0}, "GT"=>{"accomodation_cost"=>78.24, "smoking_cost"=>2.18, "drinking_cost"=>2.18}, "GG"=>{"accomodation_cost"=>130.95, "smoking_cost"=>9.53, "drinking_cost"=>9.53}, "GN"=>{"accomodation_cost"=>92.4, "smoking_cost"=>1.14, "drinking_cost"=>1.14}, "GW"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "GY"=>{"accomodation_cost"=>53.5, "smoking_cost"=>1.5, "drinking_cost"=>1.5}, "HT"=>{"accomodation_cost"=>39.67, "smoking_cost"=>2.36, "drinking_cost"=>2.36}, "HM"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "VA"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "HU"=>{"accomodation_cost"=>56.57, "smoking_cost"=>4.09, "drinking_cost"=>4.09}, "IS"=>{"accomodation_cost"=>128.11, "smoking_cost"=>9.96, "drinking_cost"=>9.96}, "IN"=>{"accomodation_cost"=>53.88, "smoking_cost"=>1.94, "drinking_cost"=>1.94}, "ID"=>{"accomodation_cost"=>55.21, "smoking_cost"=>1.22, "drinking_cost"=>1.22}, "IR"=>{"accomodation_cost"=>119.2, "smoking_cost"=>3.0, "drinking_cost"=>3.0}, "IQ"=>{"accomodation_cost"=>89.15, "smoking_cost"=>2.3, "drinking_cost"=>2.3}, "IE"=>{"accomodation_cost"=>89.15, "smoking_cost"=>12.17, "drinking_cost"=>12.17}, "IM"=>{"accomodation_cost"=>44.22, "smoking_cost"=>14.05, "drinking_cost"=>14.05}, "IL"=>{"accomodation_cost"=>136.5, "smoking_cost"=>8.11, "drinking_cost"=>8.11}, "IT"=>{"accomodation_cost"=>89.38, "smoking_cost"=>6.41, "drinking_cost"=>6.41}, "JM"=>{"accomodation_cost"=>120.0, "smoking_cost"=>4.48, "drinking_cost"=>4.48}, "JP"=>{"accomodation_cost"=>168.09, "smoking_cost"=>4.14, "drinking_cost"=>4.14}, "JE"=>{"accomodation_cost"=>87.87, "smoking_cost"=>11.67, "drinking_cost"=>11.67}, "JO"=>{"accomodation_cost"=>72.61, "smoking_cost"=>2.54, "drinking_cost"=>2.54}, "KZ"=>{"accomodation_cost"=>102.39, "smoking_cost"=>1.27, "drinking_cost"=>1.27}, "KE"=>{"accomodation_cost"=>77.45, "smoking_cost"=>1.69, "drinking_cost"=>1.69}, "KI"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "KP"=>{"accomodation_cost"=>94.0, "smoking_cost"=>2.54, "drinking_cost"=>2.54}, "KR"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "KG"=>{"accomodation_cost"=>87.87, "smoking_cost"=>0.93, "drinking_cost"=>0.93}, "LA"=>{"accomodation_cost"=>137.55, "smoking_cost"=>2.0, "drinking_cost"=>2.0}, "LB"=>{"accomodation_cost"=>79.22, "smoking_cost"=>2.0, "drinking_cost"=>2.0}, "LS"=>{"accomodation_cost"=>109.98, "smoking_cost"=>2.88, "drinking_cost"=>2.88}, "LR"=>{"accomodation_cost"=>72.61, "smoking_cost"=>1.0, "drinking_cost"=>1.0}, "LY"=>{"accomodation_cost"=>333.63, "smoking_cost"=>3.3, "drinking_cost"=>3.3}, "LI"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "LT"=>{"accomodation_cost"=>53.32, "smoking_cost"=>3.63, "drinking_cost"=>3.63}, "LU"=>{"accomodation_cost"=>106.09, "smoking_cost"=>6.41, "drinking_cost"=>6.41}, "MO"=>{"accomodation_cost"=>54.59, "smoking_cost"=>3.75, "drinking_cost"=>3.75}, "MK"=>{"accomodation_cost"=>42.53, "smoking_cost"=>2.48, "drinking_cost"=>2.48}, "MW"=>{"accomodation_cost"=>175.08, "smoking_cost"=>2.0, "drinking_cost"=>2.0}, "MY"=>{"accomodation_cost"=>80.31, "smoking_cost"=>3.65, "drinking_cost"=>3.65}, "MV"=>{"accomodation_cost"=>70.6, "smoking_cost"=>2.44, "drinking_cost"=>2.44}, "ML"=>{"accomodation_cost"=>42.53, "smoking_cost"=>2.0, "drinking_cost"=>2.0}, "MT"=>{"accomodation_cost"=>70.6, "smoking_cost"=>5.77, "drinking_cost"=>5.77}, "MH"=>{"accomodation_cost"=>78.66, "smoking_cost"=>3.0, "drinking_cost"=>3.0}, "MQ"=>{"accomodation_cost"=>109.0, "smoking_cost"=>8.97, "drinking_cost"=>8.97}, "MR"=>{"accomodation_cost"=>67.87, "smoking_cost"=>1.89, "drinking_cost"=>1.89}, "MU"=>{"accomodation_cost"=>109.07, "smoking_cost"=>4.25, "drinking_cost"=>4.25}, "YT"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "MX"=>{"accomodation_cost"=>120.0, "smoking_cost"=>3.1, "drinking_cost"=>3.1}, "FM"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "MD"=>{"accomodation_cost"=>74.11, "smoking_cost"=>1.37, "drinking_cost"=>1.37}, "MN"=>{"accomodation_cost"=>79.16, "smoking_cost"=>1.81, "drinking_cost"=>1.81}, "ME"=>{"accomodation_cost"=>76.27, "smoking_cost"=>3.07, "drinking_cost"=>3.07}, "MS"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "MA"=>{"accomodation_cost"=>89.82, "smoking_cost"=>3.69, "drinking_cost"=>3.69}, "MZ"=>{"accomodation_cost"=>222.3, "smoking_cost"=>3.18, "drinking_cost"=>3.18}, "MM"=>{"accomodation_cost"=>271.04, "smoking_cost"=>1.9, "drinking_cost"=>1.9}, "NA"=>{"accomodation_cost"=>128.11, "smoking_cost"=>3.15, "drinking_cost"=>3.15}, "NR"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "NP"=>{"accomodation_cost"=>42.7, "smoking_cost"=>1.3, "drinking_cost"=>1.3}, "NL"=>{"accomodation_cost"=>105.62, "smoking_cost"=>7.69, "drinking_cost"=>7.69}, "NC"=>{"accomodation_cost"=>155.8, "smoking_cost"=>10.2, "drinking_cost"=>10.2}, "NZ"=>{"accomodation_cost"=>87.87, "smoking_cost"=>14.3, "drinking_cost"=>14.3}, "NI"=>{"accomodation_cost"=>85.0, "smoking_cost"=>1.1, "drinking_cost"=>1.1}, "NE"=>{"accomodation_cost"=>56.57, "smoking_cost"=>2.93, "drinking_cost"=>2.93}, "NG"=>{"accomodation_cost"=>183.25, "smoking_cost"=>1.35, "drinking_cost"=>1.35}, "NU"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "NF"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "MP"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "NO"=>{"accomodation_cost"=>175.08, "smoking_cost"=>14.35, "drinking_cost"=>14.35}, "OM"=>{"accomodation_cost"=>101.29, "smoking_cost"=>2.49, "drinking_cost"=>2.49}, "PK"=>{"accomodation_cost"=>193.78, "smoking_cost"=>1.07, "drinking_cost"=>1.07}, "PW"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "PS"=>{"accomodation_cost"=>122.71, "smoking_cost"=>6.76, "drinking_cost"=>6.76}, "PA"=>{"accomodation_cost"=>80.12, "smoking_cost"=>4.5, "drinking_cost"=>4.5}, "PG"=>{"accomodation_cost"=>55.21, "smoking_cost"=>7.07, "drinking_cost"=>7.07}, "PY"=>{"accomodation_cost"=>128.11, "smoking_cost"=>1.43, "drinking_cost"=>1.43}, "PE"=>{"accomodation_cost"=>83.0, "smoking_cost"=>2.45, "drinking_cost"=>2.45}, "PH"=>{"accomodation_cost"=>64.0, "smoking_cost"=>1.2, "drinking_cost"=>1.2}, "PN"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "PL"=>{"accomodation_cost"=>67.87, "smoking_cost"=>3.94, "drinking_cost"=>3.94}, "PT"=>{"accomodation_cost"=>73.59, "smoking_cost"=>5.51, "drinking_cost"=>5.51}, "PR"=>{"accomodation_cost"=>152.0, "smoking_cost"=>6.0, "drinking_cost"=>6.0}, "QA"=>{"accomodation_cost"=>116.72, "smoking_cost"=>2.47, "drinking_cost"=>2.47}, "RE"=>{"accomodation_cost"=>81.32, "smoking_cost"=>9.74, "drinking_cost"=>9.74}, "RO"=>{"accomodation_cost"=>83.5, "smoking_cost"=>4.06, "drinking_cost"=>4.06}, "RU"=>{"accomodation_cost"=>78.37, "smoking_cost"=>1.59, "drinking_cost"=>1.59}, "RW"=>{"accomodation_cost"=>108.0, "smoking_cost"=>1.5, "drinking_cost"=>1.5}, "BL"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "SH"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "KN"=>{"accomodation_cost"=>122.71, "smoking_cost"=>2.75, "drinking_cost"=>2.75}, "MF"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "PM"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "VC"=>{"accomodation_cost"=>109.98, "smoking_cost"=>2.22, "drinking_cost"=>2.22}, "SM"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "ST"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "SA"=>{"accomodation_cost"=>109.0, "smoking_cost"=>2.4, "drinking_cost"=>2.4}, "SN"=>{"accomodation_cost"=>55.21, "smoking_cost"=>1.37, "drinking_cost"=>1.37}, "RS"=>{"accomodation_cost"=>68.53, "smoking_cost"=>2.57, "drinking_cost"=>2.57}, "SC"=>{"accomodation_cost"=>205.63, "smoking_cost"=>3.65, "drinking_cost"=>3.65}, "SL"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "SG"=>{"accomodation_cost"=>64.72, "smoking_cost"=>9.43, "drinking_cost"=>9.43}, "SX"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "SK"=>{"accomodation_cost"=>115.8, "smoking_cost"=>4.36, "drinking_cost"=>4.36}, "SI"=>{"accomodation_cost"=>95.3, "smoking_cost"=>4.74, "drinking_cost"=>4.74}, "SB"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "SO"=>{"accomodation_cost"=>115.8, "smoking_cost"=>2.1, "drinking_cost"=>2.1}, "ZA"=>{"accomodation_cost"=>74.85, "smoking_cost"=>2.99, "drinking_cost"=>2.99}, "GS"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "ES"=>{"accomodation_cost"=>78.14, "smoking_cost"=>6.02, "drinking_cost"=>6.02}, "LK"=>{"accomodation_cost"=>72.97, "smoking_cost"=>4.59, "drinking_cost"=>4.59}, "SD"=>{"accomodation_cost"=>137.55, "smoking_cost"=>2.0, "drinking_cost"=>2.0}, "SR"=>{"accomodation_cost"=>61.06, "smoking_cost"=>3.66, "drinking_cost"=>3.66}, "SJ"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "SZ"=>{"accomodation_cost"=>78.91, "smoking_cost"=>3.24, "drinking_cost"=>3.24}, "SE"=>{"accomodation_cost"=>119.77, "smoking_cost"=>7.55, "drinking_cost"=>7.55}, "CH"=>{"accomodation_cost"=>153.42, "smoking_cost"=>8.49, "drinking_cost"=>8.49}, "SY"=>{"accomodation_cost"=>106.09, "smoking_cost"=>2.5, "drinking_cost"=>2.5}, "TW"=>{"accomodation_cost"=>44.22, "smoking_cost"=>2.8, "drinking_cost"=>2.8}, "TJ"=>{"accomodation_cost"=>94.0, "smoking_cost"=>1.4, "drinking_cost"=>1.4}, "TZ"=>{"accomodation_cost"=>88.93, "smoking_cost"=>2.39, "drinking_cost"=>2.39}, "TH"=>{"accomodation_cost"=>39.67, "smoking_cost"=>2.77, "drinking_cost"=>2.77}, "TL"=>{"accomodation_cost"=>70.09, "smoking_cost"=>1.5, "drinking_cost"=>1.5}, "TG"=>{"accomodation_cost"=>76.27, "smoking_cost"=>1.54, "drinking_cost"=>1.54}, "TK"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "TO"=>{"accomodation_cost"=>88.86, "smoking_cost"=>5.14, "drinking_cost"=>5.14}, "TT"=>{"accomodation_cost"=>149.47, "smoking_cost"=>3.94, "drinking_cost"=>3.94}, "TN"=>{"accomodation_cost"=>70.09, "smoking_cost"=>2.82, "drinking_cost"=>2.82}, "TR"=>{"accomodation_cost"=>65.2, "smoking_cost"=>3.98, "drinking_cost"=>3.98}, "TM"=>{"accomodation_cost"=>97.22, "smoking_cost"=>5.2, "drinking_cost"=>5.2}, "TC"=>{"accomodation_cost"=>65.89, "smoking_cost"=>6.12, "drinking_cost"=>6.12}, "TV"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "UG"=>{"accomodation_cost"=>86.68, "smoking_cost"=>1.87, "drinking_cost"=>1.87}, "UA"=>{"accomodation_cost"=>104.49, "smoking_cost"=>1.59, "drinking_cost"=>1.59}, "AE"=>{"accomodation_cost"=>88.35, "smoking_cost"=>2.45, "drinking_cost"=>2.45}, "GB"=>{"accomodation_cost"=>162.83, "smoking_cost"=>12.86, "drinking_cost"=>12.86}, "US"=>{"accomodation_cost"=>89.0, "smoking_cost"=>6.0, "drinking_cost"=>6.0}, "UM"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "UZ"=>{"accomodation_cost"=>80.0, "smoking_cost"=>1.9, "drinking_cost"=>1.9}, "VU"=>{"accomodation_cost"=>83.0, "smoking_cost"=>8.71, "drinking_cost"=>8.71}, "VE"=>{"accomodation_cost"=>115.94, "smoking_cost"=>6.51, "drinking_cost"=>6.51}, "VN"=>{"accomodation_cost"=>35.52, "smoking_cost"=>1.06, "drinking_cost"=>1.06}, "VG"=>{"accomodation_cost"=>35.52, "smoking_cost"=>nil, "drinking_cost"=>nil}, "VI"=>{"accomodation_cost"=>44.22, "smoking_cost"=>4.0, "drinking_cost"=>4.0}, "WF"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "EH"=>{"accomodation_cost"=>nil, "smoking_cost"=>nil, "drinking_cost"=>nil}, "YE"=>{"accomodation_cost"=>87.87, "smoking_cost"=>2.5, "drinking_cost"=>2.5}, "ZM"=>{"accomodation_cost"=>55.21, "smoking_cost"=>1.69, "drinking_cost"=>1.69}, "ZW"=>{"accomodation_cost"=>138.45, "smoking_cost"=>2.0, "drinking_cost"=>2.0}}';
	sample_response_string = sample_response_string.replace(/=>/g, ':');
	sample_response_string = sample_response_string.replace(/nil/g, "null");

var sample_response = JSON.parse(sample_response_string);

var country_codes2 = ["AF", "AO", "SM", "AL", "AE", "AR", "AM",
	"AQ", "TF", "AU", "AT", "AZ", "BI", "BE", "BJ", "BF", "BD", "BG", "BS",
	"BA", "BY", "BZ", "BO", "BR", "BN", "BT", "BW", "CF", "CA", "CH", "CL",
	"CN", "CI", "CM", "CD", "CG", "CO", "CR", "CU", "CY", "CZ", "DE", "DJ",
	"DK", "DO", "DZ", "EC", "EG", "ER", "ES", "EE", "ET", "FI", "FJ", "FK",
	"FR", "GF", "GA", "GB", "GE", "GH", "GN", "GM", "GW", "GQ", "GR", "GL",
	"GT", "GY", "HN", "HR", "HT", "HU", "ID", "IN", "IE", "IR", "IQ", "IS",
	"IL", "IT", "JM", "JO", "JP", "KZ", "KE", "KG", "KH", "KR", "KW", "LA",
	"LB", "LR", "LY", "LK", "LS", "LT", "LU", "LV", "MA", "MD", "MG", "MX",
	"MK", "ML", "MM", "ME", "MN", "MZ", "MR", "MW", "MY", "NA", "NC", "NE",
	"NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PK", "PA", "PE", "PH", "PG",
	"PL", "PR", "KP", "PT", "PY", "QA", "RO", "RU", "RW", "EH", "SA", "SD",
	"SS", "SN", "SB", "SL", "SV", "SO", "RS", "SR", "SK", "SI", "SE", "SZ",
	"SY", "TD", "TG", "TH", "TJ", "TM", "TP", "TT", "TN", "TR", "TW", "TZ", 
	"UG", "UA", "UY", "US", "UZ", "VE", "VN", "VU", "WE", "YE", "ZA", "ZM",
	"ZW"];

var country_codes = [ "AFG","AGO", "SML",
	"ALB","ARE","ARG","ARM","ATA","ATF","AUS","AUT",
	"AZE","BDI","BEL","BEN","BFA","BGD","BGR","BHS",
	"BIH","BLR","BLZ","BOL","BRA","BRN","BTN","BWA",
	"CAF","CAN","CHE","CHL","CHN","CIV","CMR","COD",
	"COG","COL","CRI","CUB","CYP","CZE","DEU","DJI",
	"DNK","DOM","DZA","ECU","EGY","ERI","ESP","EST",
	"ETH","FIN","FJI","FLK","FRA","GUF","GAB","GBR",
	"GEO","GHA","GIN","GMB","GNB","GNQ","GRC","GRL",
	"GTM","GUY","HND","HRV","HTI","HUN","IDN","IND",
	"IRL","IRN","IRQ","ISL","ISR","ITA","JAM","JOR",
	"JPN","KAZ","KEN","KGZ","KHM","KOR","KWT","LAO",
	"LBN","LBR","LBY","LKA","LSO","LTU","LUX","LVA",
	"MAR","MDA","MDG","MEX","MKD","MLI","MMR","MNE",
	"MNG","MOZ","MRT","MWI","MYS","NAM","NCL","NER",
	"NGA","NIC","NLD","NOR","NPL","NZL","OMN","PAK",
	"PAN","PER","PHL","PNG","POL","PRI","PRK","PRT",
	"PRY","QAT","ROU","RUS","RWA","ESH","SAU","SDN",
	"SSD","SEN","SLB","SLE","SLV","SOM","SRB","SUR",
	"SVK","SVN","SWE","SWZ","SYR","TCD","TGO","THA",
	"TJK","TKM","TLS","TTO","TUN","TUR","TWN","TZA",
	"UGA","UKR","URY","USA","UZB","VEN","VNM","VUT",
	"PSE","YEM","ZAF","ZMB","ZWE"];

var country_codes2to3 = {};
for (var i = 0; i < country_codes.length; i++) {
	country_codes2to3[country_codes2[i]] = country_codes[i];
};

var country_codes3to2 = {};
for (var i = 0; i < country_codes.length; i++) {
	country_codes3to2[country_codes[i]] = country_codes2[i];
};

var tooltip;

function shadeColor1(color, percent) {  
	var num = parseInt(color.slice(1),16),
	amt = Math.round(2.55 * percent),
	R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt,
	B = (num & 0x0000FF) + amt;
	return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
};

function makeColorful (map) {
	for (datapoint in map.options.fills) {
		var country_color = {};
		country_color[datapoint] = map.options["fills"][datapoint];
		map.updateChoropleth(country_color);
	};
};


function makeDefaultFills(){
	var fills = {};
	for (country in country_codes2to3){
		fills[country_codes2to3[country]] = "#c63ff0";
	}
	fills["defaultFill"] = "#c63ff0";
	return fills;
}

function makeFills(data, country){
	var fills = {}
	var max = 0;
	for (country in data){
		if (country_codes2to3[country]){
		// console.log(data[country]["estimated_costs"]["total"]);
		if (data[country]["estimated_costs"]["total"] > max){
			
			max = data[country]["estimated_costs"]["total"];
					
		};}
	};
	// console.log("max" + max);
	// console.log(data);
	for (datapoint in data){
		if (country_codes2to3[datapoint]){
			var color = "#FFD300";
			i = (data[datapoint]["estimated_costs"]["total"]/max) * 100;
			// console.log(datapoint+" "+data[datapoint]["estimated_costs"]["total"]);
			console.log(i);
			if (i === null){ color = "#666666";	}
			else if (i >= 0 && i <= 20){ color = color_range[0]; }
			else if (i > 20 && i <= 40){ color = color_range[1]; }
			else if (i > 40 && i <= 60){ color = color_range[2]; }
			else if (i > 60 && i <= 80){ color = color_range[3]; }
			else if (i > 80){ color = color_range[4]; }
			else{  	color = "#666666"	};
			fills[country_codes2to3[datapoint]] = color;
		};
	};

	fills["defaultFill"] = "#FFFFFF";
	map.options["fills"] = fills;
}

$(document).ready(function(){
	fills = makeDefaultFills();	

	map = new Datamap({element: document.getElementById("map-container"),
		
		projection: 'equirectangular', 
		fills: fills,
		popupOnHover: false,
		geographyConfig : {highlightOnHover: true,
			highlightFillColor: '#FF0095',
			highlightBorderColor: '#E645A3',
			highlightBorderWidth: 1}});

	svg = d3.select('.datamap');
	g = d3.select('.datamaps-subunits');
	hoverover = d3.select('.datamaps-hoverover');

	g.attr('transform', 'translate(0,0)scale(1,1)');
	height = $('.datamap')[0].getBBox().height;
	width = $('.datamap')[0].getBBox().width;

	console.log($("#chart").html());

	tooltip = d3.select("body")
	.append("div")
	.attr("id", "tooltip")
	.style("position", "absolute")
	.style("z-index", "10")
	.style("visibility", "hidden")
	.style("width", "auto")
	.style("background-color","#FFFFFF")
	.style("font-family", "komika_text_kapsregular")
	// .style("padding","5px");
	
	paths = g.selectAll("path");
	paths.on("mouseover", function(d){return mouseover(d)})
		 .on("mousemove", function(d){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px").attr("value", d.properties.name);})
		 .on("mouseout", function(d){return mouseout(d)})
		 .on("click", function(d){$('#country_select')[0].selectize.setValue(country_codes3to2[d.id]);});
		 // $('#country_select')[0].selectize.setValue("US")
	makeColorful(map);

	zoomListener(svg);
  $("#loading").hide();

});

// function clicked(d) {
//   var x, y, k;

//  var path = d3.geo.path()
//   			.projection(d3.geo.equirectangular());

  
//   if (d && centered !== d) {
//     var centroid = path.centroid(d);
//     x = centroid[0];
//     y = centroid[1];
//     k = 4;
//     centered = d;
//   } else {
//     x = width / 2;
//     y = height / 2;
//     k = 1;
//     centered = null;
//   }

//   g.selectAll("path")
//       .classed("active", centered && function(d) { return d === centered; });

//   g.transition()
//       .duration(750)
//       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
//       .style("stroke-width", 1.5 / k + "px");

// };

var zoomListener = d3.behavior.zoom()
  .scaleExtent([0.1, 3])
  .on("zoom", zoomHandler);

function zoomHandler() {
  g.transition()
  		.duration(10)
  		.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}

function mouseover(d) {
	var color = "#00FFF5";
	var country_color = {};
	country_color[d.id] = color;
		if(!map.options["fills"][d.id+"old"]){
		map.options["fills"][d.id+"old"] = map.options["fills"][d.id];};
	map.updateChoropleth(country_color);
	tooltip.style("visibility", "visible");
	country_code = country_codes3to2[d.id]
	console.log(country_code);
  if (!_.isEmpty(gathered_country_data)){
    showInfo(country_code);
  }
	generateBreakdownChart(country_code);
}

function mouseout(d) {
	var country_color = {};
	if (d.id == last_searched) {
		country_color[d.id] = "#00FFF5";
	}else {
		country_color[d.id] = map.options["fills"][d.id+"old"];
	}
	map.updateChoropleth(country_color);
	tooltip.style("visibility", "hidden");
}






		







