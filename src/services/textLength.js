export const textLength = (title, lim320, lim375, lim400) => {
  const canvasWidth = window.innerWidth;
  let maxLength = 0;

  if (canvasWidth <= 320) {
    maxLength = lim320;
  } else if (canvasWidth <= 375) {
    maxLength = lim375;
  } else {
    maxLength = lim400;
  }

  return title && title.substr(0, maxLength) + (title.length > maxLength ? "..." : "");
};
