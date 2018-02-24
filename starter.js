

var tables = [];
var waitList = [];
var uniqueId = 0

function User(name, phone, email, id) {

	this.name = name,
	this.phone = phone,
	this.email = email,
	this.id = id
	this.tableCheck = function(){
		if (tables.length < 5) {
			tables.push(this);
			// uniqueId ++;
		} else {
			waitList.push(this)
			
		}	
	}
	uniqueId ++;
};


john = new User("John", 847577900, "dsfds@gmail.com", uniqueId);
andrew = new User("Andy", 847577900, "dsfds@gmail.com", uniqueId);
// console.log(john);
// console.log(tables);
andrew.tableCheck();
john.tableCheck();

console.log(tables);