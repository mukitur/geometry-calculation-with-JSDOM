// Calculate area of Triangle
function calculateTriangleArea() {
  const baseTriangle = getInputArea('triangle-base-input');
  const heightTriangle = getInputArea('triangle-height-input');
  const area = 0.5 * baseTriangle * heightTriangle;
  setAreaText('tri-area', area);
  console.log(area);
}
// Calculate area of Rectangle
function calculateRectArea() {
  const widthRect = getInputArea('rect-width');
  const lengthhRect = getInputArea('rect-length');
  const area = widthRect * lengthhRect;
  setAreaText('rect-area', area);
}
// Calculate area of Parallelogram
function calculateParallelogram() {
  const base = getInputArea('parall-base');
  const height = getInputArea('parall-height');
  const area = base * height;
  setAreaText('parall-area', area);
}

// shared function
function getInputArea(inputId) {
  const getInputElement = document.getElementById(inputId);
  const getInput = parseFloat(getInputElement.value);
  return getInput;
}
function setAreaText(id, area) {
  const areaElement = document.getElementById(id);
  //   const areaElementValue = parseFloat(areaElement);
  areaElement.innerText = area;
}
