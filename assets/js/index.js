const nameInput = document.getElementById("nameInput");
const artistNameInput = document.getElementById("artistNameInput");
let portetData =
  {
    nameInput : "",
    artistNameInput : "",
  };

nameInput.addEventListener("change", function() {
  // console.log(nameInput.value)
  portetData.nameInput = nameInput.value
  console.log(portetData)


});

artistNameInput.addEventListener("change", function() {
  // console.log(artistNameInput.value)
  portetData.artistNameInput = artistNameInput.value
  console.log(portetData)


});


artistNameInput.addEventListener("change", function() {
  var ele = document.getElementsByName('gender');
    
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
      document.getElementById("result").innerHTML
              = "Gender: "+ele[i].value;
  }
}