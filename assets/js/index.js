const form = document.getElementById('info');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const myFormData = new FormData(event.target);

  const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);
});
