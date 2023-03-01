let counter = 0

for(i=1; i<=100; i++){

counter = counter+1

if( counter%3 == 0 && counter%5 == 0){
    document.write("Marco! Polo!<br>")
} else if(counter%3 ==0) {
    document.write("Marco!<br>")
} else if(counter%5==0) {
    document.write("Polo!<br>")
} else {
    document.write(`${counter}`+"<br>")
}

}
