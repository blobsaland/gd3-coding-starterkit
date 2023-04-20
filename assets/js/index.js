const nameInput = document.getElementById("nameInput");
const artistNameInput = document.getElementById("artistNameInput");

const sumbmitButton = document.getElementById("sumbmitButton");
const result = document.getElementById("result");

let portetData =
  {
    nameInput : "",
    artistNameInput : "",
  };

// nameInput.addEventListener("change", function() {
//   // console.log(nameInput.value)
//   portetData.nameInput = nameInput.value
//   console.log(portetData)


// });
// artistNameInput.addEventListener("change", function() {
//   // console.log(artistNameInput.value)
//   portetData.artistNameInput = artistNameInput.value
//   console.log(portetData)
// });

sumbmitButton.addEventListener("click", function() {
  var allInputs = document.getElementsByTagName('input');
  console.log(allInputs)

  for(let i = 0; i < allInputs.length; i++) {
        
      if(allInputs[i].type="radio") {
        
          if(allInputs[i].checked){
            console.log(allInputs[i].name + allInputs[i].value) 
          }       
      }
  }
});