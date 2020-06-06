import { submitDialog } from "./common";

export const killButton = (element) => {
  // Assume a dialog with a single paragraph is a button dialog
  const $children = $(element).find(".dialog").children();
  if ($children.length === 1 && $children.is("p")) {
    submitDialog(element, { prefix: "1. Click" });
  }
};
