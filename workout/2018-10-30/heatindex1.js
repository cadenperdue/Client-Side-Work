
function calcHeatIndex(temp, humidity){
      
     
    var c1 = -42.379;
    var c2 = 2.04901523;
    var c3 = 10.14333127;
    var c4 = -0.22475541;
    var c5 = -6.83783 * Math.pow(10, -3);
    var c6 = -5.481717 * Math.pow(10, -2);
    var c7 = 1.22874 * Math.pow(10, -3);
    var c8 = 8.5282 * Math.pow(10, -4);
    var c9 = -1.99 * Math.pow(10, -6);
    var index = c1 + c2 * temp + c3 * humidity + c4 * temp * humidity + c5 * Math.pow(temp, 2) + 
                c6 * Math.pow(humidity, 2) + c7 * Math.pow(temp, 2) * humidity +
                c8 * temp * Math.pow(humidity, 2) + c9 * Math.pow(temp, 2) * Math.pow(humidity, 2)
    return index;
    
}

/*function heatIndex(temperature, relativeHumidity)
{
    if (temperature < 80)
    {
        //console.log(temperature + " is lower than 80. Heat index not calculated.");
        return temperature;
    }
    if (relativeHumidity < 40)
    {
        //console.log(relativeHumidity + " is lower than 40. Heat index not calculated.");
        return temperature;
    }
    var t = temperature;
    var r = relativeHumidity;
    var t2 = Math.pow(t, 2);
    var rh2 = Math.pow(r, 2);
    var index = -42.379 + 2.04901523 * t + 10.14333127 * r - 0.22475541 * t * r
    - 6.83783e-03 * t2 - 5.481717e-02 * rh2 + 1.22874e-03 * t2 * r +
    8.5282e-04 * t * rh2 - 1.99e-06 * t2 * rh2;
    return index;
} */  
var heat = document.getElementById('heat');
heat.textContent = calcHeatIndex(96, 50);

