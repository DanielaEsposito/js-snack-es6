//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.
//Snack 2
//Creare un array di oggetti di squadre di calcio.
 //Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
//Snack 3 (Bonus)
//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

//! ESERCIZIO 1

// creazione dell'array di oggetti

const bicycles =[
    {name: "bicycle1",
     weight: 7   
    },
    {name: "bicycle2",
     weight: 10   
    },
    {name: "bicycle3",
     weight: 8   
    },
    {name: "bicycle4",
     weight: 5   
    },
    {name: "bicycle5",
        weight: 4.5   
    }, 
]

// ELABORAZIONE

let searchedBicycle = bicycles[0];

for (let i = 0; i < bicycles.length ; i++){
  if (bicycles[i].weight < searchedBicycle.weight) {
    searchedBicycle=bicycles[i];
   // console.log(searchedBicycle);
    
  }
}
console.log("la bici con il peso minore è " + searchedBicycle.name + " e il suo peso è di " + searchedBicycle.weight + "kg");


//! ESERCIZIO 2
// creazione dell'array di oggetti
const teams =[
    {name: "team1",
     goals:  0,
     foulPlay:0 
    },
    {name: "team2",
     goals: 0,
     foulPlay:0   
    },
    {name: "team3",
     goals: 0,
     foulPlay:0   
    },
    {name: "team4",
     goals:  0,
     foulPlay:0  
    },
    {name: "team5",
     goals: 0,
     foulPlay:0}]

