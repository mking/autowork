import _ from "lodash";
import escapeStringRegexp from "escape-string-regexp";

const WORK_URL = "https://pippinbarr.github.io/itisasifyouweredoingwork/";

const tabStates = {};

const updateContextMenu = (tabState) => {
  if (_.get(tabState, "enabled")) {
    chrome.contextMenus.update("toggle_autowork", {
      checked: _.get(tabState, "automating"),
      enabled: true,
    });
  } else {
    chrome.contextMenus.update("toggle_autowork", {
      checked: true,
      enabled: false,
    });
  }
};

const updateContentScript = (tabId, tabState) => {
  if (_.get(tabState, "enabled")) {
    const message = {
      type: "set_automating_from_background",
      automating: _.get(tabState, "automating"),
    };
    console.log("sending message", tabId, message);
    chrome.tabs.sendMessage(tabId, message);
  }
};

export const onContextMenuClick = (tabId, menuItemId) => {
  console.log("context menu clicked", tabId, menuItemId);

  if (menuItemId === "toggle_autowork") {
    const tabState = _.get(tabStates, `${tabId}`);
    _.set(tabState, "automating", !_.get(tabState, "automating"));
    console.log("tab state after context menu click", tabId, tabState);

    updateContextMenu(tabState);
    updateContentScript(tabId, tabState);
  }
};

export const onTabActivated = (tabId, tabUrl) => {
  console.log("tab activated", tabId, tabUrl);

  if (!_.get(tabStates, `${tabId}`)) {
    _.set(tabStates, `${tabId}`, {});
  }

  const tabState = _.get(tabStates, `${tabId}`);
  const enabled = new RegExp(`^${escapeStringRegexp(WORK_URL)}`).test(tabUrl);
  _.set(tabState, "enabled", enabled);
  _.set(tabState, "automating", _.get(tabState, "automating", true));
  console.log("tab state after activate", tabId, tabState);

  updateContextMenu(tabState);
  updateContentScript(tabId, tabState);
};

export const onContentScriptMessage = (tabId, message) => {
  console.log("received message", tabId, message);

  if (message.type === "set_automating_from_content_script") {
    const tabState = _.get(tabStates, `${tabId}`);
    _.set(tabState, "automating", message.automating);
    console.log("tab state after message", tabId, tabState);

    updateContextMenu(tabState);
  }
};
