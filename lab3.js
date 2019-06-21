var addbutton = document.getElementById("button1");
var userInput = document.getElementById("inputToDoItem");
var user = document.getElementById("userList");

var textAreaAddButton = document.getElementById("button3");
var textAreaClearButton = document.getElementById("button4");

addbutton.addEventListener("click", buttonFunction1);
clearbutton.addEventListener("click", buttonFunction2);






function buttonFunction1() { 
  
    
    var placeholder = userInput.value;
    if (placeholder.trim()) {
     
        var node = document.createElement("li");
        var textnode = document.createTextNode(placeholder);        
        
        node.appendChild(textnode);

        userInput.value = (" ");
           
        var addButton1 = document.createElement("BUTTON");
        addButton1.innerHTML = "Delete Item";
        addButton1.className = "remove";
        addButton1.addEventListener("click", removeItem);
        node.appendChild(addButton1);
        user.appendChild(node);    
        
       
         
    }        

    else {
        alert("You have not enter a 'Do-To' item! Please try again.");
    }

   
    
}

// clear entire list
clearButton.addEventListener("click", buttonFunction2);
function buttonFunction2 () {
    user.innerHTML = " ";
   
}


textAreaAddButton.addEventListener("click", buttonFunction3);
function buttonFunction3 () {
    var x = document.getElementById("message1").value;
    document.getElementById("p2").innerHTML = x;   
  
}

textAreaClearButton.addEventListener("click", buttonFunction4);
function buttonFunction4 () {
    p2.innerHTML = " ";
    
   
}

// remove a task from the list
function removeItem(e){
    // get the parent list item to remove
    var taskItem = e.target.parentElement;
    user.removeChild(taskItem); 
  }

  