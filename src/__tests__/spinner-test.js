import $ from "jquery";
import { killSpinner } from "../spinner";
import { getButtonDialog } from "./fixtures";

const getDialog = () => {
  const dialog = document.createElement("div");
  $(dialog).html(`
    <div>
      <p>1. Set spinner to -8</p>
      <input id="spinner">
      <p>2. Click Load</p>
      <button type="button">
        Load
      </button>
    </div>
  `);
  $(dialog).find("#spinner").spinner({
    min: -10,
    max: 10,
  });
  return dialog;
};

it("should kill spinner dialog", () => {
  const dialog = getDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killSpinner(dialog);
  expect($(dialog).find("#spinner").spinner("value")).toBe(-8);
  expect(onClick).toHaveBeenCalled();
});

it("should skip non-spinner dialog", () => {
  const dialog = getButtonDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killSpinner(dialog);
  expect(onClick).not.toHaveBeenCalled();
});
