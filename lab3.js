// Create a addbutton variable node retrieved from HTML button element.
var addbutton = document.getElementById("button1");
// Create a userInput variable node retrieved from HTML input element.
var userInput = document.getElementById("inputToDoItem");
// Create a user variable node retrieved from HTML ul element.
var user = document.getElementById("userList");

// Create a textAreaAddButton variable node retrieved from HTML button element.
var textAreaAddButton = document.getElementById("button3");
// Create a textAreaClearButton variable node retrieved from HTML button element.
var textAreaClearButton = document.getElementById("button4");

//Function (buttonFunction1) specifies to run when a user clicks onto an addbutton then an event will occur.
addbutton.addEventListener("click", buttonFunction1);
//Function (buttonFunction2) specifies to run when a user clicks onto an clearbutton then an event will occur.
clearbutton.addEventListener("click", buttonFunction2);

function buttonFunction1() {   
    // Create a placeholder variable node to store userInput value.
    var placeholder = userInput.value;
    // Create if/else statement argument for placeholder variable to include no white spaces, as user input.
    if (placeholder.trim()) {     
        // Create a node variable in order to create user interactive ul element list entries.
        var node = document.createElement("li");
        // Create textnode variable node for user input contents.
        var textnode = document.createTextNode(placeholder);        
        // Add create ul li element to the input element textbox or line box.
        node.appendChild(textnode);
        // Clear user input value from the textbox or line box. 
        userInput.value = (" ");
        // Create an addButton1 variable in order to create user interactive button element added to the ul list entries.   
        var addButton1 = document.createElement("BUTTON");
        // Add text value to the create button.
        addButton1.innerHTML = "Delete Item";
        // Add class element name to the button.
        addButton1.className = "remove";
        /* Function (removeItem) specifies to run when a user clicks onto an addbutton1 then an event
          will occurs. */
        addButton1.addEventListener("click", removeItem);
         // Add create ul li element beside the button element.
        node.appendChild(addButton1);
        // Add user input element into the created ul li element.
        user.appendChild(node); 
         
    }        

    else {
        // Create an alert if user has not entered any input texts.
        alert("You have not entered a 'Do-To' item! Please try again.");
    }    
}

// Clear entire user list.
clearButton.addEventListener("click", buttonFunction2);
function buttonFunction2 () {
    user.innerHTML = " ";   
}

// Add user to do list name.
textAreaAddButton.addEventListener("click", buttonFunction3);
function buttonFunction3 () {
    var x = document.getElementById("message1").value;
    document.getElementById("p2").innerHTML = x;     
}

// Clear user to do list name.
textAreaClearButton.addEventListener("click", buttonFunction4);
function buttonFunction4 () {
    p2.innerHTML = " ";   
}

// Remove user individual to do list item from the ul li element.
function removeItem(e){
    // And, get the parent list item to remove
    var taskItem = e.target.parentElement;
    user.removeChild(taskItem); 
  }

  