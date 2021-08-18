


const boldText = document.getElementsByClassName("question");

for( var i = 0 ; i < boldText.length ; i++){
    boldText[i].addEventListener("click", () => {
        console.log("CLICKED");
    })
}


console.log(boldText);
