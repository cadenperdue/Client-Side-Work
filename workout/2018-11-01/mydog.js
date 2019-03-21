
function init(){
    var dogName; 
    dogName = document.getElementById("dogName").value;
    var dogBreed;
    dogBreed = document.getElementById("dogBreed").value;
    var dogYear; 
    dogYear = document.getElementById("dogYear").value;
    var dogMonth;
    dogMonth = document.getElementById("dogMonth").value;
    var dogDay;
    dogDay = document.getElementById("dogDay").value;
    
    
    myDog = new Dog(dogName, dogBreed, dogYear, dogMonth, dogDay);
    
    var nm = document.getElementById('name');
    nm.textContent = myDog.name;
    var brd = document.getElementById('breed');
    brd.textContent = myDog.breed;
    var bd = document.getElementById('birthday'); 
    bd.textContent = myDog.birthDate;
    
    var theTrick; 
    theTrick = document.getElementById('trk').value;
    var dogTrick;
    
    if(theTrick == "sit")
        dogTrick = myDog.sit();
    else if (theTrick == "fetch")
        dogTrick = myDog.fetch();
    else if (theTrick == "shake")
        dogTrick = myDog.shake();
    else
        dogTrick = myDog.down();

    
    var trk = document.getElementById('tricks'); 
    trk.textContent= dogTrick; 


}
var el = document.getElementById("dogButton");
if (el.addEventListener)
    el.addEventListener("click", init, false);

var slct = document.getElementById("trk");
if(slct.addEventListener)
    slct.addEventListener("change", init, false);            
//else if(el.attachEvent)
    //el.attachEvent('onclick', init);
