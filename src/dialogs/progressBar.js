import $ from "jquery";
import { submitDialog } from "./common";

export const killProgressBarIfReady = (element) => {
  if ($(element).find(".ui-progressbar[aria-valuenow=100]").length) {
    submitDialog(element);
  }
};
