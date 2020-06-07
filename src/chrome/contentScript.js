import "./polyfill";
import "../initJQuery";
import { killDialogs } from "../dialogs";

let automating = true;
let messages = [];

// Reap dialogs on an interval
setInterval(() => {
  if (messages.length) {
    // The most recent message takes precedence
    const message = messages[messages.length - 1];
    console.log("processing message", message);

    if (message.type == "set_automating_from_background") {
      automating = message.automating;
    }

    messages = [];
  }

  if (automating) {
    killDialogs();
  }

  chrome.runtime.sendMessage({
    type: "set_automating_from_content_script",
    automating,
  });
}, 1000);

chrome.runtime.onMessage.addListener((message) => {
  console.log("received message", message);
  messages.push(message);
});
