const qelizat = document.querySelectorAll('.qeliza')
const gjendja = document.querySelector('#gjendja')
const rifillo = document.getElementById('rifillo')


const fitore = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let opsionet = ["", "", "", "", "", "", "", "", "" ]
let lojtariAktual = "X"
let poLuajme = false

filloLojen()

function filloLojen() {
qelizat.forEach(qeliza => qeliza.addEventListener("click",qelizaKlikuar))
rifillo.addEventListener("click",rifilloLoje)
gjendja.textContent = `Radha e ${lojtariAktual}`
poLuajme = true
}

function qelizaKlikuar() {
const indeksiQelizes = this.getAttribute("indeksQelize")
if(opsionet[indeksiQelizes] != "" || !poLuajme){
    return 
}
perditsoQelize(this, indeksiQelizes)
kontrolloFituesin()
}

function perditsoQelize(qelize,indeks){
opsionet[indeks] = lojtariAktual
console.log(opsionet)
qelize.textContent = lojtariAktual
}


function ndryshoLojtar(){
lojtariAktual =  lojtariAktual == "X" ? "O" : "X";
gjendja.textContent = `Radha ${lojtariAktual}`
}


function kontrolloFituesin(){
let fituesi = false
for(let i = 0; i < fitore.length; i++) {
 const kushti = fitore[i]
 const qelizaA = opsionet[kushti[0]]
 const qelizaB = opsionet[kushti[1]]
 const qelizaC = opsionet[kushti[2]]
 if (qelizaA == "" || qelizaB == "" || qelizaC){
    continue
 } 
 if(qelizaA == qelizaB && qelizaB == qelizaC){
    fituesi = true
    break
 }
}
if(fituesi){
    gjendja.textContent = `Fituesi: ${lojtariAktual}`
    gjendja.style.color = 'red'
    poLuajme = false 
} else if(!opsionet.includes('')){
    gjendja.textContent = `Barazim`
    gjendja.style.color = 'yellow'
    poLuajme = false
} else {
    ndryshoLojtar()
}
}

function rifilloLoje(){
lojtariAktual = 'X'
 opsionet = ["", "", "", "", "", "", "", "", "" ]
gjendja.textContent = `Rradha e ${lojtariAktual}`
gjendja.style.color = 'white'
qelizat.forEach(qeliza => qeliza.textContent = "")
poLuajme = true

}