const CAMBIOS = [
  { moneda: "Selecciona la moneda", elCambio: '' },
  { moneda: "Dólares USA", elCambio: 1.06 },
  { moneda: "Libras esterlinas", elCambio: 0.87 },
  { moneda: "Pesos argentinos", elCambio: 370.22 },
  { moneda: "Pesos colombianos", elCambio: 4510.51 },
  { moneda: "Pesos mexicanos", elCambio: 19.33 },
]
const select = document.querySelector('#select');
const inputEuros = document.querySelector('#inputEuros');
const inputDivisa = document.querySelector('#inputDivisa');
const span = document.querySelector('#span');
const btn = document.querySelector('#button');
const donacion = document.querySelector('#donacion');
let cambio = 0;

function rellenoSelect() {
  CAMBIOS.map(cambio => {
    select.insertAdjacentHTML('beforeend', `<option value="${cambio.elCambio}">${cambio.moneda}</option>`)
  })
}
rellenoSelect()
function optengoValorDivisa() {
  const idx = select.selectedIndex;
  const valorDivisa = Number(select[idx].value);
  return valorDivisa;
}

function resultado1() {
  cambio = 1;
  const valor = optengoValorDivisa()
  const euros = Number(inputEuros.value);
  inputDivisa.value = (euros * valor).toFixed(2);
}
function resultado2() {
  cambio = 2;
  const valor = optengoValorDivisa()
  const divisa = Number(inputDivisa.value);
  inputEuros.value = (divisa / valor).toFixed(2);
}
function actualizoSpan() {
  const idx = select.selectedIndex;
  span.textContent = `El valor es de ${select[idx].value} €`
  if (cambio === 1) {
    resultado1()
  } else {
    resultado2()
  }
}
select.addEventListener('change', actualizoSpan)

inputEuros.addEventListener('input', resultado1)
// inputDivisa.addEventListener('input', actualizoSpan)
