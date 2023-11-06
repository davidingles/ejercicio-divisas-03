const CAMBIOS = [
  // { moneda: "Selecciona la moneda", elCambio: '' },
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
let cambio = 0;
const btn = document.querySelector('#button');
const donacion = document.querySelector('#donacion');

CAMBIOS.map(cambio => {
  select.insertAdjacentHTML('beforeend', `<option value="${cambio.elCambio}">${cambio.moneda}</option>`)
})

function actualizoSpan() {
  const idx = select.selectedIndex;
  span.textContent = `El valor es de ${select[idx].value} €`
  return Number(select[idx].value);
}
function resultado() {
  const idx = select.selectedIndex;
  const valor = Number(select[idx].value);
  const euros = Number(inputEuros.value);
  cambio === 1 ? inputDivisa.value = (euros * valor).toFixed(2) : inputEuros.value = (euros / valor).toFixed(2);
}
actualizoSpan()
function actualizoSelect() {
  select.addEventListener('change', actualizoSpan)
  cambio === 1 ? resultado() : resultadoInverso();
}
function actualizoEuros() {
  cambio = 1;
  inputEuros.addEventListener('input', () => {
    resultado()
  })
}
actualizoEuros()
actualizoSelect()
actualizoSpan()