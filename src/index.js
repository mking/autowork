import { killCheckbox } from "./checkbox";
import { killRadio } from "./radio";
import { killInspirational } from "./inspirational";
import { killSlider } from "./slider";
import { killSelect } from "./select";
import { killButton } from "./button";
import { killTextArea } from "./textArea";
import { killTextInput } from "./textInput";
import { killPromotion } from "./promotion";
import { killProgressBarIfReady } from "./progressBar";

// Note: Order should not be important
// Each kill command should independently be able to identify the dialog it wants to kill
// without inadvertently affecting other dialogs
killCheckbox();
killRadio();
killInspirational();
killSlider();
killSelect();
killButton();
killTextArea();
killTextInput();
killPromotion();
killProgressBarIfReady();
