function getGrades(){
    let numberOfSubjects = parseInt(prompt("How many subjects do you take?"),10);
    let textToPrint = "";

    for(i = 1; i <= numberOfSubjects; i++){
        let marks = parseInt(prompt("Marks for subject " + i + ":"),10);
        let grade = calculateGrade(marks)
        textToPrint += "<br />Marks for subject " + i + ": " + marks + "; grade: " + grade + "<br />"; 
    }

    document.getElementById("main").innerHTML += textToPrint;
}

function calculateGrade(marks){
    let grade = 0;
    if(marks >= 80){
        grade = "A";
    }
    else if (marks >= 70){
        grade = "B";
    }
    else if (marks >= 50){
        grade = "C";
    }
    else if (marks >= 40){
        grade = "D";
    }
    else{
        grade = "F";
    }
    return grade;
}