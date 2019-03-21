
function weatherData(){
    
    
    $.ajax(
    {
        type: "GET",
        url: "http://student2.cs.appstate.edu/crr/3440/OtherExamples/BooneCurrentConditionsJSON.php", 
        timeout: 5000,
        success: function(data){
            $("#weatherWindspeed").text(data.wind_speed);
            $("#weatherRain").text(data.rain_today);
            $("#weatherHumidity").text(data.humidity);
            $("#weatherLow").text(data.lo_temp);
            $("#weatherHigh").text(data.hi_temp);
            $("#weatherTemperature").text(data.temperature);
            $("#weatherDate").text(data.time);
    }});
}

$(document).ready(function(){
    //$("#weatherWindspeed").text("Is my problem here");
    weatherData();

    $("button").click(function(){
        weatherData();
    });
});
