function Dog(name, breed, year, month, day){
    this.name = name;
    this.breed = breed;
    this.birthDate = new Date (year, month - 1, day);
    this.setBirthday = function (year, month, day){
            this.birthDate.setFullYear(year);
            this.birthDate.setMonth(month - 1);
            this.birthDate.setDay(day);
    };
    this.sit = function(){
        return this.name + " is sitting";
    }
    this.fetch = function(){
        return this.name + " is function";
    }
    this.shake = function(){
        return this.name + " is shaking";
    }
    this.down = function(){
        return this.name + " is lying down";
    }
}
