import $ from "jquery";
import { submitDialog } from "./common";

export const killDate = (element) => {
  if ($(element).find(".hasDatepicker").length) {
    const dateText = $(element).find('p:contains("1. Set date to")').text();
    const dateMatch = /^1\. Set date to (\d+ \w+ \d+)$/.exec(dateText);
    if (dateMatch) {
      const valueText = dateMatch[1];
      const valueDate = $.datepicker.parseDate("d MM yy", valueText);
      $(element).find(".hasDatepicker").datepicker("setDate", valueDate);

      submitDialog(element);
    }
  }
};
