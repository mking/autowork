import $ from "jquery";
import { killPromotion } from "../promotion";
import { getButtonDialog } from "./fixtures";

const getDialog = () => {
  const dialog = document.createElement("div");
  $(dialog).html(`
    <div>
      <p>You have been promoted to Title</p>
      <button type="button">
        Okay
      </button>
    </div>
  `);
  return dialog;
};

it("should kill promotion dialog", () => {
  const dialog = getDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killPromotion(dialog);
  expect(onClick).toHaveBeenCalled();
});

it("should skip non-promotion dialog", () => {
  const dialog = getButtonDialog();
  const onClick = jest.fn();
  $(dialog).find("button").on("click", onClick);
  killPromotion(dialog);
  expect(onClick).not.toHaveBeenCalled();
});
