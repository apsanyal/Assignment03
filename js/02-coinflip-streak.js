let coinFlip

do{
    coinFlip = Math.round(Math.random()) 
    
    if (coinFlip<1){        //heads condition
        document.write("Heads<br>")
    } else {
        document.write("Tails<br>")
    }
}
while (coinFlip < 1)