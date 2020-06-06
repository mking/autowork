import $ from "jquery";
import { killButton } from "../button";
import { getButtonDialog } from "./testFixtures";

const getOtherDialog = () => {
  const dialog = document.createElement("div");
  $(dialog).html(`
    <div>
      <div class="dialog">
        <p>1. Select Option 1</p>
        <p>2. Click Load</p>
      </div>
      <button type="button">
        Load
      </button>
    </div>
  `);
  return dialog;
};

it("should kill button dialog", () => {
  const dialog = getButtonDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killButton(dialog);
  expect(onClick).toHaveBeenCalled();
});

it("should skip non-button dialog", () => {
  const dialog = getOtherDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killButton(dialog);
  expect(onClick).not.toHaveBeenCalled();
});
