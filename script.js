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

