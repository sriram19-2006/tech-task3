
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
// Open chatbot
function openChatbot() {
    document.getElementById("chatbot").style.display = "flex";
}

// Close chatbot
function closeChatbot() {
    document.getElementById("chatbot").style.display = "none";
}

// Handle sending a message
function sendMessage() {
    const userMessage = document.getElementById("userMessage").value.trim();
    if (userMessage) {
        // Add user message to chat window
        addMessage(userMessage, "user");

        // Clear input field
        document.getElementById("userMessage").value = "";

        // Simulate bot response
        setTimeout(() => {
            addMessage(`You asked: "${userMessage}". I am here to help!`, "bot");
        }, 1000);
    }
}

// Add message to chat window
function addMessage(message, sender) {
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message", sender);
    messageContainer.textContent = message;
    document.getElementById("chatbotMessages").appendChild(messageContainer);

    // Scroll to the bottom of the chat
    document.getElementById("chatbotMessages").scrollTop = document.getElementById("chatbotMessages").scrollHeight;
}

// Handle "Enter" keypress to send message
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}


