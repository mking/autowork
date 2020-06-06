export const killInspirational = (element) => {
  if ($(element).find(".inspirational-dialog").length) {
    $(element).find(".ui-dialog-titlebar-close").click();
  }
};
