import "./polyfill";
import {
  onContextMenuClick,
  onTabActivated,
  onContentScriptMessage,
} from "./tabState";

chrome.contextMenus.onClicked.addListener((info, tab) => {
  onContextMenuClick(tab.id, info.menuItemId);
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    onTabActivated(tab.id, tab.url);
  });
});

chrome.runtime.onMessage.addListener((message, sender) => {
  onContentScriptMessage(sender.tab.id, message);
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    type: "checkbox",
    title: "Automate",
    id: "toggle_autowork",
    contexts: ["page_action"],
    checked: true,
    enabled: false,
  });
});
