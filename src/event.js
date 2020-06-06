import { killCheckbox } from "./checkbox";
import { killRadio } from "./radio";
import { killInspirational } from "./inspirational";
import { killSlider } from "./slider";
import { killSelect } from "./select";
import { killButton } from "./button";
import { killTextArea } from "./textArea";
import { killTextInput } from "./textInput";
import { killPromotion } from "./promotion";
import { killProgressBar } from "./progressBar";
import { killDate } from "./date";

const killDialog = (element) => {
  // Go through each element type and close it
  killCheckbox(element);
  killRadio(element);
  killInspirational(element);
  killSlider(element);
  killSelect(element);
  killButton(element);
  killTextArea(element);
  killTextInput(element);
  killPromotion(element);
  killProgressBar(element);
  killDate(element);
};

const onDialogOpen = (event) => {
  const element = event.target;
  killDialogs(element);
};

export const addListeners = () => {
  $(document.body).on("dialogopen", onDialogOpen);
};

export const removeListeners = () => {
  $(document.body).off("dialogopen", onDialogOpen);
};

export const killDialogs = () => {
  $(".ui-dialog")
    .filter(function () {
      return !/display: none/.test($(this).attr("style"));
    })
    .each(function () {
      killDialog(this);
    });
};
