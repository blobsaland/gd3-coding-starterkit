const form3 = document.getElementById('form3');

let imageSelector = document.getElementsByClassName("imageSelector")

//create checkboxes
for (let i = 0; i < imgs.length; i++) {

  // create let of atributes
  let Cname = imgs[i].name;
  // console.log(Cname)

  // create list items
  let checkboxDiv = document.createElement('ul');
  checkboxDiv.classList.add("checkbox-div");
  checkboxes.appendChild(checkboxDiv);

  checkboxDiv.innerHTML =
    '<input class="checkbox" id="' + Cname + '" name="' + Cname + '" type="checkbox"/><label class="checkbox-label" for="' + Cname + '">' + Cname + '</label>'
}

//button submit
form2.addEventListener('submit', function (event) {
  event.preventDefault();
  const myFormData = new FormData(event.target);

  const formDataObj = {};
  myFormData.forEach((value, key) => (formDataObj[key] = value));

  loadimgs(formDataObj)
  document.getElementById("step2").classList.add("hidden")
  document.getElementById("step3").classList.remove("hidden")

  // document.getElementById("imageSelectorContainer").style.display = "block"
  document.getElementById("defaultCanvas0").style.display = "block"
  step = 3;
});


let imgBrush = [];

//load images
function loadimgs(formDataObj) {
  for (let i = 0; i < imgs.length; i++) {
    // console.log(formDataObj[imgs[i].name]);

    //check if images are clicked
    if (!(formDataObj[imgs[i].name] === undefined)) {
      console.log("load img: " + imgs[i].name, +"source: " + imgs[i].imgSource)
      //create images
      let createimg = document.createElement('img');
      createimg.src = imgs[i].imgSource;
      createimg.classList = "imageSelector"
      imageSelectorContainer.appendChild(createimg);
    }
  }

  //click event
  imageSelector.forEach((item, i) => {
    item.addEventListener('click', (event) => {

      imgBrush[0] = loadImage(item.src, loadBrushImage())
    })
  })
}


