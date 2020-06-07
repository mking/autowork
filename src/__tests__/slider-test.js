import $ from "jquery";
import { killSlider } from "../slider";
import { getButtonDialog } from "./fixtures";

const getDialog = () => {
  const dialog = document.createElement("div");
  $(dialog).html(`
    <div>
      <p>1. Set slider to 55 (currently 0)</p>
      <div id="slider"></div>
      <p>2. Click Load</p>
      <button type="button">
        Load
      </button>
    </div>
  `);
  $(dialog).find("#slider").slider();
  return dialog;
};

it("should kill slider dialog", () => {
  const dialog = getDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killSlider(dialog);
  expect($(dialog).find("#slider").slider("value")).toBe(55);
  expect(onClick).toHaveBeenCalled();
});

it("should skip non-slider dialog", () => {
  const dialog = getButtonDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killSlider(dialog);
  expect(onClick).not.toHaveBeenCalled();
});
