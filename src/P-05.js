function sortFruits(fruits) {
	return fruits.sort();
} 

function getElementInTheMiddle(list) {
	return list[list.length / 2];
}

function adminLogin(user) {
	if(user == "ADMIN") return true;
	if(user == "DEV") return true;
	return false;
}
 /*convertido en funciones arrow*/
 
let sortFruits = fruits => fruits.sort();

let getElementInTheMiddle = list => list[Math.floor(list.length / 2)];

let adminLogin = user => (user == "ADMIN" || user == "DEV") ? true : false;
