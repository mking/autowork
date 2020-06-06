import $ from "jquery";
import { killTextArea } from "../textArea";
import { getButtonDialog } from "./testFixtures";

const getDialog = () => {
  const dialog = document.createElement("div");
  $(dialog).html(`
    <div>
      <p>Write at least 3 characters (currently 0)</p>
      <textarea></textarea>
      <button type="button">
        Save
      </button>
    </div>
  `);
  return dialog;
};

it("should kill text area dialog", () => {
  const dialog = getDialog();
  const onKeyPress = jest.fn();
  const onClick = jest.fn();
  $(dialog).find("textarea").on("keypress", onKeyPress);
  $(dialog).find("button").on("click", onClick);
  killTextArea(dialog);
  expect(onKeyPress).toHaveBeenCalled();
  expect(onClick).toHaveBeenCalled();
});

it("should skip non-text area dialog", () => {
  const dialog = getButtonDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killTextArea(dialog);
  expect(onClick).not.toHaveBeenCalled();
});
