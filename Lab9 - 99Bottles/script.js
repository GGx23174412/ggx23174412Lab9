function printLyrics(){
    let textToPrint = ""
    for(i = 99; i>=0; i--){
        if(i>2){
            textToPrint = "<br />"
            textToPrint += i + " bottles of beer on the wall, " + i + " bottles of beer<br />";
            textToPrint += "Take one down and pass it around, "+(i-1)+" bottles of beer on the wall<br />";
            textToPrint += "<br />"
        }else if (i==2){
            textToPrint = i + " bottles of beer on the wall, " + i + " bottles of beer<br />";
            textToPrint += "Take one down and pass it around, "+(i-1)+" bottle of beer on the wall<br />";
            textToPrint += "<br />"
        }else if (i==1){
            textToPrint = i + " bottle of beer on the wall, " + i + " bottle of beer<br />";
            textToPrint += "Take one down and pass it around, no more bottles of beer on the wall<br />";
            textToPrint += "<br />"
        }else if (i==0){
            textToPrint = "No more bottles of beer on the wall, no more bottles of beer<br />";
            textToPrint += "Go to the store and buy some more, 99 bottles of beer on the wall";
        }

        document.getElementById("main").innerHTML += textToPrint;
    }
}