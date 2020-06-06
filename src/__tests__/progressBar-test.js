import $ from "jquery";
import { killProgressBarIfReady } from "../progressBar";
import { getButtonDialog } from "./testFixtures";

const getDialog = ({ value }) => {
  const dialog = document.createElement("div");
  $(dialog).html(`
    <div>
      <p>1. Wait for progress bar</p>
      <div class="ui-progressbar" aria-valuenow="${value}"></div>
      <p>2. Click Load</p>
      <button type="button">
        Load
      </button>
    </div>
  `);
  return dialog;
};

it("should kill progress bar dialog", () => {
  const dialog = getDialog({ value: 100 });
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killProgressBarIfReady(dialog);
  expect(onClick).toHaveBeenCalled();
});

it("should skip non-progress bar dialog", () => {
  const dialog = getButtonDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killProgressBarIfReady(dialog);
  expect(onClick).not.toHaveBeenCalled();
});

it("should skip partial progress bar dialog", () => {
  const dialog = getDialog({ value: 50 });
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killProgressBarIfReady(dialog);
  expect(onClick).not.toHaveBeenCalled();
});
