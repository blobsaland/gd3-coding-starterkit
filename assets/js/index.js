let imgs = [{
    name: "Basic",
    type: "checkbox",
    imgSource: "assets/images/building/basic.jpg"
  },
  {
    name: "Broken",
    type: "checkbox",
    imgSource: "assets/images/building/broken.png"
  },
  {
    name: "Casual",
    type: "checkbox",
    imgSource: "assets/images/building/casual.jpg"
  },
  {
    name: "Chaotic",
    type: "checkbox",
    imgSource: "assets/images/building/chaotic.jpg"
  },
  {
    name: "Cheerfull",
    type: "checkbox",
    imgSource: "assets/images/building/cheerfull.png"
  },
  {
    name: "Clumsy",
    type: "checkbox",
    imgSource: "assets/images/building/clumsy.png"
  },
  {
    name: "Confident",
    type: "checkbox",
    imgSource: "assets/images/building/confident.png"
  },
  {
    name: "Cosy",
    type: "checkbox",
    imgSource: "assets/images/building/cosy.jpg"
  },
  {
    name: "Dangerous",
    type: "checkbox",
    imgSource: "assets/images/building/dangerous.jpg"
  },
  {
    name: "Dull",
    type: "checkbox",
    imgSource: "assets/images/building/dull.png"
  },
  {
    name: "Fancy",
    type: "checkbox",
    imgSource: "assets/images/building/fancy.png"
  },
  {
    name: "Fun",
    type: "checkbox",
    imgSource: "assets/images/building/fun.jpg"
  },
  {
    name: "Inviting",
    type: "checkbox",
    imgSource: "assets/images/building/inviting.jpg"
  },
  {
    name: "Luxurious",
    type: "checkbox",
    imgSource: "assets/images/building/luxurious.jpg"
  },
  {
    name: "Old Fashioned",
    type: "checkbox",
    imgSource: "assets/images/building/old fashioned.png"
  },
  {
    name: "Outgoing",
    type: "checkbox",
    imgSource: "assets/images/building/outgoing.png"
  },
  {
    name: "Practical",
    type: "checkbox",
    imgSource: "assets/images/building/practical.jpg"
  },
  {
    name: "Pretentious",
    type: "checkbox",
    imgSource: "assets/images/building/pretentious.jpg"
  },
  {
    name: "Proud",
    type: "checkbox",
    imgSource: "assets/images/building/proud.png"
  },
  {
    name: "Quiet",
    type: "checkbox",
    imgSource: "assets/images/building/quiet.png"
  },
  {
    name: "Serious",
    type: "checkbox",
    imgSource: "assets/images/building/serious.png"
  },
  {
    name: "Shy",
    type: "checkbox",
    imgSource: "assets/images/building/shy.png"
  },
  {
    name: "Sociable",
    type: "checkbox",
    imgSource: "assets/images/building/sociable.jpg"
  },
  {
    name: "Steadfast",
    type: "checkbox",
    imgSource: "assets/images/building/Steadfast.jpg"
  },
  {
    name: "Strong",
    type: "checkbox",
    imgSource: "assets/images/building/strong.jpg"
  }
  // {
  //   name : "Vega",
  //   type : "radio",
  //   options: [
  //     {name : "vega", imgSource: ""}, 
  //     {name : "non-vega", imgSource: ""}],
  //   imgSource: "assets/images/building/dull.png"
  // },

];
const imageSelectorContainer = document.getElementById('imageSelectorContainer');
const form = document.getElementById('form');
const checkboxes = document.getElementById('checkboxes');

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
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const myFormData = new FormData(event.target);

  const formDataObj = {};
  myFormData.forEach((value, key) => (formDataObj[key] = value));

  loadimgs(formDataObj)
  document.getElementById("step2").style.display = "none"
  document.getElementById("imageSelectorContainer").style.display = "block"
  // document.getElementById("defaultCanvas0").style.display = "block"

});

//load images
function loadimgs(formDataObj) {
  for (let i = 0; i < imgs.length; i++) {
    // console.log(formDataObj[imgs[i].name]);

    if (!(formDataObj[imgs[i].name] === undefined)) {
      console.log("load img: " + imgs[i].name, +"source: " + imgs[i].imgSource)

      let createimg = document.createElement('img');
      createimg.src = imgs[i].imgSource;
      createimg.classList = "imageSelector"
      imageSelectorContainer.appendChild(createimg);


    }
  }

  imageSelector.forEach((item, i) => {
    item.addEventListener('click', (event) => {
      console.log(item.src)
    })
  })
}

