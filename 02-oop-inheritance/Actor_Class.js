function Actor(name,lastName) {
    var name = name;
    var lastName = lastName;

    this.getName= function() {return name;}
    this.getLastName= function() {return lastName;}
}