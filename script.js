// Formatear valores a tipo moneda
function currencyFormatter({ currency, value }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    minimumFractionDigits: 0,
    currency,
  });
  return formatter.format(value);
}

// TENGO LOGICA

const daviviendaHTML = document.getElementById("davivienda");
const nequiHTML = document.getElementById("nequi");
const efectivoHTML = document.getElementById("efectivo");
const totalTengoHTML = document.getElementById("total-tengo");
const semanasHTML = document.getElementById("semanas");

let dineroDavivienda = 0;
let dineroNequi = 0;
let dineroEfectivo = 0;
let totalTengo = 0;
let semanas = 4;

semanasHTML.addEventListener("change", function(){
  semanas = semanasHTML.value || 4
  SumaTengo();
  DineroLibre();
  DineroSemanal();
})

daviviendaHTML.addEventListener("input", function () {
  dineroDavivienda = parseFloat(daviviendaHTML.value) || 0;
  SumaTengo();
  DineroLibre();
  DineroSemanal();
});

nequiHTML.addEventListener("input", function () {
  dineroNequi = parseFloat(nequiHTML.value) || 0;
  SumaTengo();
  DineroLibre();
  DineroSemanal();
});

efectivoHTML.addEventListener("input", function () {
  dineroEfectivo = parseFloat(efectivoHTML.value) || 0;
  SumaTengo();
  DineroLibre();
  DineroSemanal();
});

// Suma el total de dinero disponible en Davivienda, Nequi y Efectivo
function SumaTengo() {
  totalTengo = dineroDavivienda + dineroNequi + dineroEfectivo;

  const formatearValor = currencyFormatter({
    currency: "USD",
    value: totalTengo,
  })

  totalTengoHTML.textContent = `${formatearValor}`;

  return totalTengo;
}

// -----------
// DEBO LOGICA

const deboBancoHTML = document.getElementById("banco");
const deboTarjetaHTML = document.getElementById("tarjeta");
const deboPrestamoHTML = document.getElementById("prestamo");
const totalDeudaHTML = document.getElementById("total-debo");

let deudaBanco = 0;
let deudaTarjeta = 0;
let deudaPrestamo = 0;
let totalDeuda = 0;

deboBancoHTML.addEventListener("input", function () {
  deudaBanco = parseFloat(deboBancoHTML.value) || 0;
  SumaDeuda();
  DineroLibre();
  DineroSemanal();
});

deboTarjetaHTML.addEventListener("input", function () {
  deudaTarjeta = parseFloat(deboTarjetaHTML.value) || 0;
  SumaDeuda();
  DineroLibre();
  DineroSemanal();
});

deboPrestamoHTML.addEventListener("input", function () {
  deudaPrestamo = parseFloat(deboPrestamoHTML.value) || 0;
  SumaDeuda();
  DineroLibre();
  DineroSemanal();
});

// Suma el total de deudas entre tarjeta, banco y prestamo.
function SumaDeuda() {
  totalDeuda = deudaBanco + deudaTarjeta + deudaPrestamo;

  const formatearValor = currencyFormatter({
    currency: "USD",
    value: totalDeuda,
  })

  totalDeudaHTML.textContent = `${formatearValor}`;
  return totalDeuda;
}

// ------------------
// TOTAL DINERO LIBRE

const cardDineroLibre = document.querySelector(".dinero-libre"); // Lo llamo con querySelector en vez de ID solo para probar querySelector, es mejor llamarlo por ID
const dineroLibreHTML = document.getElementById("dinero-libre");
let totalDineroLibre = 0;

// Resta el total que tengo menos el total que debo.
function DineroLibre() {
  totalDineroLibre = totalTengo - totalDeuda;

  const formatearValor = currencyFormatter({
    currency: "USD",
    value: totalDineroLibre,
  });

  dineroLibreHTML.textContent = `${formatearValor}`;

  if (totalDineroLibre >= 0) {
    cardDineroLibre.style.backgroundColor = "rgb(0, 139, 0)"; // Verde para valores positivos o cero
  } else {
    cardDineroLibre.style.backgroundColor = "rgb(255, 0, 0)"; // Rojo para valores negativos
  }

  return totalDineroLibre;
}

// -------------------------
// SEMANALMENTE DINERO LIBRE

const dineroSemanalHTML = document.getElementById("dinero-semanal");

// Divide el dinero disponible luego de pagar deudas en 4 (semanas).
function DineroSemanal() {
  let totalDineroSemanal = totalDineroLibre / semanas;

    const formatearValor = currencyFormatter({
        currency: "USD",
        value: totalDineroSemanal
    })
  dineroSemanalHTML.textContent = `${formatearValor}`;
}
