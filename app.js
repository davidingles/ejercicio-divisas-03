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

CAMBIOS.map(cambio => {
  select.insertAdjacentHTML('beforeend', `<option value="${cambio.elCambio}">${cambio.moneda}</option>`)
})

select.addEventListener('change', () => {
  const indice = select.selectedIndex;
  span.textContent = `El valor es de ${select[indice].value} €`
})

const resultado = () => {
  inputEuros.addEventListener('keyup', () => {
    const indice = select.selectedIndex;
    const valor = select[indice].value;
    const euros = inputEuros.value;
    const result = euros * valor;
    inputDivisa.value = result.toFixed(2);
  })
}
const restultadoInverso = () => {
  inputDivisa.addEventListener('keyup', () => {
    const indice = select.selectedIndex;
    const valor = select[indice].value;
    const divisa = inputDivisa.value;
    const result = divisa / valor;
    inputEuros.value = result.toFixed(2);
  })
}
resultado();
restultadoInverso();

