import $ from "jquery";

export const getButtonDialog = () => {
  const dialog = document.createElement("div");
  $(dialog).html(`
    <div>
      <div class="dialog">
        <p>1. Click Load</p>
      </div>
      <button type="button">
        Load
      </button>
    </div>
  `);
  return dialog;
};
