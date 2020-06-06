import $ from "jquery";
import { killDate } from "../date";
import { getButtonDialog } from "./fixtures";

const getDialog = () => {
  const dialog = document.createElement("div");
  $(dialog).html(`
    <div>
      <p>1. Select 25 April 2021</p>
      <div id="date"></div>
      <p>2. Click Load</p>
      <button type="button">
        Load
      </button>
    </div>
  `);
  // XXX jQuery UI is not working in tests
  $(dialog).find("#date").datepicker();
  $(dialog).find("#date").datepicker("setDate", "06/05/20");
  return dialog;
};

it("should kill date dialog", () => {
  const dialog = getDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killDate(dialog);
  expect($(dialog).find("#date").datepicker("getDate")).toBe(
    $.datepicker.parseDate("yy-mm-dd", "2021-04-25")
  );
  expect(onClick).toHaveBeenCalled();
});

it("should skip non-date dialog", () => {
  const dialog = getButtonDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killDate(dialog);
  expect(onClick).not.toHaveBeenCalled();
});
