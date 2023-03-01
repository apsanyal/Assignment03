let coinFlip

numberOfFlips = parseInt(prompt("How many times do you want to flip a coin?"))

for (let i = 1; i <= numberOfFlips; i++) {

    coinFlip = Math.round(Math.random())

    if (coinFlip < 1) {
        document.write("Heads<br>")  // 0 is heads
    } else {
        document.write("Tails<br>")  
    }
}