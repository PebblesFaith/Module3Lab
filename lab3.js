var userInput = document.getElementById("inputToDoItem");
var user = document.getElementById("userList");
var listitems = user.children;
var itemMove = user.children;


user.addEventListener("click", buttonFunction1);
user.addEventListener("click", buttonFunction2);
function buttonFunction1() {  
    var node = document.createElement("li");
    var textnode = document.createTextNode(userInput.value);
    node.appendChild(textnode);
    user.appendChild(node);

    
    document.getElementById("inputToDoItem").value = " ";
    userInput.insertBefore(user, listitems[0]);
}

function buttonFunction2() {
    user.remove(itemMove);

    
   
  }

