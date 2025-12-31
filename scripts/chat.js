const toggle = document.getElementById("chat-toggle");
const chatContainer = document.getElementById("chat-container");
const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

let mode = null;
let chatting = true;

toggle.addEventListener("click", () => {
  chatContainer.style.display = chatContainer.style.display === "flex" ? "none" : "flex";
  chatContainer.style.flexDirection = "column";
});

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = sender;
  msg.textContent = sender === "user" ? "You: " + text : "Cayleigh: " + text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function isNo(str) {
  return ["no", "n", "done", "stop", "quit"].includes(str.trim().toLowerCase());
}

function processInput(text) {
  const msg = text.toLowerCase().trim();
  addMessage("user", text);

  if (!mode) {
    if (msg.includes("professional")) {
      mode = "professional";
      chatting = true;
      addMessage("bot", "Great! Ask about: 'projects', 'mission', or 'roles'. Type 'done' to stop.");
    } else if (msg.includes("casual")) {
      mode = "casual";
      chatting = true;
      addMessage("bot", "Let's chat! Try 'coding', 'crafts', or 'space'. Type 'done' to exit.");
    } else {
      addMessage("bot", "Would you like a professional or casual conversation?");
    }
    return;
  }

  if (!chatting) {
    if (msg === "yes") {
      mode = null;
      chatting = true;
      addMessage("bot", "Restarting! Professional or casual?");
    } else {
      addMessage("bot", "Goodbye!");
    }
    return;
  }

  if (isNo(msg)) {
    addMessage("bot", "Thanks for chatting! Type 'yes' to restart or 'no' to end.");
    chatting = false;
    return;
  }

  if (mode === "professional") {
    if (msg.includes("project")) {
      addMessage("bot", "I’ve worked on:");
      addMessage("bot", "🪙 Taijerjltokens (Student Budget Tracker)");
      addMessage("bot", "🌱 Affirmation Garden");
      addMessage("bot", "🧥 Closet Courour");
    } else if (msg.includes("mission")) {
      addMessage("bot", "My mission is to reflect transparency, hard work, integrity, and continual learning.");
    } else if (msg.includes("role")) {
      addMessage("bot", "I’m open to roles where I can adapt, learn, help people, and benefit the team.");
    } else {
      addMessage("bot", "Ask about 'projects', 'mission', or 'roles'.");
    }
  }

  if (mode === "casual") {
    if (msg.includes("coding")) {
      addMessage("bot", "I like making fun side projects—one helps kids learn coding for free.");
    } else if (msg.includes("craft")) {
      addMessage("bot", "I love organizing craft supplies—even if I don’t use them all 😄");
    } else if (msg.includes("space")) {
      addMessage("bot", "My Moon Lander game mixes fun and learning about space travel!");
    } else {
      addMessage("bot", "Try asking about 'coding', 'crafts', or 'space'.");
    }
  }
}

sendBtn.addEventListener("click", () => {
  const text = input.value;
  if (text) {
    processInput(text);
    input.value = "";
  }
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});
