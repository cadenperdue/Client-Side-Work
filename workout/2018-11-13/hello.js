$(document).ready(function(){
    
    var body = $("body");
    body.append("<div id=cont> <p id=words>Look Mom, No Hands!</p> </div>");
    
    var cont = $("#cont");
    cont.css({
        "color" : "white",
        //"font-size": "32",
        "background-color" : "#0099FF",
        "padding-bottom" : "50px",
        "margin-bottom" : "15px",
        "border-width" : "10px",
        "border-style" : "solid",
        "border-color" : "rgb(0, 51, 102)"
        
    });

   var words = $("#words");
    words.css({
        "font-size": "65px"
    });
    
    
});
