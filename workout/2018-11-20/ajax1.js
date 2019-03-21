function getWeatherData(){
    var dataLoc = "http://student2.cs.appstate.edu/crr/3440/OtherExamples/BooneCurrentConditionsJSON.php";
    
    $.getJSON(dataLoc).done(function(data){
            $("#weatherWindspeed").text(data.wind_speed);
            $("#weatherRain").text(data.rain_today);
            $("#weatherHumidity").text(data.humidity);
            $("#weatherLow").text(data.lo_temp);
            $("#weatherHigh").text(data.hi_temp);
            $("#weatherTemperature").text(data.temperature);
            $("#weatherDate").text(data.time);
    });
}

$(document).ready(function(){
   
    getWeatherData();
    $("button").click(function(){
        getWeatherData();
    });
});     
                    
      
      
       
