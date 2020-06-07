import $ from "jquery";
import { killDate } from "../date";
import { getButtonDialog } from "./fixtures";

const getDialog = () => {
  const dialog = document.createElement("div");
  $(dialog).html(`
    <div>
      <p>1. Set date to 25 April 2021</p>
      <div id="datepicker"></div>
      <p>2. Click Load</p>
      <button type="button">
        Load
      </button>
    </div>
  `);
  $(dialog).find("#datepicker").datepicker();
  return dialog;
};

it("should kill date dialog", () => {
  const dialog = getDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killDate(dialog);
  expect(
    $.datepicker.formatDate(
      "yy-mm-dd",
      $(dialog).find("#datepicker").datepicker("getDate")
    )
  ).toBe("2021-04-25");
  expect(onClick).toHaveBeenCalled();
});

it("should skip non-date dialog", () => {
  const dialog = getButtonDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killDate(dialog);
  expect(onClick).not.toHaveBeenCalled();
});
