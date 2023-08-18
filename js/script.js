// Calculate area of Triangle
function calculateTriangleArea() {
  const baseTriangle = getInputArea('triangle-base-input');
  const heightTriangle = getInputArea('triangle-height-input');

  //   Validate Input: width & Length
  if (isNaN(baseTriangle) || isNaN(heightTriangle)) {
    alert('insert a number');
    return;
  }
  const area = 0.5 * baseTriangle * heightTriangle;
  setAreaText('tri-area', area);

  //   calculation part
  addCalculationEntry('Triangl;e', area);
}
// Calculate area of Rectangle
function calculateRectArea() {
  const widthRect = getInputArea('rect-width');
  const lengthhRect = getInputArea('rect-length');

  //   Validate Input: width & Length
  if (isNaN(widthRect) || isNaN(lengthhRect)) {
    alert('insert a number');
    return;
  }

  const area = widthRect * lengthhRect;
  setAreaText('rect-area', area);

  //   calculation part
  addCalculationEntry('Rectangle', area);
}
// Calculate area of Parallelogram
function calculateParallelogram() {
  const base = getInputArea('parall-base');
  const height = getInputArea('parall-height');

  //   Validate Input: width & Length
  if (isNaN(base) || isNaN(height)) {
    alert('insert a number');
    return;
  }

  const area = base * height;
  setAreaText('parall-area', area);

  //   calculation part
  addCalculationEntry('Parallelogram', area);
}
// Calculate area of Rhombus
function calculateRhombus() {
  const d1 = getInputArea('rhumb-d1');
  const d2 = getInputArea('rhumb-d2');

  //   Validate Input: width & Length
  if (isNaN(d1) || isNaN(d2)) {
    alert('insert a number');
    return;
  }

  const area = 0.5 * d1 * d2;
  setAreaText('rhumbus-area', area);

  //   calculation part
  addCalculationEntry('Rhombus', area);
}
// Calculate area of Pentagon
function calculatePentagon() {
  const p = getInputArea('Pentagon-p');
  const b = getInputArea('Pentagon-b');

  //   Validate Input: width & Length
  if (isNaN(p) || isNaN(b)) {
    alert('insert a number');
    return;
  }

  const area = 0.5 * p * b;
  setAreaText('Pentagon-area', area);

  //   calculation part
  addCalculationEntry('Pentagon', area);
}
// Calculate area of Ellipse
function calculateEllipse() {
  const a = getInputArea('pi-a');
  const b = getInputArea('pi-b');

  //   Validate Input: width & Length
  if (isNaN(a) || isNaN(b)) {
    alert('insert a number');
    return;
  }

  const area = (3.14 * a * b).toFixed(2);
  setAreaText('Ellipse-area', area);

  //   calculation part
  addCalculationEntry('Ellipse', area);
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

// Calculation Area

function addCalculationEntry(areaType, area) {
  const calculationEntry = document.getElementById('calculation-area');
  const count = calculationEntry.childElementCount;
  const p = document.createElement('p');
  p.classList.add('my-4');
  p.innerHTML = `
  ${
    count + 1
  }. ${areaType} ${area} cm<sup>2</sup>  <button class="btn btn-sm btn-success">convert</button>
  `;
  calculationEntry.appendChild(p);
}
