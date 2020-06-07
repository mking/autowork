import $ from "jquery";
import { killTextInput } from "../textInput";
import { getButtonDialog } from "./fixtures";

const getDialog = () => {
  const dialog = document.createElement("div");
  $(dialog).html(`
    <div>
      <p>1. Write "Text 1" in the input field</p>
      <input type="text">
      <p>2. Click Load</p>
      <button type="button">
        Load
      </button>
    </div>
  `);
  return dialog;
};

it("should kill text input dialog", () => {
  const dialog = getDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killTextInput(dialog);
  expect($(dialog).find("input")[0]).toHaveValue("Text 1");
  expect(onClick).toHaveBeenCalled();
});

it("should skip non-text input dialog", () => {
  const dialog = getButtonDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killTextInput(dialog);
  expect(onClick).not.toHaveBeenCalled();
});
