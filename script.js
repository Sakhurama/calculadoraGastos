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
    SumaTengo()
    DineroLibre()
    DineroSemanal();
})

nequiHTML.addEventListener("input", function(){
    dineroNequi = parseFloat(nequiHTML.value) || 0;
    SumaTengo()
    DineroLibre()
    DineroSemanal();
})

efectivoHTML.addEventListener("input", function(){
    dineroEfectivo = parseFloat(efectivoHTML.value) || 0;
    SumaTengo()
    DineroLibre()
    DineroSemanal();
})

function SumaTengo(){
    const total = dineroDavivienda + dineroNequi + dineroEfectivo;
    console.log(total)

    totalTengoHTML.textContent = `Tienes ${total}`

    return total;
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
    SumaDeuda();
    DineroLibre();
    DineroSemanal();
})

deboTarjetaHTML.addEventListener("input", function(){
    deudaTarjeta = parseFloat(deboTarjetaHTML.value) || 0;
    SumaDeuda();
    DineroLibre();
    DineroSemanal();
})

deboPrestamoHTML.addEventListener("input", function(){
    deudaPrestamo = parseFloat(deboPrestamoHTML.value) || 0;
    SumaDeuda();
    DineroLibre();
    DineroSemanal();
})

function SumaDeuda(){
    const total = deudaBanco + deudaTarjeta + deudaPrestamo;
    totalDeudaHTML.textContent = `Debo pagar ${total}`
    return total;
}


// TOTAL DINERO LIBRE

const dineroLibreHTML = document.getElementById("dinero-libre");


function DineroLibre(){
    const totalDebo = SumaDeuda();
    const totalTengo = SumaTengo();

    let totalDineroLibre =  totalTengo - totalDebo;
    dineroLibreHTML.textContent = `Puedo gastar ${totalDineroLibre}`

    return totalDineroLibre;
}


// SEMANALMENTE DINERO LIBRE

const dineroSemanalHTML = document.getElementById("dinero-semanal");

function DineroSemanal(){
    let totalDineroSemanal = DineroLibre() / 4

    dineroSemanalHTML.textContent = `Cada semana puedes gastar ${totalDineroSemanal}`;
}


