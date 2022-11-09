// FizzBuzz che stampa a schermo dei numeri da 1 a 100, ma i multipli di 3 stampano "Fizz" e i multipli di 5 stampano "Buzz", se sono sia divisibili per 3 che per 5 stampano "FizzBuzz" 

// Dichiarazione Variabili
const container = document.querySelector(".container");

// Ciclo for per creare i numeri
for (let i = 1; i <= 100; i++){

    let multiploDiTre = i % 3;
    let multiploDiCinque = i % 5;
    const card = document.createElement("div");
    card.classList.add("card");
    container.append(card)

    // Condizione che stabilisce i multipli sia di 3 che di 5
    if (multiploDiTre === 0 && multiploDiCinque=== 0){
        card.append("FizzBuzz");
        card.style.backgroundColor = "#ef456e";

    // Condizione che stabilisce i multipli di 3
    } else if (multiploDiTre === 0){
        card.append("Fizz");
        card.style.backgroundColor = "#0cd6a1";

    // Condizione che stabilisce i multipli di 5
    } else if (multiploDiCinque === 0){
        card.append("Buzz");
        card.style.backgroundColor = "#ffd166";

    } else{
        card.append(i);
    }
}