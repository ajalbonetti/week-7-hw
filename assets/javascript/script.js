$(document).ready(function() {


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB21R7l7blRMz5HhxlT69XEkgcvNRHfvmI",
    authDomain: "week-7-project-2254a.firebaseapp.com",
    databaseURL: "https://week-7-project-2254a.firebaseio.com",
    storageBucket: "week-7-project-2254a.appspot.com",
  };
  firebase.initializeApp(config);

var database = firebase.database();


// Declare Initial Values
var trainName;
var destination;
var firstTrain;
var frequency = 0;


// Capture Button Click
$('#addTrain').on('click', function() {


// Collect Input Values from Form
	trainName = $('#trainInput').val().trim();
	destination = $('#destinationInput').val().trim();
	firstTrain = $('#trainTimeInput').val().trim();
	frequency = $('#frequencyInput').val().trim();



// Push the Input Values to Firebase
	database.ref().push({
		name: trainName,
		dest: destination,
		first_train: firstTrain,
		freq: frequency,
	})

// Clear the Form after Submit	
	$('input').val('');

// Stop Page from Refreshing	
	return false;
});


database.ref().on("child_added", function(childSnapshot, prevChildKey){
	trainName = childSnapshot.val().name;
	destination = childSnapshot.val().dest;
	firstTrain = childSnapshot.val().first_train;
	frequency = childSnapshot.val().freq;

// Declares the Current Time
var currentTime = moment();

// Converts First Train Time to Proper Format
var firstTrainConverted = moment(firstTrain, "hh:mm").subtract(1, "days");

// Calculates Difference in Minutes Between Current Time and First Train Time
var timeDifference = currentTime.diff(moment(firstTrainConverted), "minutes");

// Calculates Difference between frequency and Time Difference 
var remainder = timeDifference % frequency;

// Calculates how Many Minutes Until Next Train
var minsAway = frequency - remainder;

// Calculates Next Train Time based on Current Time
var nextTrain = currentTime.add(minsAway, "minutes");

// Formats Next Train Time into Proper Format
nextTrain = moment(nextTrain).format("hh:mm");

// Appends Train Information to Table
$('#trainList').append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().dest + "</td><td>" + childSnapshot.val().freq + "</td><td>" + nextTrain + "</td><td>" + minsAway + "</td>");

});


});