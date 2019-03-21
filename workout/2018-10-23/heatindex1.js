    var temp = 96;
    var humidity = 50;
    var c1 = -42.379;
    var c2 = 2.04901523;
    var c3 = 10.14333127;
    var c4 = -0.22475541;
    var c5 = -6.83783 * Math.pow(10, -3);
    var c6 = -5.481717 * Math.pow(10, -2);
    var c7 = 1.22874 * Math.pow(10, -3);
    var c8 = 8.5282 * Math.pow(10, -4);
    var c9 = -1.99 * Math.pow(10, -6);
    var heatIndex = c1 + c2 * temp + c3 * humidity + c4 * temp * humidity + c5 * Math.pow(temp, 2) + 
                c6 * Math.pow(humidity, 2) + c7 * Math.pow(temp, 2) * humidity +
                c8 * temp * Math.pow(humidity, 2) + c9 * Math.pow(temp, 2) * Math.pow(humidity, 2)  
var heat = document.getElementById('heat');
heat.textContent = heatIndex;
