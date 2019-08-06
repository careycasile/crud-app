// Array that wholes all of the people entered into the directory
let directoryArr = [];

// Color array and counter will cycle through different colors for the profile pictures
let colorArr = ["#726D62", "#C0BAAF", "#D7D1C5", "#A69A8F"];
let colorCounter = 0;

// Function that loops through the directoryArr and appends all elements to the directory
function appendDir() {
	// Deletes all items in the current directory
	$(".directory").empty();

	// Loops through the items and appends to the directory
	for (let x = 0; x < directoryArr.length; x++) {
        let tempPerson = directoryArr[x];
		$(".directory").append('<div id="shell' + x + '"></div>');
		$('#shell' + x).append('<div class="person"><i class="fas fa-user fa-5x" style="color:' + colorArr[colorCounter%4] + '"></i><p>Name: ' + tempPerson.first + ' ' + tempPerson.last + ' </p><p>Phone: ' + tempPerson.phone + '</p><p>Email: ' + tempPerson.email + '</p>        <button class="delete-button btn-danger" id="' + x + '">Delete</button></div>');
	   colorCounter++;
    }

    colorCounter = 0;
}
  
// When the submit button is clicked
$("#submission").click( e =>{
	// Prevents the page from reloading
    e.preventDefault();

    // Captures information in the forms
    let firstVar = $("#firstname").val();
    let lastVar = $("#lastname").val();
    let phoneVar = $("#phone").val();
    let emailVar = $("#email").val();
    
    // Object that stores all the inputs
    let obj = {
    	first: firstVar,
    	last: lastVar,
    	phone: phoneVar,
    	email: emailVar
    }

    // Push each person obj into the directoryArr
    directoryArr.push(obj);

    // Clears the fields
    $("#firstname").val("");
    $("#lastname").val("");
    $("#phone").val("");
    $("#email").val("");

    // Update the directory
    appendDir();
});

// When the delete button is clicked
$(".directory").on("click", ".delete-button", function(e) {
    let toBeDeleted = e.toElement.id;
    directoryArr.splice(toBeDeleted, 1);
    appendDir();
})



