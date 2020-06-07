import $ from "jquery";
import { killCheckbox } from "./checkbox";
import { killRadio } from "./radio";
import { killInspirational } from "./inspirational";
import { killSlider } from "./slider";
import { killSpinner } from "./spinner";
import { killSelect } from "./select";
import { killButton } from "./button";
import { killTextArea } from "./textArea";
import { killTextInput } from "./textInput";
import { killPromotion } from "./promotion";
import { killProgressBarIfReady } from "./progressBar";
import { killDate } from "./date";

const killDialog = (element) => {
  // Go through each element type and close it
  killCheckbox(element);
  killRadio(element);
  killInspirational(element);
  killSlider(element);
  killSpinner(element);
  killSelect(element);
  killButton(element);
  killTextArea(element);
  killTextInput(element);
  killPromotion(element);
  killProgressBarIfReady(element);
  killDate(element);
};

export const killDialogs = async () => {
  console.log("killing dialogs");

  const dialogs = $(".ui-dialog")
    .filter(function () {
      return !/display: none/.test($(this).attr("style"));
    })
    .toArray();

  for (const dialog of dialogs) {
    killDialog(dialog);

    // Let's stagger our kills
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
};
