var allContents;

function getUserData(user) {
	db.collection("users").doc(user).get().then(function (querySnapshot) {
		allContents = querySnapshot;
		$('#userNameElement').text(querySnapshot.firstName + " " + querySnapshot.lastName)
	})
}

function writeIDtoLocal() {
	sessionStorage.setItem('id', $('#ccn').val())
}
function getIDfromLocal() {
	return sessionStorage.getItem('id')
}

var id = getIDfromLocal
console.log(sessionStorage.getItem('id'))
getUserData(9999999999)