

window.addEventListener('load', () => {
  if (document.body.id === 'home') {
    alert("Welcome to our website!");
  }

  
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});




function checkStock(productId) {
  
  const stock = {
    'P1': true,
    'P2': false,
    'P3': true
  };

  if (stock[productId]) {
    alert("Product " + productId + " is in stock!");
  } else {
    alert("Product " + productId + " is out of stock!");
  }
}
window.checkStock = checkStock; 



function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true; 
}

window.validateForm = validateForm;
function sendMessage() {
  
  let input = document.getElementById("user-input").value;
  if (input === "") return; 

  
  let chatLog = document.getElementById("chat-log");
  chatLog.innerHTML += "<p><strong>You:</strong> " + input + "</p>";

  
  let reply = getBotResponse(input);

  
  chatLog.innerHTML += "<p><strong>Bot:</strong> " + reply + "</p>";

  
  document.getElementById("user-input").value = "";
  chatLog.scrollTop = chatLog.scrollHeight; 
}

function getBotResponse(input) {
  input = input.toLowerCase();
  if (input.includes("hello") || input.includes("hi")) {
    return "Hello!. Welcome to techmart!";
  } else if (input.includes("how are you")) {
    return "I'm fine!";
  } else if (input.includes("which product are available")) {
    return "Keyboard,pc,laptops etc"
  } else {
    return "I don't understand.";
  }
}
