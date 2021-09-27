var translateBtn= document.querySelector("#btn-translate");
var textAreaInput= document.querySelector("#textArea");
var outputText= document.querySelector("#outputDiv");
var serverUrl="https://api.funtranslations.com/translate/groot.json";

function constructURL(text){
    return serverUrl + "?" + "text=" +text;
}

function errorHandler(error){
    console.log("Error Occured: " +error);
    alert("Something went wrong!! Try again after sometime");
}

function clickHandler(){
    var inputText= textAreaInput.value;
    fetch(constructURL(inputText))
    .then(response=> response.json())
    .then(json=> {
        var textTranslated=json.contents.translated;
        outputText.innerText= textTranslated;
    })
    .catch(errorHandler);
}

translateBtn.addEventListener("click", clickHandler);