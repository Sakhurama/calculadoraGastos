// TENGO LOGICA

const daviviendaHTML = document.getElementById("davivienda");
const nequiHTML = document.getElementById("nequi");
const efectivoHTML = document.getElementById("efectivo");
const totalTengoHTML = document.getElementById("total-tengo");

let dineroDavivienda = 0
let dineroNequi = 0
let dineroEfectivo = 0


daviviendaHTML.addEventListener("input", function(){
    dineroDavivienda = parseFloat(daviviendaHTML.value) || 0;
    sumaTotal()
})

nequiHTML.addEventListener("input", function(){
    dineroNequi = parseFloat(nequiHTML.value) || 0;
    sumaTotal()
})

efectivoHTML.addEventListener("input", function(){
    dineroEfectivo = parseFloat(efectivoHTML.value) || 0;
    sumaTotal()
})

function sumaTotal(){
    const total = dineroDavivienda + dineroNequi + dineroEfectivo;
    console.log(total)

    totalTengoHTML.textContent = `Tienes ${total}`
}

// DEBO LOGICA

const deboBancoHTML = document.getElementById("banco");
const deboTarjetaHTML = document.getElementById("tarjeta");
const deboPrestamoHTML = document.getElementById("prestamo");
const totalDeudaHTML = document.getElementById("total-debo");

let deudaBanco = 0;
let deudaTarjeta = 0;
let deudaPrestamo = 0;

deboBancoHTML.addEventListener("input", function(){
    deudaBanco = parseFloat(deboBancoHTML.value) || 0;
    sumaDeuda();
})

deboTarjetaHTML.addEventListener("input", function(){
    deudaTarjeta = parseFloat(deboTarjetaHTML.value) || 0;
    sumaDeuda();
})

deboPrestamoHTML.addEventListener("input", function(){
    deudaPrestamo = parseFloat(deboPrestamoHTML.value) || 0;
    sumaDeuda();
})

function sumaDeuda(){
    const total = deudaBanco + deudaTarjeta + deudaPrestamo;
    totalDeudaHTML.textContent = `Debo pagar ${total}`
}



// CALCULO FINAL LOGICA
const dineroLibreHTML = document.getElementById("dinero-libre");
const dineroSemanalHTML = document.getElementById()