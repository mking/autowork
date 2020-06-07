import $ from "jquery";
import { killInspirational } from "../inspirational";
import { getButtonDialog } from "./fixtures";

const getDialog = () => {
  const dialog = document.createElement("div");
  $(dialog).html(`
    <div>
      <div class="inspirational-dialog"></div>
      <button type="button" class="ui-dialog-titlebar-close"></button>
    </div>
  `);
  return dialog;
};

it("should kill inspirational dialog", () => {
  const dialog = getDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killInspirational(dialog);
  expect(onClick).toHaveBeenCalled();
});

it("should skip non-inspirational dialog", () => {
  const dialog = getButtonDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killInspirational(dialog);
  expect(onClick).not.toHaveBeenCalled();
});
