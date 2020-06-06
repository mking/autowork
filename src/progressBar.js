import { submitDialog } from "./common";

export const killProgressBar = (element) => {
  if ($(element).find(".ui-progressbar").length) {
    // Check progress on an interval
    // Let's max out just in case
    const intervalCount = 0;
    const intervalMax = 100;
    const interval = setInterval(() => {
      if (intervalCount === intervalMax) {
        clearInterval(interval);
        return;
      }

      if ($(element).find(".ui-progressbar[aria-valuenow=100]")) {
        clearInterval(interval);
        submitDialog(element);
        return;
      }

      intervalCount++;
    }, 1000);
  }
};
