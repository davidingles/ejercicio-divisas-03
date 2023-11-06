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
let cambio = 0;

CAMBIOS.map(cambio => {
  select.insertAdjacentHTML('beforeend', `<option value="${cambio.elCambio}">${cambio.moneda}</option>`)
})
// elijoMoneda();
const resultado = () => {
  cambio = 1
  inputEuros.addEventListener('change', () => {
    const indice = select.selectedIndex;
    const valor = parseFloat(select[indice].value);
    const euros = parseFloat(inputEuros.value);
    const result = euros * valor;
    inputDivisa.value = result.toFixed(2);
    return result;
  });
};
const resultadoInverso = () => {
  cambio = 2
  inputDivisa.addEventListener('input', () => {
    const indice = select.selectedIndex;
    const valor = parseFloat(select[indice].value);
    const divisa = parseFloat(inputDivisa.value);
    const result = divisa / valor;
    inputEuros.value = result.toFixed(2);
    return result;
  });
};

document.querySelector('#inputEuros').addEventListener('keyup', resultado);
document.querySelector('#inputDivisa').addEventListener('keyup', resultadoInverso);
select.addEventListener('change', recalcular)
function recalcular() {
  elijoMoneda();
  (cambio === 1) ? resultado() : resultadoInverso();
}

const elijoMoneda = () => {
  select.addEventListener('change', () => {
    const indice = select.selectedIndex;
    span.textContent = `El valor es de ${select[indice].value} €`
    recalcular()

    // let precio = select[indice].value;
    // inputDivisa.value = (precio * inputEuros.value).toFixed(2);
  })
}
elijoMoneda();



resultado();
resultadoInverso();

let donacion = 0;
function donar() {
  const inputDonar = document.querySelector('#donacion');
  const botonDonar = document.querySelector('#button');
  botonDonar.addEventListener('click', () => {
    const inputEuros = document.querySelector('#inputEuros').value;
    const resultadoMultiplicacion = Number(inputEuros) * 0.5;
    donacion += resultadoMultiplicacion;
    inputDonar.value = donacion.toFixed(2);
    limpiar();
  });
}
function limpiar() {
  document.querySelector('#inputEuros').value = '';
  document.querySelector('#inputDivisa').value = '';
  document.querySelector('#span').textContent = '';
  document.querySelector('#inputEuros').focus();
}
donar();