import $ from "jquery";
import { killRadio } from "../radio";
import { getButtonDialog } from "./fixtures";

const getDialog = () => {
  const dialog = document.createElement("div");
  $(dialog).html(`
    <div>
      <p>1. Select Option 2</p>
      <input type="radio" name="radio1" id="option1">
      <label for="option1">Option 1</label>
      <input type="radio" name="radio1" id="option2">
      <label for="option2">Option 2</label>
      <p>2. Click Load</p>
      <button type="button">
        Load
      </button>
    </div>
  `);
  return dialog;
};

it("should kill checkbox dialog", () => {
  const dialog = getDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killRadio(dialog);
  expect(dialog.querySelector("#option2")).toBeChecked();
  expect(onClick).toHaveBeenCalled();
});

it("should skip non-checkbox dialog", () => {
  const dialog = getButtonDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killRadio(dialog);
  expect(onClick).not.toHaveBeenCalled();
});
