$(document).ready(function() {


// // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB21R7l7blRMz5HhxlT69XEkgcvNRHfvmI",
    authDomain: "week-7-project-2254a.firebaseapp.com",
    databaseURL: "https://week-7-project-2254a.firebaseio.com",
    storageBucket: "week-7-project-2254a.appspot.com",
  };
  firebase.initializeApp(config);

var database = firebase.database();


// Initial Values
var trainName;
var destination;
var firstTrain;
var frequency = 0;


// Capture Button Click
$('#addTrain').on('click', function() {

	// alert("train added");

	trainName = $('#trainInput').val().trim();
	destination = $('#destinationInput').val().trim();
	firstTrain = $('#trainTimeInput').val().trim();
	frequency = $('#frequencyInput').val().trim();

	console.log(trainName);
	console.log(destination);
	console.log(firstTrain);
	console.log(frequency);


	// Code for the push
	database.ref().push({
		name: trainName,
		destination: destination,
		first_train: firstTrain,
		frequency: frequency,
	})
	$('input').val('');
	return false;
});

//Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
// dataRef.ref().on("child_added", function(childSnapshot) {
// 	// Log everything that's coming out of snapshot
// 	console.log(childSnapshot.val().name);
// 	console.log(childSnapshot.val().name);
// 	console.log(childSnapshot.val().email);
// 	console.log(childSnapshot.val().age);
// 	console.log(childSnapshot.val().comment);
// 	console.log(childSnapshot.val().joinDate)

// 	// full list of items to the well

// 		// $('#full-member-list').append("<div class='well'><span id='name'> "+childSnapshot.val().name+" </span><span id='email'> "+childSnapshot.val().email+" </span><span id='age'> "+childSnapshot.val().age+" </span><span id='comment'> "+childSnapshot.val().comment+" </span></div>")


// // Handle the errors
// }, function(errorObject){
// 	//console.log("Errors handled: " + errorObject.code)
// });

// dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){
// 	// Change the HTML to reflect
// 	$("#namedisplay").html(snapshot.val().name);
// 	$("#emaildisplay").html(snapshot.val().email);
// 	$("#agedisplay").html(snapshot.val().age);
// 	$("#commentdisplay").html(snapshot.val().comment);
// })

});