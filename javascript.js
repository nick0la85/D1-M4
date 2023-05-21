
/*Esercizio1*/
/*let num1=30;
let num2= 30;
if 
    (num1+num2===50||num1===50||num2===50)
    console.log("true")
    else
    console.log("false")*/
    
/*Esercizio2*/

/*function rimuoviCarattere(stringa, posizione) {
    return stringa.slice(0, posizione) + stringa.slice(posizione + 1);
}
let stringa = "Hello, World!";
let posizione = 7;

let stringaModificata = rimuoviCarattere(stringa, posizione);
console.log(stringaModificata);*/

/*Esercizio3*/

/*function controllaNum(num1, num2){
    if((num1>=40 && num1<=60)||(num1>=70 && num1<=100)&& (num2>=40 && num2<=60)||(num2>=70 && num2<=100))
    return "true";
    else
    return "false"
}

let num1= 40
let num2= 70

let numeroGiusto= controllaNum(40,70)

console.log(numeroGiusto)*/

/*Esercizio4*/

/*let citta= "New york"


function search (citta){
    if (citta.includes("New") ||citta.includes("Los")) {
    return (citta) 
    }
    return("false")

}
let searchCity= search(citta)
console.log(searchCity)*/

/*Esercizio5*/

/*let array=[1,1,1,1,1,1]

function sommaArray(array) {
    let somma = 0;
    for (let i = 0; i < array.length; i++) {
      somma += array[i];
    }
    return somma;
  }
let totale= sommaArray( array)

console.log(totale)*/

/*Esercizio6*/

/*let array=[7,8,9,10,11,12,13]

function search (array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index]===1||array[index]===3) {
            return "true";
        }
        return "false"
    }
}

let searchNum= search (array)

console.log(searchNum)*/

/*Esercizio7*/

/*let triangolo =180

function search(triangolo) {
    if (triangolo===90) {
        return "acuto"
        };
        if (triangolo>90&&triangolo<180) {
            return "ottuso"
        };
        if (triangolo===90) {
            return "retto"
        }
        else if(triangolo===180)
        return "piatto"
}



console.log(search(90))*/

/*Esercizio8*/

/*function acronimo(stringa) {
    let array=stringa.split(" ")
    let first= ""
    for (let index = 0; index < array.length; index++) {
        const lettera=array[index]
        first+=lettera.charAt(0)  
    }
    return first.toUpperCase()
}

console.log (acronimo("societa sportiva napoli"))*/


  