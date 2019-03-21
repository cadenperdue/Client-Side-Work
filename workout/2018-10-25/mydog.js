function init(){
    myDog = new Dog("Harry", "Lab", 2018, 10, 28);
    var nm = document.getElementById('name');
    nm.textContent = myDog.name;
    var brd = document.getElementById('breed');
    brd.textContent = myDog.breed;
    var bd = document.getElementById('birthday'); 
    bd.textContent = myDog.birthDate;
    var tricks = myDog.sit() + " " + myDog.fetch() + " " + myDog.shake() + " " + myDog.down();
    var trk = document.getElementById('tricks'); 
    trk.textContent= tricks; 
}
init();


