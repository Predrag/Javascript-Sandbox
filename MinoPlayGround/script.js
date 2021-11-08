let myName = {firstname:'Martin',lastname:'Bugar',nickname:'Mino'};
let My = {name:myName, age:44, predstavSa: function(){ return 'My name is "'+this.name.firstname+' '+ this.name.lastname+'" and my nickname is: "' + this.name.nickname + '"' + '\n' + "I'm " + My.age + ' years old' ;}};
// console.log(myName.lastname);
// console.log(My.name.firstname + ' '+ My.name.lastname + ' ' + My.age);

let pole1 = document.getElementById('myID');
let pole2 = document.getElementById('PrintOut2');
let pole3 = document.getElementById('PrintOut3');

pole1.innerText = My.predstavSa();

let myJSONstring = JSON.stringify(My);
pole2.innerText = myJSONstring + " type of: " + typeof(myJSONstring);
console.log(myJSONstring);

let myJSONobject = JSON.parse(myJSONstring);
pole3.innerText = myJSONobject.name.firstname;
console.log(myJSONobject);




function* daysGenerator(){
    var daysList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    for (var i = 0; i < daysList.length; i++) {
        yield daysList[i];
    }
}
var daysGen = daysGenerator();
console.log(daysGen.next());
console.log(daysGen.next());
console.log(daysGen.next());
console.log(daysGen.next());
console.log(daysGen.next());
console.log(daysGen.next());


