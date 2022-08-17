// https://calculator.swiftutors.com/actual-yield-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const actualYieldRadio = document.getElementById('actualYieldRadio');
const percentYieldRadio = document.getElementById('percentYieldRadio');
const theoreticalYieldRadio = document.getElementById('theoreticalYieldRadio');

let actualYield;
let percentYield = v1;
let theoreticalYield = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

actualYieldRadio.addEventListener('click', function() {
  variable1.textContent = 'Percent Yield';
  variable2.textContent = 'Theoretical Yield';
  percentYield = v1;
  theoreticalYield = v2;
  result.textContent = '';
});

percentYieldRadio.addEventListener('click', function() {
  variable1.textContent = 'Actual Yield (%)';
  variable2.textContent = 'Theoretical Yield';
  actualYield = v1;
  theoreticalYield = v2;
  result.textContent = '';
});

theoreticalYieldRadio.addEventListener('click', function() {
  variable1.textContent = 'Actual Yield (%)';
  variable2.textContent = 'Percent Yield';
  actualYield = v1;
  percentYield = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(actualYieldRadio.checked)
    result.textContent = `Actual Yield = ${computeActualYield().toFixed(2)} %`;

  else if(percentYieldRadio.checked)
    result.textContent = `Percent Yield = ${computePercentYield().toFixed(2)}`;

  else if(theoreticalYieldRadio.checked)
    result.textContent = `Theoretical Yield = ${computeTheoreticalYield().toFixed(2)}`;
})

// calculation

function computeActualYield() {
  return (Number(percentYield.value) / 100) * Number(theoreticalYield.value);
}

function computePercentYield() {
  return (Number(actualYield.value) / Number(theoreticalYield.value)) * 100;
}

function computeTheoreticalYield() {
  return Number(actualYield.value) / (Number(percentYield.value) / 100);
}