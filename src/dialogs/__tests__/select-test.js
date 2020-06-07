import $ from "jquery";
import { killSelect } from "../select";
import { getButtonDialog } from "./fixtures";

const getDialog = () => {
  const dialog = document.createElement("div");
  $(dialog).html(`
    <div>
      <p>1. Select Option 2</p>
      <select id="select">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <p>2. Click Load</p>
      <button type="button">
        Load
      </button>
    </div>
  `);
  $(dialog).find("#select").selectmenu();
  return dialog;
};

it("should kill select dialog", () => {
  const dialog = getDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killSelect(dialog);
  expect($(dialog).find("#select")[0]).toHaveValue("Option 2");
  expect(onClick).toHaveBeenCalled();
});

it("should skip non-select dialog", () => {
  const dialog = getButtonDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killSelect(dialog);
  expect(onClick).not.toHaveBeenCalled();
});
