
const form1 = document.getElementById('form1');

let artistName, subjectName;

let step = 0;

//button 01
form1.addEventListener('submit', function (event) {
  event.preventDefault();
  const myFormData = new FormData(event.target);

  const formDataObj = {};
  myFormData.forEach((value, key) => (formDataObj[key] = value));

  if(formDataObj.artistName == "" || formDataObj.artistName == null){
    alert("artist Name must be filled out");
  }else if (formDataObj.subjectName == "" || formDataObj.subjectName == null) {
    alert("subject Name must be filled out");
  }else{
  //hide and show next part
    document.getElementById("step1").style.display = "none"
    document.getElementById("defaultCanvas0").style.display = "block"
    document.getElementById("step2").style.display = "block"

    console.log("artistName: "+formDataObj.artistName)
    console.log("subjectName: "+formDataObj.subjectName)

  //store artistName & subjectName
    artistName = formDataObj.artistName
    subjectName = formDataObj.subjectName
    step = 1;
  }

});